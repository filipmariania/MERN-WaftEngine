'use strict';
const crypto = require('crypto');
const Validator = require('validator');
const isEmpty = require('../validation/isEmpty');
const PhoneNumber = require('awesome-phonenumber');

const otherHelper = {};

otherHelper.mongoIdExistInArray = (mongodbIdArray, mongoDbId) => {
  for (let i = 0; i < mongodbIdArray.length; i++) {
    if (mongodbIdArray[i].toString() === mongoDbId.toString()) return true;
  }
  return false;
};

otherHelper.generateRandomHexString = len => {
  return crypto
    .randomBytes(Math.ceil(len / 2))
    .toString('hex') // convert to hexadecimal format
    .slice(0, len)
    .toUpperCase(); // return required number of characters
};
otherHelper.generateRandomNumberString = len => {
  return Math.floor(Math.random() * 8999 + 1000);
};
otherHelper.parsePhoneNo = (phone, RegionCode) => {
  try {
    var pn = new PhoneNumber(phone, RegionCode);
    if (!pn.isValid()) {
      return {
        status: false,
        data: 'Provided no is invalid mobile no.',
      };
    } else if (!pn.isMobile()) {
      return {
        status: false,
        data: 'Provided no should be mobile no.',
      };
    } else if (pn.isValid()) {
      return {
        status: true,
        data: pn.getNumber('e164'),
      };
    } else {
      return {
        status: true,
        data: pn.getNumber('e164'),
      };
    }
  } catch (err) {
    return err;
  }
};

otherHelper.parseFilters = (req, defaults, is_deleted) => {
  const size_default = defaults ? defaults : 10;
  let page;
  let size;
  let sortQuery = { _id: -1 };
  let searchQuery = {};
  let populate = [];
  let selectQuery = { __v: 0 };
  if (is_deleted === undefined) {
  } else if (is_deleted === null) {
  } else {
    if (!isNaN(is_deleted)) {
      searchQuery = { ...searchQuery, is_deleted: is_deleted };
      selectQuery = { ...selectQuery, is_deleted: 0, deleted_at: 0, deleted_by: 0 };
    }
  }
  if (req.query.page && !isNaN(req.query.page) && req.query.page != 0) {
    page = Math.abs(req.query.page);
  } else {
    page = 1;
  }
  if (req.query.size && !isNaN(req.query.size) && req.query.size != 0) {
    size = Math.abs(req.query.size);
  } else {
    size = size_default;
  }
  if (req.query.sort) {
    let sortfield = req.query.sort.slice(1);
    let sortby = req.query.sort.charAt(0);
    if (sortby == 1 && !isNaN(sortby) && sortfield) {
      //one is ascending
      sortQuery = sortfield;
    } else if (sortby == 0 && !isNaN(sortby) && sortfield) {
      //zero is descending
      sortQuery = '-' + sortfield;
    } else {
      sortQuery = '';
    }
  }
  return { page, size, sortQuery, searchQuery, selectQuery, populate };
};

otherHelper.sendResponse = (res, status, success, data, errors, msg, token) => {
  const response = {};
  if (success !== null) response.success = success;
  if (data !== null) response.data = data;
  if (errors !== null) response.errors = errors;
  if (msg !== null) response.msg = msg;
  if (token !== null) response.token = token;
  return res.status(status).json(response);
};
otherHelper.paginationSendResponse = (res, status, success, data, msg, pageno, pagesize, totaldata) => {
  const response = {};
  if (data) response.data = data;
  if (success !== null) response.success = success;
  if (msg) response.msg = msg;
  if (pageno) response.page = pageno;
  if (pagesize) response.size = pagesize;
  if (typeof totaldata === 'number') response.totaldata = totaldata;
  return res.status(status).json(response);
};
otherHelper.getQuerySendResponse = async (model, page, size, sortQuery, searchQuery, selectQuery, next, populate) => {
  let datas = {};
  try {
    datas.data = await model
      .find(searchQuery)
      .select(selectQuery)
      .sort(sortQuery)
      .skip((page - 1) * size)
      .limit(size * 1)
      .populate(populate);
    datas.totaldata = await model.countDocuments(searchQuery);
    return datas;
  } catch (err) {
    next(err);
  }
};
otherHelper.slugify = text => {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, ''); // Trim - from end of text
};
module.exports = otherHelper;
