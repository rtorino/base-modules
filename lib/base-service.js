'use strict';

var util = require('util');
var Events = require( 'events' );

// Base Service
// ------------
function BaseService( options ) {
	options = options || {};

	this.model = options.model;
	this.modelName = this.model.name;

	Events.EventEmitter.call(this);
}

util.inherits(BaseService, Events.EventEmitter);

// Instance Methods
// ----------------

/**
 * Create new instance of Model class, saved in database
 */
BaseService.prototype.create = function (message, callback) {};

/**
 * Update or insert a model instance
 */
BaseService.prototype.upsert = function (message, callback) {};

/**
 * Find one record, same as `find`, but limited to one object.
 * Returns an object, not collection.
 * If not found, create the object using data provided as second argument.
 */
BaseService.prototype.findOrCreate = function (message, callback) {};

/**
 * Check whether a model instance exists in database.
 */
BaseService.prototype.exists = function (message, callback) {};

/**
 * Find object by ID.
 */
BaseService.prototype.findById = function (message, callback) {};

/**
 * Find all model instances that match `filter` specification.
 */
BaseService.prototype.find = function (message, callback) {};

/**
 * Find one model instance that matches `filter` specification.
 * Same as `find`, but limited to one result;
 * Returns object, not collection.
 */
BaseService.prototype.findOne = function (message, callback) {};

/**
 * Destroy all model instances that match the optional `filter` specification.
 */
BaseService.prototype.destroyAll = function (message, callback) {};

/**
 * Alias for `destroyAll`
 */
BaseService.prototype.remove = BaseService.prototype.destroyAll;

/**
 * Alias for `destroyAll`
 */
BaseService.prototype.deleteAll = BaseService.prototype.destroyAll;


/**
 * Update multiple instances that match the where clause
 */
BaseService.prototype.updateAll = function (message, callback) {};

/**
 * Destroy model instance with the specified ID.
 */
BaseService.prototype.destroyById = function (message, callback) {};

/**
 * Alias for destroyById.
 */
BaseService.prototype.removeById = BaseService.prototype.destroyById;

/**
 * Alias for destroyById.
 */
BaseService.prototype.deleteById = BaseService.prototype.destroyById;


/**
 * Return the number of records that match the optional filter.
 */
BaseService.prototype.count = function (message, callback) {};

module.exports = BaseService;
