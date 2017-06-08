const db = require('../db/order');

exports.create = (body, cb) => {
  
  const createOrder = (newOrder, callback) => {
    let {name, load, pickup, delivery} = newOrder;
    db.create({name, load, pickup, delivery}, (err, order) => {
      if (err) return cb(err);
      callback(order);
    });
  };

  // save multiple orders
  if (Array.isArray(body)) {
    let newOrders = [];
    body.forEach((el, index) => {
      if (index + 1 === body.length) {
        createOrder(el, newOrder => {
          newOrders.push(newOrder);
          cb(null, newOrders);
        });
      } else {
        createOrder(el, newOrder => {
          newOrders.push(newOrder);
        });
      }
    });
  // save single order
  } else {
    createOrder(body, newOrder => {
      cb(null, newOrder);
    });
  }
  
};

exports.readAll = cb => {
  db.find({}).exec((err, orders) => {
    if (err) return cb(err);
    cb(null, orders);
  });
};

exports.read = (id, cb) => {
  db.find({_id: id}).exec((err, order) => {
    if (err) return cb(err);
    cb(null, order);
  });
};

exports.update = (id, body, cb) => {
  const {type} = body;
  db.findOneAndUpdate({_id: id}, {type: type}, (err, order) => {
    if (err) return cb(err);
    cb(null, order);
  });
};

exports.deleteAll = cb => {
  db.find({}).exec((err, orders) => {
    if (err) return cb(err);
    db.remove(err => {
      if (err) return cb(err);
      cb(null, orders);
    });
  });
};

exports.delete = (id, cb) => {
  db.findOneAndRemove({_id: id}, (err, order) => {
    if (err) return cb(err);
    cb(null, order);
  });
};