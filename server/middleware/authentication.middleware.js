'use strict';
const jwt = require('jsonwebtoken');
const HttpStatus = require('http-status');

const otherHelper = require('../helper/others.helper');
const { secretOrKey } = require('../config/keys');
const accessSch = require('../modules/Roles/access');
const modulesSch = require('../modules/Roles/module');
const rolesSch = require('../modules/Roles/role');
const authMiddleware = {};

authMiddleware.authorization = async (req, res, next) => {
  try {
    let token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers.authorization || req.headers.token;
    if (token && token.length) {
      token = token.replace('Bearer ', '');
      const d = await jwt.verify(token, secretOrKey);
      req.user = d;
      return next();
    }
    return otherHelper.sendResponse(res, HttpStatus.UNAUTHORIZED, false, null, token, 'token not found', null);
  } catch (err) {
    return next(err);
  }
};
authMiddleware.authentication = async (req, res, next) => {
  try {
    const user = req.user;
    const role = await rolesSch.find({ RolesTitle: { $in: user.roles } }, { _id: 1 });
    const path = req.baseUrl + req.route.path;
    const method = req.method;
    const modules = await modulesSch.findOne(
      {
        'Path.ServerRoutes.method': method,
        'Path.ServerRoutes.route': path,
      },
      { Path: 1 },
    );
    let moduleAccessType = null;
    for (let i = 0; i < modules.Path.length; i++) {
      const routes = modules.Path[i].ServerRoutes;
      for (let j = 0; j < routes.length; j++) {
        if (routes[j].method === method && routes[j].route === path) {
          moduleAccessType = modules.Path[i].AccessType;
        }
      }
    }
    return next();
    const moduleId = modules && modules._id;
    if (role && role.length && moduleId && moduleAccessType) {
      for (let i = 0; i < role.length; i++) {
        const activeRole = role[i];
        const accessFilter = { RoleId: activeRole._id, IsActive: true, ModuleId: moduleId };
        const access = await accessSch.findOne(accessFilter);
        if (access && access.AccessType) {
          const isExist = access.AccessType.filter(s => s.includes(moduleAccessType));
          if (isExist.length > 0) {
            return next();
          }
        }
      }
      return otherHelper.sendResponse(res, HttpStatus.UNAUTHORIZED, false, null, null, 'Authorization Failed 1', null);
    } else {
      return otherHelper.sendResponse(res, HttpStatus.UNAUTHORIZED, false, null, null, 'Authorization Failed 2', null);
    }
  } catch (err) {
    next(err);
  }
};
module.exports = authMiddleware;
