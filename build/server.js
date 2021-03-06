'use strict';

const express = require('express');
const bodyParser = require('body-parser');

function makeServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  // configure routes with node app
  const server = app.listen(5000, function () {
    console.log('Listening on port %s...', server.address().port);
  });

  return server;
}

module.exports = makeServer;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJib2R5UGFyc2VyIiwibWFrZVNlcnZlciIsImFwcCIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJzZXJ2ZXIiLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiYWRkcmVzcyIsInBvcnQiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFFQTs7QUFFQSxNQUFNQSxVQUFVQyxRQUFRLFNBQVIsQ0FBaEI7QUFDQSxNQUFNQyxhQUFhRCxRQUFRLGFBQVIsQ0FBbkI7O0FBRUEsU0FBU0UsVUFBVCxHQUE0QjtBQUMxQixRQUFNQyxNQUFNSixTQUFaOztBQUVBSSxNQUFJQyxHQUFKLENBQVFILFdBQVdJLElBQVgsRUFBUjtBQUNBRixNQUFJQyxHQUFKLENBQVFILFdBQVdLLFVBQVgsQ0FBc0IsRUFBQ0MsVUFBVSxJQUFYLEVBQXRCLENBQVI7O0FBRUE7QUFDQSxRQUFNQyxTQUFTTCxJQUFJTSxNQUFKLENBQVcsSUFBWCxFQUFpQixZQUFXO0FBQ3pDQyxZQUFRQyxHQUFSLENBQVkseUJBQVosRUFBdUNILE9BQU9JLE9BQVAsR0FBaUJDLElBQXhEO0FBQ0QsR0FGYyxDQUFmOztBQUlBLFNBQU9MLE1BQVA7QUFDRDs7QUFFRE0sT0FBT0MsT0FBUCxHQUFpQmIsVUFBakIiLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gQGZsb3dcblxuJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuY29uc3QgYm9keVBhcnNlciA9IHJlcXVpcmUoJ2JvZHktcGFyc2VyJyk7XG5cbmZ1bmN0aW9uIG1ha2VTZXJ2ZXIoKTogdm9pZCB7XG4gIGNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuICBhcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKTtcbiAgYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoe2V4dGVuZGVkOiB0cnVlfSkpO1xuXG4gIC8vIGNvbmZpZ3VyZSByb3V0ZXMgd2l0aCBub2RlIGFwcFxuICBjb25zdCBzZXJ2ZXIgPSBhcHAubGlzdGVuKDUwMDAsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKCdMaXN0ZW5pbmcgb24gcG9ydCAlcy4uLicsIHNlcnZlci5hZGRyZXNzKCkucG9ydCk7XG4gIH0pO1xuXG4gIHJldHVybiBzZXJ2ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWFrZVNlcnZlcjtcbiJdfQ==