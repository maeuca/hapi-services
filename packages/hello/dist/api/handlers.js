"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.infoPost = infoPost;
exports.infoGet = infoGet;
async function infoPost(request, h) {
  const payload = request.payload;
  return JSON.stringify({ payload });
}

async function infoGet(request, h) {
  const query = request.query;
  return JSON.stringify({ query });
}