var $protobuf = window.protobuf;
$protobuf.roots.default=window;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    msg.PbMsgRetCode = (function() {

        /**
         * Properties of a PbMsgRetCode.
         * @memberof msg
         * @interface IPbMsgRetCode
         * @property {number} retCode PbMsgRetCode retCode
         */

        /**
         * Constructs a new PbMsgRetCode.
         * @memberof msg
         * @classdesc Represents a PbMsgRetCode.
         * @implements IPbMsgRetCode
         * @constructor
         * @param {msg.IPbMsgRetCode=} [properties] Properties to set
         */
        function PbMsgRetCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetCode retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetCode
         * @instance
         */
        PbMsgRetCode.prototype.retCode = 0;

        /**
         * Creates a new PbMsgRetCode instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {msg.IPbMsgRetCode=} [properties] Properties to set
         * @returns {msg.PbMsgRetCode} PbMsgRetCode instance
         */
        PbMsgRetCode.create = function create(properties) {
            return new PbMsgRetCode(properties);
        };

        /**
         * Encodes the specified PbMsgRetCode message. Does not implicitly {@link msg.PbMsgRetCode.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {msg.IPbMsgRetCode} message PbMsgRetCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetCode message, length delimited. Does not implicitly {@link msg.PbMsgRetCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {msg.IPbMsgRetCode} message PbMsgRetCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetCode message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetCode} PbMsgRetCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetCode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetCode} PbMsgRetCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetCode message.
         * @function verify
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgRetCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetCode} PbMsgRetCode
         */
        PbMsgRetCode.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetCode)
                return object;
            var message = new $root.msg.PbMsgRetCode();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetCode
         * @static
         * @param {msg.PbMsgRetCode} message PbMsgRetCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            return object;
        };

        /**
         * Converts this PbMsgRetCode to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetCode.MSG
         * @enum {string}
         * @property {number} ID=1 ID value
         */
        PbMsgRetCode.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1] = "ID"] = 1;
            return values;
        })();

        return PbMsgRetCode;
    })();

    msg.PbMsgBeginPaidGuide = (function() {

        /**
         * Properties of a PbMsgBeginPaidGuide.
         * @memberof msg
         * @interface IPbMsgBeginPaidGuide
         * @property {number} number PbMsgBeginPaidGuide number
         */

        /**
         * Constructs a new PbMsgBeginPaidGuide.
         * @memberof msg
         * @classdesc Represents a PbMsgBeginPaidGuide.
         * @implements IPbMsgBeginPaidGuide
         * @constructor
         * @param {msg.IPbMsgBeginPaidGuide=} [properties] Properties to set
         */
        function PbMsgBeginPaidGuide(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgBeginPaidGuide number.
         * @member {number} number
         * @memberof msg.PbMsgBeginPaidGuide
         * @instance
         */
        PbMsgBeginPaidGuide.prototype.number = 0;

        /**
         * Creates a new PbMsgBeginPaidGuide instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {msg.IPbMsgBeginPaidGuide=} [properties] Properties to set
         * @returns {msg.PbMsgBeginPaidGuide} PbMsgBeginPaidGuide instance
         */
        PbMsgBeginPaidGuide.create = function create(properties) {
            return new PbMsgBeginPaidGuide(properties);
        };

        /**
         * Encodes the specified PbMsgBeginPaidGuide message. Does not implicitly {@link msg.PbMsgBeginPaidGuide.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {msg.IPbMsgBeginPaidGuide} message PbMsgBeginPaidGuide message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBeginPaidGuide.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified PbMsgBeginPaidGuide message, length delimited. Does not implicitly {@link msg.PbMsgBeginPaidGuide.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {msg.IPbMsgBeginPaidGuide} message PbMsgBeginPaidGuide message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBeginPaidGuide.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgBeginPaidGuide message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgBeginPaidGuide} PbMsgBeginPaidGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBeginPaidGuide.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgBeginPaidGuide();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("number"))
                throw $util.ProtocolError("missing required 'number'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgBeginPaidGuide message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgBeginPaidGuide} PbMsgBeginPaidGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBeginPaidGuide.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgBeginPaidGuide message.
         * @function verify
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgBeginPaidGuide.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.number))
                return "number: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgBeginPaidGuide message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgBeginPaidGuide} PbMsgBeginPaidGuide
         */
        PbMsgBeginPaidGuide.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgBeginPaidGuide)
                return object;
            var message = new $root.msg.PbMsgBeginPaidGuide();
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgBeginPaidGuide message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgBeginPaidGuide
         * @static
         * @param {msg.PbMsgBeginPaidGuide} message PbMsgBeginPaidGuide
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgBeginPaidGuide.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.number = 0;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this PbMsgBeginPaidGuide to JSON.
         * @function toJSON
         * @memberof msg.PbMsgBeginPaidGuide
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgBeginPaidGuide.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgBeginPaidGuide.MSG
         * @enum {string}
         * @property {number} ID=4 ID value
         */
        PbMsgBeginPaidGuide.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[4] = "ID"] = 4;
            return values;
        })();

        return PbMsgBeginPaidGuide;
    })();

    msg.PbMsgBeginBuyItem = (function() {

        /**
         * Properties of a PbMsgBeginBuyItem.
         * @memberof msg
         * @interface IPbMsgBeginBuyItem
         * @property {number} itemId PbMsgBeginBuyItem itemId
         * @property {number} number PbMsgBeginBuyItem number
         */

        /**
         * Constructs a new PbMsgBeginBuyItem.
         * @memberof msg
         * @classdesc Represents a PbMsgBeginBuyItem.
         * @implements IPbMsgBeginBuyItem
         * @constructor
         * @param {msg.IPbMsgBeginBuyItem=} [properties] Properties to set
         */
        function PbMsgBeginBuyItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgBeginBuyItem itemId.
         * @member {number} itemId
         * @memberof msg.PbMsgBeginBuyItem
         * @instance
         */
        PbMsgBeginBuyItem.prototype.itemId = 0;

        /**
         * PbMsgBeginBuyItem number.
         * @member {number} number
         * @memberof msg.PbMsgBeginBuyItem
         * @instance
         */
        PbMsgBeginBuyItem.prototype.number = 0;

        /**
         * Creates a new PbMsgBeginBuyItem instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {msg.IPbMsgBeginBuyItem=} [properties] Properties to set
         * @returns {msg.PbMsgBeginBuyItem} PbMsgBeginBuyItem instance
         */
        PbMsgBeginBuyItem.create = function create(properties) {
            return new PbMsgBeginBuyItem(properties);
        };

        /**
         * Encodes the specified PbMsgBeginBuyItem message. Does not implicitly {@link msg.PbMsgBeginBuyItem.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {msg.IPbMsgBeginBuyItem} message PbMsgBeginBuyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBeginBuyItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.number);
            return writer;
        };

        /**
         * Encodes the specified PbMsgBeginBuyItem message, length delimited. Does not implicitly {@link msg.PbMsgBeginBuyItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {msg.IPbMsgBeginBuyItem} message PbMsgBeginBuyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBeginBuyItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgBeginBuyItem message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgBeginBuyItem} PbMsgBeginBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBeginBuyItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgBeginBuyItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemId = reader.int32();
                    break;
                case 2:
                    message.number = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemId"))
                throw $util.ProtocolError("missing required 'itemId'", { instance: message });
            if (!message.hasOwnProperty("number"))
                throw $util.ProtocolError("missing required 'number'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgBeginBuyItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgBeginBuyItem} PbMsgBeginBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBeginBuyItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgBeginBuyItem message.
         * @function verify
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgBeginBuyItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemId))
                return "itemId: integer expected";
            if (!$util.isInteger(message.number))
                return "number: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgBeginBuyItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgBeginBuyItem} PbMsgBeginBuyItem
         */
        PbMsgBeginBuyItem.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgBeginBuyItem)
                return object;
            var message = new $root.msg.PbMsgBeginBuyItem();
            if (object.itemId != null)
                message.itemId = object.itemId | 0;
            if (object.number != null)
                message.number = object.number | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgBeginBuyItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgBeginBuyItem
         * @static
         * @param {msg.PbMsgBeginBuyItem} message PbMsgBeginBuyItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgBeginBuyItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemId = 0;
                object.number = 0;
            }
            if (message.itemId != null && message.hasOwnProperty("itemId"))
                object.itemId = message.itemId;
            if (message.number != null && message.hasOwnProperty("number"))
                object.number = message.number;
            return object;
        };

        /**
         * Converts this PbMsgBeginBuyItem to JSON.
         * @function toJSON
         * @memberof msg.PbMsgBeginBuyItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgBeginBuyItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgBeginBuyItem.MSG
         * @enum {string}
         * @property {number} ID=5 ID value
         */
        PbMsgBeginBuyItem.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5] = "ID"] = 5;
            return values;
        })();

        return PbMsgBeginBuyItem;
    })();

    msg.PbMsgUpdateOffline = (function() {

        /**
         * Properties of a PbMsgUpdateOffline.
         * @memberof msg
         * @interface IPbMsgUpdateOffline
         * @property {number} retCode PbMsgUpdateOffline retCode
         */

        /**
         * Constructs a new PbMsgUpdateOffline.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateOffline.
         * @implements IPbMsgUpdateOffline
         * @constructor
         * @param {msg.IPbMsgUpdateOffline=} [properties] Properties to set
         */
        function PbMsgUpdateOffline(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateOffline retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgUpdateOffline
         * @instance
         */
        PbMsgUpdateOffline.prototype.retCode = 0;

        /**
         * Creates a new PbMsgUpdateOffline instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {msg.IPbMsgUpdateOffline=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateOffline} PbMsgUpdateOffline instance
         */
        PbMsgUpdateOffline.create = function create(properties) {
            return new PbMsgUpdateOffline(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateOffline message. Does not implicitly {@link msg.PbMsgUpdateOffline.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {msg.IPbMsgUpdateOffline} message PbMsgUpdateOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateOffline.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateOffline message, length delimited. Does not implicitly {@link msg.PbMsgUpdateOffline.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {msg.IPbMsgUpdateOffline} message PbMsgUpdateOffline message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateOffline.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateOffline message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateOffline} PbMsgUpdateOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateOffline.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateOffline();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateOffline message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateOffline} PbMsgUpdateOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateOffline.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateOffline message.
         * @function verify
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateOffline.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateOffline message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateOffline} PbMsgUpdateOffline
         */
        PbMsgUpdateOffline.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateOffline)
                return object;
            var message = new $root.msg.PbMsgUpdateOffline();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateOffline message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateOffline
         * @static
         * @param {msg.PbMsgUpdateOffline} message PbMsgUpdateOffline
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateOffline.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            return object;
        };

        /**
         * Converts this PbMsgUpdateOffline to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateOffline
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateOffline.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateOffline.MSG
         * @enum {string}
         * @property {number} ID=10 ID value
         */
        PbMsgUpdateOffline.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[10] = "ID"] = 10;
            return values;
        })();

        return PbMsgUpdateOffline;
    })();

    msg.PbMsgUpdateJson = (function() {

        /**
         * Properties of a PbMsgUpdateJson.
         * @memberof msg
         * @interface IPbMsgUpdateJson
         * @property {number} id PbMsgUpdateJson id
         * @property {string} data PbMsgUpdateJson data
         */

        /**
         * Constructs a new PbMsgUpdateJson.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateJson.
         * @implements IPbMsgUpdateJson
         * @constructor
         * @param {msg.IPbMsgUpdateJson=} [properties] Properties to set
         */
        function PbMsgUpdateJson(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateJson id.
         * @member {number} id
         * @memberof msg.PbMsgUpdateJson
         * @instance
         */
        PbMsgUpdateJson.prototype.id = 0;

        /**
         * PbMsgUpdateJson data.
         * @member {string} data
         * @memberof msg.PbMsgUpdateJson
         * @instance
         */
        PbMsgUpdateJson.prototype.data = "";

        /**
         * Creates a new PbMsgUpdateJson instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {msg.IPbMsgUpdateJson=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateJson} PbMsgUpdateJson instance
         */
        PbMsgUpdateJson.create = function create(properties) {
            return new PbMsgUpdateJson(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateJson message. Does not implicitly {@link msg.PbMsgUpdateJson.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {msg.IPbMsgUpdateJson} message PbMsgUpdateJson message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateJson.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateJson message, length delimited. Does not implicitly {@link msg.PbMsgUpdateJson.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {msg.IPbMsgUpdateJson} message PbMsgUpdateJson message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateJson.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateJson message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateJson} PbMsgUpdateJson
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateJson.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateJson();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateJson message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateJson} PbMsgUpdateJson
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateJson.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateJson message.
         * @function verify
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateJson.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateJson message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateJson} PbMsgUpdateJson
         */
        PbMsgUpdateJson.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateJson)
                return object;
            var message = new $root.msg.PbMsgUpdateJson();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateJson message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateJson
         * @static
         * @param {msg.PbMsgUpdateJson} message PbMsgUpdateJson
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateJson.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.data = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this PbMsgUpdateJson to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateJson
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateJson.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateJson.MSG
         * @enum {string}
         * @property {number} ID=11 ID value
         */
        PbMsgUpdateJson.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[11] = "ID"] = 11;
            return values;
        })();

        return PbMsgUpdateJson;
    })();

    msg.PbMsgUpdateRoleList = (function() {

        /**
         * Properties of a PbMsgUpdateRoleList.
         * @memberof msg
         * @interface IPbMsgUpdateRoleList
         * @property {number} id PbMsgUpdateRoleList id
         * @property {Array.<number>|null} [roleid] PbMsgUpdateRoleList roleid
         */

        /**
         * Constructs a new PbMsgUpdateRoleList.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateRoleList.
         * @implements IPbMsgUpdateRoleList
         * @constructor
         * @param {msg.IPbMsgUpdateRoleList=} [properties] Properties to set
         */
        function PbMsgUpdateRoleList(properties) {
            this.roleid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateRoleList id.
         * @member {number} id
         * @memberof msg.PbMsgUpdateRoleList
         * @instance
         */
        PbMsgUpdateRoleList.prototype.id = 0;

        /**
         * PbMsgUpdateRoleList roleid.
         * @member {Array.<number>} roleid
         * @memberof msg.PbMsgUpdateRoleList
         * @instance
         */
        PbMsgUpdateRoleList.prototype.roleid = $util.emptyArray;

        /**
         * Creates a new PbMsgUpdateRoleList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {msg.IPbMsgUpdateRoleList=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateRoleList} PbMsgUpdateRoleList instance
         */
        PbMsgUpdateRoleList.create = function create(properties) {
            return new PbMsgUpdateRoleList(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateRoleList message. Does not implicitly {@link msg.PbMsgUpdateRoleList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {msg.IPbMsgUpdateRoleList} message PbMsgUpdateRoleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.roleid != null && message.roleid.length)
                for (var i = 0; i < message.roleid.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleid[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateRoleList message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {msg.IPbMsgUpdateRoleList} message PbMsgUpdateRoleList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateRoleList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateRoleList} PbMsgUpdateRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateRoleList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.roleid && message.roleid.length))
                        message.roleid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.roleid.push(reader.int32());
                    } else
                        message.roleid.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateRoleList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateRoleList} PbMsgUpdateRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateRoleList message.
         * @function verify
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateRoleList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.roleid != null && message.hasOwnProperty("roleid")) {
                if (!Array.isArray(message.roleid))
                    return "roleid: array expected";
                for (var i = 0; i < message.roleid.length; ++i)
                    if (!$util.isInteger(message.roleid[i]))
                        return "roleid: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgUpdateRoleList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateRoleList} PbMsgUpdateRoleList
         */
        PbMsgUpdateRoleList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateRoleList)
                return object;
            var message = new $root.msg.PbMsgUpdateRoleList();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.roleid) {
                if (!Array.isArray(object.roleid))
                    throw TypeError(".msg.PbMsgUpdateRoleList.roleid: array expected");
                message.roleid = [];
                for (var i = 0; i < object.roleid.length; ++i)
                    message.roleid[i] = object.roleid[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateRoleList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateRoleList
         * @static
         * @param {msg.PbMsgUpdateRoleList} message PbMsgUpdateRoleList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateRoleList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roleid = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.roleid && message.roleid.length) {
                object.roleid = [];
                for (var j = 0; j < message.roleid.length; ++j)
                    object.roleid[j] = message.roleid[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgUpdateRoleList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateRoleList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateRoleList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateRoleList.MSG
         * @enum {string}
         * @property {number} ID=12 ID value
         */
        PbMsgUpdateRoleList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[12] = "ID"] = 12;
            return values;
        })();

        return PbMsgUpdateRoleList;
    })();

    msg.PbMsgUpdateJsonList = (function() {

        /**
         * Properties of a PbMsgUpdateJsonList.
         * @memberof msg
         * @interface IPbMsgUpdateJsonList
         * @property {Array.<msg.IPbMsgUpdateJson>|null} [datas] PbMsgUpdateJsonList datas
         */

        /**
         * Constructs a new PbMsgUpdateJsonList.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateJsonList.
         * @implements IPbMsgUpdateJsonList
         * @constructor
         * @param {msg.IPbMsgUpdateJsonList=} [properties] Properties to set
         */
        function PbMsgUpdateJsonList(properties) {
            this.datas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateJsonList datas.
         * @member {Array.<msg.IPbMsgUpdateJson>} datas
         * @memberof msg.PbMsgUpdateJsonList
         * @instance
         */
        PbMsgUpdateJsonList.prototype.datas = $util.emptyArray;

        /**
         * Creates a new PbMsgUpdateJsonList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {msg.IPbMsgUpdateJsonList=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateJsonList} PbMsgUpdateJsonList instance
         */
        PbMsgUpdateJsonList.create = function create(properties) {
            return new PbMsgUpdateJsonList(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateJsonList message. Does not implicitly {@link msg.PbMsgUpdateJsonList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {msg.IPbMsgUpdateJsonList} message PbMsgUpdateJsonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateJsonList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.datas != null && message.datas.length)
                for (var i = 0; i < message.datas.length; ++i)
                    $root.msg.PbMsgUpdateJson.encode(message.datas[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateJsonList message, length delimited. Does not implicitly {@link msg.PbMsgUpdateJsonList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {msg.IPbMsgUpdateJsonList} message PbMsgUpdateJsonList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateJsonList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateJsonList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateJsonList} PbMsgUpdateJsonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateJsonList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateJsonList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.datas && message.datas.length))
                        message.datas = [];
                    message.datas.push($root.msg.PbMsgUpdateJson.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgUpdateJsonList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateJsonList} PbMsgUpdateJsonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateJsonList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateJsonList message.
         * @function verify
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateJsonList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.datas != null && message.hasOwnProperty("datas")) {
                if (!Array.isArray(message.datas))
                    return "datas: array expected";
                for (var i = 0; i < message.datas.length; ++i) {
                    var error = $root.msg.PbMsgUpdateJson.verify(message.datas[i]);
                    if (error)
                        return "datas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgUpdateJsonList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateJsonList} PbMsgUpdateJsonList
         */
        PbMsgUpdateJsonList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateJsonList)
                return object;
            var message = new $root.msg.PbMsgUpdateJsonList();
            if (object.datas) {
                if (!Array.isArray(object.datas))
                    throw TypeError(".msg.PbMsgUpdateJsonList.datas: array expected");
                message.datas = [];
                for (var i = 0; i < object.datas.length; ++i) {
                    if (typeof object.datas[i] !== "object")
                        throw TypeError(".msg.PbMsgUpdateJsonList.datas: object expected");
                    message.datas[i] = $root.msg.PbMsgUpdateJson.fromObject(object.datas[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateJsonList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateJsonList
         * @static
         * @param {msg.PbMsgUpdateJsonList} message PbMsgUpdateJsonList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateJsonList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.datas = [];
            if (message.datas && message.datas.length) {
                object.datas = [];
                for (var j = 0; j < message.datas.length; ++j)
                    object.datas[j] = $root.msg.PbMsgUpdateJson.toObject(message.datas[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgUpdateJsonList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateJsonList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateJsonList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateJsonList.MSG
         * @enum {string}
         * @property {number} ID=13 ID value
         */
        PbMsgUpdateJsonList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[13] = "ID"] = 13;
            return values;
        })();

        return PbMsgUpdateJsonList;
    })();

    msg.PbMsgGetAwardById = (function() {

        /**
         * Properties of a PbMsgGetAwardById.
         * @memberof msg
         * @interface IPbMsgGetAwardById
         * @property {number} id PbMsgGetAwardById id
         * @property {Array.<number>|null} [argv] PbMsgGetAwardById argv
         * @property {number|null} [time] PbMsgGetAwardById time
         */

        /**
         * Constructs a new PbMsgGetAwardById.
         * @memberof msg
         * @classdesc Represents a PbMsgGetAwardById.
         * @implements IPbMsgGetAwardById
         * @constructor
         * @param {msg.IPbMsgGetAwardById=} [properties] Properties to set
         */
        function PbMsgGetAwardById(properties) {
            this.argv = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetAwardById id.
         * @member {number} id
         * @memberof msg.PbMsgGetAwardById
         * @instance
         */
        PbMsgGetAwardById.prototype.id = 0;

        /**
         * PbMsgGetAwardById argv.
         * @member {Array.<number>} argv
         * @memberof msg.PbMsgGetAwardById
         * @instance
         */
        PbMsgGetAwardById.prototype.argv = $util.emptyArray;

        /**
         * PbMsgGetAwardById time.
         * @member {number} time
         * @memberof msg.PbMsgGetAwardById
         * @instance
         */
        PbMsgGetAwardById.prototype.time = 0;

        /**
         * Creates a new PbMsgGetAwardById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {msg.IPbMsgGetAwardById=} [properties] Properties to set
         * @returns {msg.PbMsgGetAwardById} PbMsgGetAwardById instance
         */
        PbMsgGetAwardById.create = function create(properties) {
            return new PbMsgGetAwardById(properties);
        };

        /**
         * Encodes the specified PbMsgGetAwardById message. Does not implicitly {@link msg.PbMsgGetAwardById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {msg.IPbMsgGetAwardById} message PbMsgGetAwardById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetAwardById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.argv != null && message.argv.length)
                for (var i = 0; i < message.argv.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.argv[i]);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetAwardById message, length delimited. Does not implicitly {@link msg.PbMsgGetAwardById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {msg.IPbMsgGetAwardById} message PbMsgGetAwardById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetAwardById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetAwardById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetAwardById} PbMsgGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetAwardById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetAwardById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.argv && message.argv.length))
                        message.argv = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.argv.push(reader.int32());
                    } else
                        message.argv.push(reader.int32());
                    break;
                case 3:
                    message.time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetAwardById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetAwardById} PbMsgGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetAwardById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetAwardById message.
         * @function verify
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetAwardById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.argv != null && message.hasOwnProperty("argv")) {
                if (!Array.isArray(message.argv))
                    return "argv: array expected";
                for (var i = 0; i < message.argv.length; ++i)
                    if (!$util.isInteger(message.argv[i]))
                        return "argv: integer[] expected";
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetAwardById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetAwardById} PbMsgGetAwardById
         */
        PbMsgGetAwardById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetAwardById)
                return object;
            var message = new $root.msg.PbMsgGetAwardById();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.argv) {
                if (!Array.isArray(object.argv))
                    throw TypeError(".msg.PbMsgGetAwardById.argv: array expected");
                message.argv = [];
                for (var i = 0; i < object.argv.length; ++i)
                    message.argv[i] = object.argv[i] | 0;
            }
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetAwardById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetAwardById
         * @static
         * @param {msg.PbMsgGetAwardById} message PbMsgGetAwardById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetAwardById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.argv = [];
            if (options.defaults) {
                object.id = 0;
                object.time = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.argv && message.argv.length) {
                object.argv = [];
                for (var j = 0; j < message.argv.length; ++j)
                    object.argv[j] = message.argv[j];
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this PbMsgGetAwardById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetAwardById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetAwardById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetAwardById.MSG
         * @enum {string}
         * @property {number} ID=1010 ID value
         */
        PbMsgGetAwardById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1010] = "ID"] = 1010;
            return values;
        })();

        return PbMsgGetAwardById;
    })();

    msg.PbMsgRetGetAwardById = (function() {

        /**
         * Properties of a PbMsgRetGetAwardById.
         * @memberof msg
         * @interface IPbMsgRetGetAwardById
         * @property {number} retCode PbMsgRetGetAwardById retCode
         * @property {Array.<msg.PbMsgRetGetAwardById.IItem>|null} [award] PbMsgRetGetAwardById award
         * @property {Array.<msg.IPbMsgUpdateJson>|null} [datas] PbMsgRetGetAwardById datas
         */

        /**
         * Constructs a new PbMsgRetGetAwardById.
         * @memberof msg
         * @classdesc Represents a PbMsgRetGetAwardById.
         * @implements IPbMsgRetGetAwardById
         * @constructor
         * @param {msg.IPbMsgRetGetAwardById=} [properties] Properties to set
         */
        function PbMsgRetGetAwardById(properties) {
            this.award = [];
            this.datas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetGetAwardById retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetGetAwardById
         * @instance
         */
        PbMsgRetGetAwardById.prototype.retCode = 0;

        /**
         * PbMsgRetGetAwardById award.
         * @member {Array.<msg.PbMsgRetGetAwardById.IItem>} award
         * @memberof msg.PbMsgRetGetAwardById
         * @instance
         */
        PbMsgRetGetAwardById.prototype.award = $util.emptyArray;

        /**
         * PbMsgRetGetAwardById datas.
         * @member {Array.<msg.IPbMsgUpdateJson>} datas
         * @memberof msg.PbMsgRetGetAwardById
         * @instance
         */
        PbMsgRetGetAwardById.prototype.datas = $util.emptyArray;

        /**
         * Creates a new PbMsgRetGetAwardById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {msg.IPbMsgRetGetAwardById=} [properties] Properties to set
         * @returns {msg.PbMsgRetGetAwardById} PbMsgRetGetAwardById instance
         */
        PbMsgRetGetAwardById.create = function create(properties) {
            return new PbMsgRetGetAwardById(properties);
        };

        /**
         * Encodes the specified PbMsgRetGetAwardById message. Does not implicitly {@link msg.PbMsgRetGetAwardById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {msg.IPbMsgRetGetAwardById} message PbMsgRetGetAwardById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetAwardById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.award != null && message.award.length)
                for (var i = 0; i < message.award.length; ++i)
                    $root.msg.PbMsgRetGetAwardById.Item.encode(message.award[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.datas != null && message.datas.length)
                for (var i = 0; i < message.datas.length; ++i)
                    $root.msg.PbMsgUpdateJson.encode(message.datas[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetGetAwardById message, length delimited. Does not implicitly {@link msg.PbMsgRetGetAwardById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {msg.IPbMsgRetGetAwardById} message PbMsgRetGetAwardById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetAwardById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetGetAwardById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetGetAwardById} PbMsgRetGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetAwardById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetAwardById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    if (!(message.award && message.award.length))
                        message.award = [];
                    message.award.push($root.msg.PbMsgRetGetAwardById.Item.decode(reader, reader.uint32()));
                    break;
                case 3:
                    if (!(message.datas && message.datas.length))
                        message.datas = [];
                    message.datas.push($root.msg.PbMsgUpdateJson.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetGetAwardById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetGetAwardById} PbMsgRetGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetAwardById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetGetAwardById message.
         * @function verify
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetGetAwardById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.award != null && message.hasOwnProperty("award")) {
                if (!Array.isArray(message.award))
                    return "award: array expected";
                for (var i = 0; i < message.award.length; ++i) {
                    var error = $root.msg.PbMsgRetGetAwardById.Item.verify(message.award[i]);
                    if (error)
                        return "award." + error;
                }
            }
            if (message.datas != null && message.hasOwnProperty("datas")) {
                if (!Array.isArray(message.datas))
                    return "datas: array expected";
                for (var i = 0; i < message.datas.length; ++i) {
                    var error = $root.msg.PbMsgUpdateJson.verify(message.datas[i]);
                    if (error)
                        return "datas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetGetAwardById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetGetAwardById} PbMsgRetGetAwardById
         */
        PbMsgRetGetAwardById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetGetAwardById)
                return object;
            var message = new $root.msg.PbMsgRetGetAwardById();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.award) {
                if (!Array.isArray(object.award))
                    throw TypeError(".msg.PbMsgRetGetAwardById.award: array expected");
                message.award = [];
                for (var i = 0; i < object.award.length; ++i) {
                    if (typeof object.award[i] !== "object")
                        throw TypeError(".msg.PbMsgRetGetAwardById.award: object expected");
                    message.award[i] = $root.msg.PbMsgRetGetAwardById.Item.fromObject(object.award[i]);
                }
            }
            if (object.datas) {
                if (!Array.isArray(object.datas))
                    throw TypeError(".msg.PbMsgRetGetAwardById.datas: array expected");
                message.datas = [];
                for (var i = 0; i < object.datas.length; ++i) {
                    if (typeof object.datas[i] !== "object")
                        throw TypeError(".msg.PbMsgRetGetAwardById.datas: object expected");
                    message.datas[i] = $root.msg.PbMsgUpdateJson.fromObject(object.datas[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetGetAwardById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetGetAwardById
         * @static
         * @param {msg.PbMsgRetGetAwardById} message PbMsgRetGetAwardById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetGetAwardById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.award = [];
                object.datas = [];
            }
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.award && message.award.length) {
                object.award = [];
                for (var j = 0; j < message.award.length; ++j)
                    object.award[j] = $root.msg.PbMsgRetGetAwardById.Item.toObject(message.award[j], options);
            }
            if (message.datas && message.datas.length) {
                object.datas = [];
                for (var j = 0; j < message.datas.length; ++j)
                    object.datas[j] = $root.msg.PbMsgUpdateJson.toObject(message.datas[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetGetAwardById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetGetAwardById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetGetAwardById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetGetAwardById.MSG
         * @enum {string}
         * @property {number} ID=2010 ID value
         */
        PbMsgRetGetAwardById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2010] = "ID"] = 2010;
            return values;
        })();

        PbMsgRetGetAwardById.Item = (function() {

            /**
             * Properties of an Item.
             * @memberof msg.PbMsgRetGetAwardById
             * @interface IItem
             * @property {number} id Item id
             * @property {number} num Item num
             */

            /**
             * Constructs a new Item.
             * @memberof msg.PbMsgRetGetAwardById
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {msg.PbMsgRetGetAwardById.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Item id.
             * @member {number} id
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @instance
             */
            Item.prototype.id = 0;

            /**
             * Item num.
             * @member {number} num
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @instance
             */
            Item.prototype.num = 0;

            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {msg.PbMsgRetGetAwardById.IItem=} [properties] Properties to set
             * @returns {msg.PbMsgRetGetAwardById.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };

            /**
             * Encodes the specified Item message. Does not implicitly {@link msg.PbMsgRetGetAwardById.Item.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {msg.PbMsgRetGetAwardById.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
                return writer;
            };

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link msg.PbMsgRetGetAwardById.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {msg.PbMsgRetGetAwardById.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetGetAwardById.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetAwardById.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 2:
                        message.num = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("num"))
                    throw $util.ProtocolError("missing required 'num'", { instance: message });
                return message;
            };

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetGetAwardById.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Item message.
             * @function verify
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
                return null;
            };

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetGetAwardById.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetGetAwardById.Item)
                    return object;
                var message = new $root.msg.PbMsgRetGetAwardById.Item();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.num != null)
                    message.num = object.num | 0;
                return message;
            };

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @static
             * @param {msg.PbMsgRetGetAwardById.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.num = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                return object;
            };

            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetGetAwardById.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Item;
        })();

        return PbMsgRetGetAwardById;
    })();

    msg.PbMsgDoActionById = (function() {

        /**
         * Properties of a PbMsgDoActionById.
         * @memberof msg
         * @interface IPbMsgDoActionById
         * @property {number} id PbMsgDoActionById id
         * @property {Array.<number>|null} [argv] PbMsgDoActionById argv
         * @property {number|null} [time] PbMsgDoActionById time
         */

        /**
         * Constructs a new PbMsgDoActionById.
         * @memberof msg
         * @classdesc Represents a PbMsgDoActionById.
         * @implements IPbMsgDoActionById
         * @constructor
         * @param {msg.IPbMsgDoActionById=} [properties] Properties to set
         */
        function PbMsgDoActionById(properties) {
            this.argv = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgDoActionById id.
         * @member {number} id
         * @memberof msg.PbMsgDoActionById
         * @instance
         */
        PbMsgDoActionById.prototype.id = 0;

        /**
         * PbMsgDoActionById argv.
         * @member {Array.<number>} argv
         * @memberof msg.PbMsgDoActionById
         * @instance
         */
        PbMsgDoActionById.prototype.argv = $util.emptyArray;

        /**
         * PbMsgDoActionById time.
         * @member {number} time
         * @memberof msg.PbMsgDoActionById
         * @instance
         */
        PbMsgDoActionById.prototype.time = 0;

        /**
         * Creates a new PbMsgDoActionById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {msg.IPbMsgDoActionById=} [properties] Properties to set
         * @returns {msg.PbMsgDoActionById} PbMsgDoActionById instance
         */
        PbMsgDoActionById.create = function create(properties) {
            return new PbMsgDoActionById(properties);
        };

        /**
         * Encodes the specified PbMsgDoActionById message. Does not implicitly {@link msg.PbMsgDoActionById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {msg.IPbMsgDoActionById} message PbMsgDoActionById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgDoActionById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.argv != null && message.argv.length)
                for (var i = 0; i < message.argv.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.argv[i]);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified PbMsgDoActionById message, length delimited. Does not implicitly {@link msg.PbMsgDoActionById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {msg.IPbMsgDoActionById} message PbMsgDoActionById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgDoActionById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgDoActionById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgDoActionById} PbMsgDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgDoActionById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgDoActionById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.argv && message.argv.length))
                        message.argv = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.argv.push(reader.int32());
                    } else
                        message.argv.push(reader.int32());
                    break;
                case 3:
                    message.time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgDoActionById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgDoActionById} PbMsgDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgDoActionById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgDoActionById message.
         * @function verify
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgDoActionById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.argv != null && message.hasOwnProperty("argv")) {
                if (!Array.isArray(message.argv))
                    return "argv: array expected";
                for (var i = 0; i < message.argv.length; ++i)
                    if (!$util.isInteger(message.argv[i]))
                        return "argv: integer[] expected";
            }
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgDoActionById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgDoActionById} PbMsgDoActionById
         */
        PbMsgDoActionById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgDoActionById)
                return object;
            var message = new $root.msg.PbMsgDoActionById();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.argv) {
                if (!Array.isArray(object.argv))
                    throw TypeError(".msg.PbMsgDoActionById.argv: array expected");
                message.argv = [];
                for (var i = 0; i < object.argv.length; ++i)
                    message.argv[i] = object.argv[i] | 0;
            }
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgDoActionById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgDoActionById
         * @static
         * @param {msg.PbMsgDoActionById} message PbMsgDoActionById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgDoActionById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.argv = [];
            if (options.defaults) {
                object.id = 0;
                object.time = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.argv && message.argv.length) {
                object.argv = [];
                for (var j = 0; j < message.argv.length; ++j)
                    object.argv[j] = message.argv[j];
            }
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this PbMsgDoActionById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgDoActionById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgDoActionById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgDoActionById.MSG
         * @enum {string}
         * @property {number} ID=1011 ID value
         */
        PbMsgDoActionById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1011] = "ID"] = 1011;
            return values;
        })();

        return PbMsgDoActionById;
    })();

    msg.PbMsgRetDoActionById = (function() {

        /**
         * Properties of a PbMsgRetDoActionById.
         * @memberof msg
         * @interface IPbMsgRetDoActionById
         * @property {number} retCode PbMsgRetDoActionById retCode
         * @property {Array.<msg.IPbMsgUpdateJson>|null} [datas] PbMsgRetDoActionById datas
         */

        /**
         * Constructs a new PbMsgRetDoActionById.
         * @memberof msg
         * @classdesc Represents a PbMsgRetDoActionById.
         * @implements IPbMsgRetDoActionById
         * @constructor
         * @param {msg.IPbMsgRetDoActionById=} [properties] Properties to set
         */
        function PbMsgRetDoActionById(properties) {
            this.datas = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetDoActionById retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetDoActionById
         * @instance
         */
        PbMsgRetDoActionById.prototype.retCode = 0;

        /**
         * PbMsgRetDoActionById datas.
         * @member {Array.<msg.IPbMsgUpdateJson>} datas
         * @memberof msg.PbMsgRetDoActionById
         * @instance
         */
        PbMsgRetDoActionById.prototype.datas = $util.emptyArray;

        /**
         * Creates a new PbMsgRetDoActionById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {msg.IPbMsgRetDoActionById=} [properties] Properties to set
         * @returns {msg.PbMsgRetDoActionById} PbMsgRetDoActionById instance
         */
        PbMsgRetDoActionById.create = function create(properties) {
            return new PbMsgRetDoActionById(properties);
        };

        /**
         * Encodes the specified PbMsgRetDoActionById message. Does not implicitly {@link msg.PbMsgRetDoActionById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {msg.IPbMsgRetDoActionById} message PbMsgRetDoActionById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetDoActionById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.datas != null && message.datas.length)
                for (var i = 0; i < message.datas.length; ++i)
                    $root.msg.PbMsgUpdateJson.encode(message.datas[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetDoActionById message, length delimited. Does not implicitly {@link msg.PbMsgRetDoActionById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {msg.IPbMsgRetDoActionById} message PbMsgRetDoActionById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetDoActionById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetDoActionById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetDoActionById} PbMsgRetDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetDoActionById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetDoActionById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    if (!(message.datas && message.datas.length))
                        message.datas = [];
                    message.datas.push($root.msg.PbMsgUpdateJson.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetDoActionById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetDoActionById} PbMsgRetDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetDoActionById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetDoActionById message.
         * @function verify
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetDoActionById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.datas != null && message.hasOwnProperty("datas")) {
                if (!Array.isArray(message.datas))
                    return "datas: array expected";
                for (var i = 0; i < message.datas.length; ++i) {
                    var error = $root.msg.PbMsgUpdateJson.verify(message.datas[i]);
                    if (error)
                        return "datas." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetDoActionById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetDoActionById} PbMsgRetDoActionById
         */
        PbMsgRetDoActionById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetDoActionById)
                return object;
            var message = new $root.msg.PbMsgRetDoActionById();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.datas) {
                if (!Array.isArray(object.datas))
                    throw TypeError(".msg.PbMsgRetDoActionById.datas: array expected");
                message.datas = [];
                for (var i = 0; i < object.datas.length; ++i) {
                    if (typeof object.datas[i] !== "object")
                        throw TypeError(".msg.PbMsgRetDoActionById.datas: object expected");
                    message.datas[i] = $root.msg.PbMsgUpdateJson.fromObject(object.datas[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetDoActionById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetDoActionById
         * @static
         * @param {msg.PbMsgRetDoActionById} message PbMsgRetDoActionById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetDoActionById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.datas = [];
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.datas && message.datas.length) {
                object.datas = [];
                for (var j = 0; j < message.datas.length; ++j)
                    object.datas[j] = $root.msg.PbMsgUpdateJson.toObject(message.datas[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetDoActionById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetDoActionById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetDoActionById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetDoActionById.MSG
         * @enum {string}
         * @property {number} ID=2011 ID value
         */
        PbMsgRetDoActionById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2011] = "ID"] = 2011;
            return values;
        })();

        return PbMsgRetDoActionById;
    })();

    msg.PbMsgGetAiInfo = (function() {

        /**
         * Properties of a PbMsgGetAiInfo.
         * @memberof msg
         * @interface IPbMsgGetAiInfo
         * @property {Array.<number|Long>|null} [roleId] PbMsgGetAiInfo roleId
         * @property {Array.<number>|null} [idx] PbMsgGetAiInfo idx
         */

        /**
         * Constructs a new PbMsgGetAiInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgGetAiInfo.
         * @implements IPbMsgGetAiInfo
         * @constructor
         * @param {msg.IPbMsgGetAiInfo=} [properties] Properties to set
         */
        function PbMsgGetAiInfo(properties) {
            this.roleId = [];
            this.idx = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetAiInfo roleId.
         * @member {Array.<number|Long>} roleId
         * @memberof msg.PbMsgGetAiInfo
         * @instance
         */
        PbMsgGetAiInfo.prototype.roleId = $util.emptyArray;

        /**
         * PbMsgGetAiInfo idx.
         * @member {Array.<number>} idx
         * @memberof msg.PbMsgGetAiInfo
         * @instance
         */
        PbMsgGetAiInfo.prototype.idx = $util.emptyArray;

        /**
         * Creates a new PbMsgGetAiInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {msg.IPbMsgGetAiInfo=} [properties] Properties to set
         * @returns {msg.PbMsgGetAiInfo} PbMsgGetAiInfo instance
         */
        PbMsgGetAiInfo.create = function create(properties) {
            return new PbMsgGetAiInfo(properties);
        };

        /**
         * Encodes the specified PbMsgGetAiInfo message. Does not implicitly {@link msg.PbMsgGetAiInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {msg.IPbMsgGetAiInfo} message PbMsgGetAiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetAiInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roleId != null && message.roleId.length)
                for (var i = 0; i < message.roleId.length; ++i)
                    writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId[i]);
            if (message.idx != null && message.idx.length)
                for (var i = 0; i < message.idx.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.idx[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetAiInfo message, length delimited. Does not implicitly {@link msg.PbMsgGetAiInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {msg.IPbMsgGetAiInfo} message PbMsgGetAiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetAiInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetAiInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetAiInfo} PbMsgGetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetAiInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetAiInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.roleId && message.roleId.length))
                        message.roleId = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.roleId.push(reader.fixed64());
                    } else
                        message.roleId.push(reader.fixed64());
                    break;
                case 2:
                    if (!(message.idx && message.idx.length))
                        message.idx = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.idx.push(reader.int32());
                    } else
                        message.idx.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgGetAiInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetAiInfo} PbMsgGetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetAiInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetAiInfo message.
         * @function verify
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetAiInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roleId != null && message.hasOwnProperty("roleId")) {
                if (!Array.isArray(message.roleId))
                    return "roleId: array expected";
                for (var i = 0; i < message.roleId.length; ++i)
                    if (!$util.isInteger(message.roleId[i]) && !(message.roleId[i] && $util.isInteger(message.roleId[i].low) && $util.isInteger(message.roleId[i].high)))
                        return "roleId: integer|Long[] expected";
            }
            if (message.idx != null && message.hasOwnProperty("idx")) {
                if (!Array.isArray(message.idx))
                    return "idx: array expected";
                for (var i = 0; i < message.idx.length; ++i)
                    if (!$util.isInteger(message.idx[i]))
                        return "idx: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgGetAiInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetAiInfo} PbMsgGetAiInfo
         */
        PbMsgGetAiInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetAiInfo)
                return object;
            var message = new $root.msg.PbMsgGetAiInfo();
            if (object.roleId) {
                if (!Array.isArray(object.roleId))
                    throw TypeError(".msg.PbMsgGetAiInfo.roleId: array expected");
                message.roleId = [];
                for (var i = 0; i < object.roleId.length; ++i)
                    if ($util.Long)
                        (message.roleId[i] = $util.Long.fromValue(object.roleId[i])).unsigned = false;
                    else if (typeof object.roleId[i] === "string")
                        message.roleId[i] = parseInt(object.roleId[i], 10);
                    else if (typeof object.roleId[i] === "number")
                        message.roleId[i] = object.roleId[i];
                    else if (typeof object.roleId[i] === "object")
                        message.roleId[i] = new $util.LongBits(object.roleId[i].low >>> 0, object.roleId[i].high >>> 0).toNumber();
            }
            if (object.idx) {
                if (!Array.isArray(object.idx))
                    throw TypeError(".msg.PbMsgGetAiInfo.idx: array expected");
                message.idx = [];
                for (var i = 0; i < object.idx.length; ++i)
                    message.idx[i] = object.idx[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetAiInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetAiInfo
         * @static
         * @param {msg.PbMsgGetAiInfo} message PbMsgGetAiInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetAiInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.roleId = [];
                object.idx = [];
            }
            if (message.roleId && message.roleId.length) {
                object.roleId = [];
                for (var j = 0; j < message.roleId.length; ++j)
                    if (typeof message.roleId[j] === "number")
                        object.roleId[j] = options.longs === String ? String(message.roleId[j]) : message.roleId[j];
                    else
                        object.roleId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.roleId[j]) : options.longs === Number ? new $util.LongBits(message.roleId[j].low >>> 0, message.roleId[j].high >>> 0).toNumber() : message.roleId[j];
            }
            if (message.idx && message.idx.length) {
                object.idx = [];
                for (var j = 0; j < message.idx.length; ++j)
                    object.idx[j] = message.idx[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgGetAiInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetAiInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetAiInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetAiInfo.MSG
         * @enum {string}
         * @property {number} ID=1012 ID value
         */
        PbMsgGetAiInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1012] = "ID"] = 1012;
            return values;
        })();

        return PbMsgGetAiInfo;
    })();

    msg.PbMsgRetAiInfo = (function() {

        /**
         * Properties of a PbMsgRetAiInfo.
         * @memberof msg
         * @interface IPbMsgRetAiInfo
         * @property {Array.<msg.PbMsgRetAiInfo.IAiInfo>|null} [data] PbMsgRetAiInfo data
         */

        /**
         * Constructs a new PbMsgRetAiInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgRetAiInfo.
         * @implements IPbMsgRetAiInfo
         * @constructor
         * @param {msg.IPbMsgRetAiInfo=} [properties] Properties to set
         */
        function PbMsgRetAiInfo(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetAiInfo data.
         * @member {Array.<msg.PbMsgRetAiInfo.IAiInfo>} data
         * @memberof msg.PbMsgRetAiInfo
         * @instance
         */
        PbMsgRetAiInfo.prototype.data = $util.emptyArray;

        /**
         * Creates a new PbMsgRetAiInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {msg.IPbMsgRetAiInfo=} [properties] Properties to set
         * @returns {msg.PbMsgRetAiInfo} PbMsgRetAiInfo instance
         */
        PbMsgRetAiInfo.create = function create(properties) {
            return new PbMsgRetAiInfo(properties);
        };

        /**
         * Encodes the specified PbMsgRetAiInfo message. Does not implicitly {@link msg.PbMsgRetAiInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {msg.IPbMsgRetAiInfo} message PbMsgRetAiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetAiInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.PbMsgRetAiInfo.AiInfo.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetAiInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetAiInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {msg.IPbMsgRetAiInfo} message PbMsgRetAiInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetAiInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetAiInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetAiInfo} PbMsgRetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetAiInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetAiInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.PbMsgRetAiInfo.AiInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgRetAiInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetAiInfo} PbMsgRetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetAiInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetAiInfo message.
         * @function verify
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetAiInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.PbMsgRetAiInfo.AiInfo.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetAiInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetAiInfo} PbMsgRetAiInfo
         */
        PbMsgRetAiInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetAiInfo)
                return object;
            var message = new $root.msg.PbMsgRetAiInfo();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgRetAiInfo.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgRetAiInfo.data: object expected");
                    message.data[i] = $root.msg.PbMsgRetAiInfo.AiInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetAiInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetAiInfo
         * @static
         * @param {msg.PbMsgRetAiInfo} message PbMsgRetAiInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetAiInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.PbMsgRetAiInfo.AiInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetAiInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetAiInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetAiInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetAiInfo.MSG
         * @enum {string}
         * @property {number} ID=2012 ID value
         */
        PbMsgRetAiInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2012] = "ID"] = 2012;
            return values;
        })();

        PbMsgRetAiInfo.AiInfo = (function() {

            /**
             * Properties of an AiInfo.
             * @memberof msg.PbMsgRetAiInfo
             * @interface IAiInfo
             * @property {number|Long} roleId AiInfo roleId
             * @property {string} roleName AiInfo roleName
             * @property {number} serverid AiInfo serverid
             * @property {Array.<number>|null} [data] AiInfo data
             */

            /**
             * Constructs a new AiInfo.
             * @memberof msg.PbMsgRetAiInfo
             * @classdesc Represents an AiInfo.
             * @implements IAiInfo
             * @constructor
             * @param {msg.PbMsgRetAiInfo.IAiInfo=} [properties] Properties to set
             */
            function AiInfo(properties) {
                this.data = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AiInfo roleId.
             * @member {number|Long} roleId
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @instance
             */
            AiInfo.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * AiInfo roleName.
             * @member {string} roleName
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @instance
             */
            AiInfo.prototype.roleName = "";

            /**
             * AiInfo serverid.
             * @member {number} serverid
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @instance
             */
            AiInfo.prototype.serverid = 0;

            /**
             * AiInfo data.
             * @member {Array.<number>} data
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @instance
             */
            AiInfo.prototype.data = $util.emptyArray;

            /**
             * Creates a new AiInfo instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {msg.PbMsgRetAiInfo.IAiInfo=} [properties] Properties to set
             * @returns {msg.PbMsgRetAiInfo.AiInfo} AiInfo instance
             */
            AiInfo.create = function create(properties) {
                return new AiInfo(properties);
            };

            /**
             * Encodes the specified AiInfo message. Does not implicitly {@link msg.PbMsgRetAiInfo.AiInfo.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {msg.PbMsgRetAiInfo.IAiInfo} message AiInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleName);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverid);
                if (message.data != null && message.data.length)
                    for (var i = 0; i < message.data.length; ++i)
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.data[i]);
                return writer;
            };

            /**
             * Encodes the specified AiInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetAiInfo.AiInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {msg.PbMsgRetAiInfo.IAiInfo} message AiInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AiInfo message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetAiInfo.AiInfo} AiInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetAiInfo.AiInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roleId = reader.fixed64();
                        break;
                    case 2:
                        message.roleName = reader.string();
                        break;
                    case 3:
                        message.serverid = reader.int32();
                        break;
                    case 4:
                        if (!(message.data && message.data.length))
                            message.data = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.data.push(reader.int32());
                        } else
                            message.data.push(reader.int32());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("roleId"))
                    throw $util.ProtocolError("missing required 'roleId'", { instance: message });
                if (!message.hasOwnProperty("roleName"))
                    throw $util.ProtocolError("missing required 'roleName'", { instance: message });
                if (!message.hasOwnProperty("serverid"))
                    throw $util.ProtocolError("missing required 'serverid'", { instance: message });
                return message;
            };

            /**
             * Decodes an AiInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetAiInfo.AiInfo} AiInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AiInfo message.
             * @function verify
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AiInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
                if (!$util.isString(message.roleName))
                    return "roleName: string expected";
                if (!$util.isInteger(message.serverid))
                    return "serverid: integer expected";
                if (message.data != null && message.hasOwnProperty("data")) {
                    if (!Array.isArray(message.data))
                        return "data: array expected";
                    for (var i = 0; i < message.data.length; ++i)
                        if (!$util.isInteger(message.data[i]))
                            return "data: integer[] expected";
                }
                return null;
            };

            /**
             * Creates an AiInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetAiInfo.AiInfo} AiInfo
             */
            AiInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetAiInfo.AiInfo)
                    return object;
                var message = new $root.msg.PbMsgRetAiInfo.AiInfo();
                if (object.roleId != null)
                    if ($util.Long)
                        (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                    else if (typeof object.roleId === "string")
                        message.roleId = parseInt(object.roleId, 10);
                    else if (typeof object.roleId === "number")
                        message.roleId = object.roleId;
                    else if (typeof object.roleId === "object")
                        message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
                if (object.roleName != null)
                    message.roleName = String(object.roleName);
                if (object.serverid != null)
                    message.serverid = object.serverid | 0;
                if (object.data) {
                    if (!Array.isArray(object.data))
                        throw TypeError(".msg.PbMsgRetAiInfo.AiInfo.data: array expected");
                    message.data = [];
                    for (var i = 0; i < object.data.length; ++i)
                        message.data[i] = object.data[i] | 0;
                }
                return message;
            };

            /**
             * Creates a plain object from an AiInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @static
             * @param {msg.PbMsgRetAiInfo.AiInfo} message AiInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AiInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.data = [];
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roleId = options.longs === String ? "0" : 0;
                    object.roleName = "";
                    object.serverid = 0;
                }
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    if (typeof message.roleId === "number")
                        object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                    else
                        object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
                if (message.roleName != null && message.hasOwnProperty("roleName"))
                    object.roleName = message.roleName;
                if (message.serverid != null && message.hasOwnProperty("serverid"))
                    object.serverid = message.serverid;
                if (message.data && message.data.length) {
                    object.data = [];
                    for (var j = 0; j < message.data.length; ++j)
                        object.data[j] = message.data[j];
                }
                return object;
            };

            /**
             * Converts this AiInfo to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetAiInfo.AiInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AiInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return AiInfo;
        })();

        return PbMsgRetAiInfo;
    })();

    msg.PbMsgGetJsonById = (function() {

        /**
         * Properties of a PbMsgGetJsonById.
         * @memberof msg
         * @interface IPbMsgGetJsonById
         * @property {number} id PbMsgGetJsonById id
         * @property {Array.<number>|null} [argv] PbMsgGetJsonById argv
         */

        /**
         * Constructs a new PbMsgGetJsonById.
         * @memberof msg
         * @classdesc Represents a PbMsgGetJsonById.
         * @implements IPbMsgGetJsonById
         * @constructor
         * @param {msg.IPbMsgGetJsonById=} [properties] Properties to set
         */
        function PbMsgGetJsonById(properties) {
            this.argv = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetJsonById id.
         * @member {number} id
         * @memberof msg.PbMsgGetJsonById
         * @instance
         */
        PbMsgGetJsonById.prototype.id = 0;

        /**
         * PbMsgGetJsonById argv.
         * @member {Array.<number>} argv
         * @memberof msg.PbMsgGetJsonById
         * @instance
         */
        PbMsgGetJsonById.prototype.argv = $util.emptyArray;

        /**
         * Creates a new PbMsgGetJsonById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {msg.IPbMsgGetJsonById=} [properties] Properties to set
         * @returns {msg.PbMsgGetJsonById} PbMsgGetJsonById instance
         */
        PbMsgGetJsonById.create = function create(properties) {
            return new PbMsgGetJsonById(properties);
        };

        /**
         * Encodes the specified PbMsgGetJsonById message. Does not implicitly {@link msg.PbMsgGetJsonById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {msg.IPbMsgGetJsonById} message PbMsgGetJsonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetJsonById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.argv != null && message.argv.length)
                for (var i = 0; i < message.argv.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.argv[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetJsonById message, length delimited. Does not implicitly {@link msg.PbMsgGetJsonById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {msg.IPbMsgGetJsonById} message PbMsgGetJsonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetJsonById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetJsonById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetJsonById} PbMsgGetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetJsonById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetJsonById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    if (!(message.argv && message.argv.length))
                        message.argv = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.argv.push(reader.int32());
                    } else
                        message.argv.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetJsonById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetJsonById} PbMsgGetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetJsonById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetJsonById message.
         * @function verify
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetJsonById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (message.argv != null && message.hasOwnProperty("argv")) {
                if (!Array.isArray(message.argv))
                    return "argv: array expected";
                for (var i = 0; i < message.argv.length; ++i)
                    if (!$util.isInteger(message.argv[i]))
                        return "argv: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgGetJsonById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetJsonById} PbMsgGetJsonById
         */
        PbMsgGetJsonById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetJsonById)
                return object;
            var message = new $root.msg.PbMsgGetJsonById();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.argv) {
                if (!Array.isArray(object.argv))
                    throw TypeError(".msg.PbMsgGetJsonById.argv: array expected");
                message.argv = [];
                for (var i = 0; i < object.argv.length; ++i)
                    message.argv[i] = object.argv[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetJsonById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetJsonById
         * @static
         * @param {msg.PbMsgGetJsonById} message PbMsgGetJsonById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetJsonById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.argv = [];
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.argv && message.argv.length) {
                object.argv = [];
                for (var j = 0; j < message.argv.length; ++j)
                    object.argv[j] = message.argv[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgGetJsonById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetJsonById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetJsonById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetJsonById.MSG
         * @enum {string}
         * @property {number} ID=1013 ID value
         */
        PbMsgGetJsonById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1013] = "ID"] = 1013;
            return values;
        })();

        return PbMsgGetJsonById;
    })();

    msg.PbMsgRetJsonById = (function() {

        /**
         * Properties of a PbMsgRetJsonById.
         * @memberof msg
         * @interface IPbMsgRetJsonById
         * @property {number} retCode PbMsgRetJsonById retCode
         * @property {string|null} [data] PbMsgRetJsonById data
         */

        /**
         * Constructs a new PbMsgRetJsonById.
         * @memberof msg
         * @classdesc Represents a PbMsgRetJsonById.
         * @implements IPbMsgRetJsonById
         * @constructor
         * @param {msg.IPbMsgRetJsonById=} [properties] Properties to set
         */
        function PbMsgRetJsonById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetJsonById retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetJsonById
         * @instance
         */
        PbMsgRetJsonById.prototype.retCode = 0;

        /**
         * PbMsgRetJsonById data.
         * @member {string} data
         * @memberof msg.PbMsgRetJsonById
         * @instance
         */
        PbMsgRetJsonById.prototype.data = "";

        /**
         * Creates a new PbMsgRetJsonById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {msg.IPbMsgRetJsonById=} [properties] Properties to set
         * @returns {msg.PbMsgRetJsonById} PbMsgRetJsonById instance
         */
        PbMsgRetJsonById.create = function create(properties) {
            return new PbMsgRetJsonById(properties);
        };

        /**
         * Encodes the specified PbMsgRetJsonById message. Does not implicitly {@link msg.PbMsgRetJsonById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {msg.IPbMsgRetJsonById} message PbMsgRetJsonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetJsonById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.data != null && message.hasOwnProperty("data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetJsonById message, length delimited. Does not implicitly {@link msg.PbMsgRetJsonById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {msg.IPbMsgRetJsonById} message PbMsgRetJsonById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetJsonById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetJsonById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetJsonById} PbMsgRetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetJsonById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetJsonById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetJsonById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetJsonById} PbMsgRetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetJsonById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetJsonById message.
         * @function verify
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetJsonById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!$util.isString(message.data))
                    return "data: string expected";
            return null;
        };

        /**
         * Creates a PbMsgRetJsonById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetJsonById} PbMsgRetJsonById
         */
        PbMsgRetJsonById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetJsonById)
                return object;
            var message = new $root.msg.PbMsgRetJsonById();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetJsonById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetJsonById
         * @static
         * @param {msg.PbMsgRetJsonById} message PbMsgRetJsonById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetJsonById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                object.data = "";
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this PbMsgRetJsonById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetJsonById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetJsonById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetJsonById.MSG
         * @enum {string}
         * @property {number} ID=2013 ID value
         */
        PbMsgRetJsonById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2013] = "ID"] = 2013;
            return values;
        })();

        return PbMsgRetJsonById;
    })();

    msg.PbMsgKillRole = (function() {

        /**
         * Properties of a PbMsgKillRole.
         * @memberof msg
         * @interface IPbMsgKillRole
         * @property {string} msg PbMsgKillRole msg
         */

        /**
         * Constructs a new PbMsgKillRole.
         * @memberof msg
         * @classdesc Represents a PbMsgKillRole.
         * @implements IPbMsgKillRole
         * @constructor
         * @param {msg.IPbMsgKillRole=} [properties] Properties to set
         */
        function PbMsgKillRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgKillRole msg.
         * @member {string} msg
         * @memberof msg.PbMsgKillRole
         * @instance
         */
        PbMsgKillRole.prototype.msg = "";

        /**
         * Creates a new PbMsgKillRole instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {msg.IPbMsgKillRole=} [properties] Properties to set
         * @returns {msg.PbMsgKillRole} PbMsgKillRole instance
         */
        PbMsgKillRole.create = function create(properties) {
            return new PbMsgKillRole(properties);
        };

        /**
         * Encodes the specified PbMsgKillRole message. Does not implicitly {@link msg.PbMsgKillRole.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {msg.IPbMsgKillRole} message PbMsgKillRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgKillRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.msg);
            return writer;
        };

        /**
         * Encodes the specified PbMsgKillRole message, length delimited. Does not implicitly {@link msg.PbMsgKillRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {msg.IPbMsgKillRole} message PbMsgKillRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgKillRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgKillRole message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgKillRole} PbMsgKillRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgKillRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgKillRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.msg = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("msg"))
                throw $util.ProtocolError("missing required 'msg'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgKillRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgKillRole} PbMsgKillRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgKillRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgKillRole message.
         * @function verify
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgKillRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.msg))
                return "msg: string expected";
            return null;
        };

        /**
         * Creates a PbMsgKillRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgKillRole} PbMsgKillRole
         */
        PbMsgKillRole.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgKillRole)
                return object;
            var message = new $root.msg.PbMsgKillRole();
            if (object.msg != null)
                message.msg = String(object.msg);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgKillRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgKillRole
         * @static
         * @param {msg.PbMsgKillRole} message PbMsgKillRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgKillRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.msg = "";
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            return object;
        };

        /**
         * Converts this PbMsgKillRole to JSON.
         * @function toJSON
         * @memberof msg.PbMsgKillRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgKillRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgKillRole.MSG
         * @enum {string}
         * @property {number} ID=1014 ID value
         */
        PbMsgKillRole.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1014] = "ID"] = 1014;
            return values;
        })();

        return PbMsgKillRole;
    })();

    msg.PbMsgGetShareById = (function() {

        /**
         * Properties of a PbMsgGetShareById.
         * @memberof msg
         * @interface IPbMsgGetShareById
         * @property {number} id PbMsgGetShareById id
         */

        /**
         * Constructs a new PbMsgGetShareById.
         * @memberof msg
         * @classdesc Represents a PbMsgGetShareById.
         * @implements IPbMsgGetShareById
         * @constructor
         * @param {msg.IPbMsgGetShareById=} [properties] Properties to set
         */
        function PbMsgGetShareById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetShareById id.
         * @member {number} id
         * @memberof msg.PbMsgGetShareById
         * @instance
         */
        PbMsgGetShareById.prototype.id = 0;

        /**
         * Creates a new PbMsgGetShareById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {msg.IPbMsgGetShareById=} [properties] Properties to set
         * @returns {msg.PbMsgGetShareById} PbMsgGetShareById instance
         */
        PbMsgGetShareById.create = function create(properties) {
            return new PbMsgGetShareById(properties);
        };

        /**
         * Encodes the specified PbMsgGetShareById message. Does not implicitly {@link msg.PbMsgGetShareById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {msg.IPbMsgGetShareById} message PbMsgGetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetShareById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetShareById message, length delimited. Does not implicitly {@link msg.PbMsgGetShareById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {msg.IPbMsgGetShareById} message PbMsgGetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetShareById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetShareById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetShareById} PbMsgGetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetShareById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetShareById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetShareById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetShareById} PbMsgGetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetShareById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetShareById message.
         * @function verify
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetShareById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetShareById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetShareById} PbMsgGetShareById
         */
        PbMsgGetShareById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetShareById)
                return object;
            var message = new $root.msg.PbMsgGetShareById();
            if (object.id != null)
                message.id = object.id | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetShareById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetShareById
         * @static
         * @param {msg.PbMsgGetShareById} message PbMsgGetShareById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetShareById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.id = 0;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            return object;
        };

        /**
         * Converts this PbMsgGetShareById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetShareById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetShareById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetShareById.MSG
         * @enum {string}
         * @property {number} ID=1015 ID value
         */
        PbMsgGetShareById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1015] = "ID"] = 1015;
            return values;
        })();

        return PbMsgGetShareById;
    })();

    msg.PbMsgRetShareById = (function() {

        /**
         * Properties of a PbMsgRetShareById.
         * @memberof msg
         * @interface IPbMsgRetShareById
         * @property {string} data PbMsgRetShareById data
         */

        /**
         * Constructs a new PbMsgRetShareById.
         * @memberof msg
         * @classdesc Represents a PbMsgRetShareById.
         * @implements IPbMsgRetShareById
         * @constructor
         * @param {msg.IPbMsgRetShareById=} [properties] Properties to set
         */
        function PbMsgRetShareById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetShareById data.
         * @member {string} data
         * @memberof msg.PbMsgRetShareById
         * @instance
         */
        PbMsgRetShareById.prototype.data = "";

        /**
         * Creates a new PbMsgRetShareById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {msg.IPbMsgRetShareById=} [properties] Properties to set
         * @returns {msg.PbMsgRetShareById} PbMsgRetShareById instance
         */
        PbMsgRetShareById.create = function create(properties) {
            return new PbMsgRetShareById(properties);
        };

        /**
         * Encodes the specified PbMsgRetShareById message. Does not implicitly {@link msg.PbMsgRetShareById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {msg.IPbMsgRetShareById} message PbMsgRetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetShareById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetShareById message, length delimited. Does not implicitly {@link msg.PbMsgRetShareById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {msg.IPbMsgRetShareById} message PbMsgRetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetShareById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetShareById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetShareById} PbMsgRetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetShareById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetShareById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetShareById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetShareById} PbMsgRetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetShareById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetShareById message.
         * @function verify
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetShareById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            return null;
        };

        /**
         * Creates a PbMsgRetShareById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetShareById} PbMsgRetShareById
         */
        PbMsgRetShareById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetShareById)
                return object;
            var message = new $root.msg.PbMsgRetShareById();
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetShareById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetShareById
         * @static
         * @param {msg.PbMsgRetShareById} message PbMsgRetShareById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetShareById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.data = "";
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this PbMsgRetShareById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetShareById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetShareById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetShareById.MSG
         * @enum {string}
         * @property {number} ID=2015 ID value
         */
        PbMsgRetShareById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2015] = "ID"] = 2015;
            return values;
        })();

        return PbMsgRetShareById;
    })();

    msg.PbMsgSetShareById = (function() {

        /**
         * Properties of a PbMsgSetShareById.
         * @memberof msg
         * @interface IPbMsgSetShareById
         * @property {number} id PbMsgSetShareById id
         * @property {string} data PbMsgSetShareById data
         */

        /**
         * Constructs a new PbMsgSetShareById.
         * @memberof msg
         * @classdesc Represents a PbMsgSetShareById.
         * @implements IPbMsgSetShareById
         * @constructor
         * @param {msg.IPbMsgSetShareById=} [properties] Properties to set
         */
        function PbMsgSetShareById(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgSetShareById id.
         * @member {number} id
         * @memberof msg.PbMsgSetShareById
         * @instance
         */
        PbMsgSetShareById.prototype.id = 0;

        /**
         * PbMsgSetShareById data.
         * @member {string} data
         * @memberof msg.PbMsgSetShareById
         * @instance
         */
        PbMsgSetShareById.prototype.data = "";

        /**
         * Creates a new PbMsgSetShareById instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {msg.IPbMsgSetShareById=} [properties] Properties to set
         * @returns {msg.PbMsgSetShareById} PbMsgSetShareById instance
         */
        PbMsgSetShareById.create = function create(properties) {
            return new PbMsgSetShareById(properties);
        };

        /**
         * Encodes the specified PbMsgSetShareById message. Does not implicitly {@link msg.PbMsgSetShareById.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {msg.IPbMsgSetShareById} message PbMsgSetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetShareById.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.data);
            return writer;
        };

        /**
         * Encodes the specified PbMsgSetShareById message, length delimited. Does not implicitly {@link msg.PbMsgSetShareById.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {msg.IPbMsgSetShareById} message PbMsgSetShareById message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetShareById.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgSetShareById message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgSetShareById} PbMsgSetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetShareById.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgSetShareById();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.data = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgSetShareById message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgSetShareById} PbMsgSetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetShareById.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgSetShareById message.
         * @function verify
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgSetShareById.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isString(message.data))
                return "data: string expected";
            return null;
        };

        /**
         * Creates a PbMsgSetShareById message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgSetShareById} PbMsgSetShareById
         */
        PbMsgSetShareById.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgSetShareById)
                return object;
            var message = new $root.msg.PbMsgSetShareById();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.data != null)
                message.data = String(object.data);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgSetShareById message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgSetShareById
         * @static
         * @param {msg.PbMsgSetShareById} message PbMsgSetShareById
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgSetShareById.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.data = "";
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.data != null && message.hasOwnProperty("data"))
                object.data = message.data;
            return object;
        };

        /**
         * Converts this PbMsgSetShareById to JSON.
         * @function toJSON
         * @memberof msg.PbMsgSetShareById
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgSetShareById.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgSetShareById.MSG
         * @enum {string}
         * @property {number} ID=1016 ID value
         */
        PbMsgSetShareById.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1016] = "ID"] = 1016;
            return values;
        })();

        return PbMsgSetShareById;
    })();

    msg.PbMsgReportData = (function() {

        /**
         * Properties of a PbMsgReportData.
         * @memberof msg
         * @interface IPbMsgReportData
         * @property {number} id PbMsgReportData id
         * @property {number} subid PbMsgReportData subid
         * @property {number} num PbMsgReportData num
         */

        /**
         * Constructs a new PbMsgReportData.
         * @memberof msg
         * @classdesc Represents a PbMsgReportData.
         * @implements IPbMsgReportData
         * @constructor
         * @param {msg.IPbMsgReportData=} [properties] Properties to set
         */
        function PbMsgReportData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgReportData id.
         * @member {number} id
         * @memberof msg.PbMsgReportData
         * @instance
         */
        PbMsgReportData.prototype.id = 0;

        /**
         * PbMsgReportData subid.
         * @member {number} subid
         * @memberof msg.PbMsgReportData
         * @instance
         */
        PbMsgReportData.prototype.subid = 0;

        /**
         * PbMsgReportData num.
         * @member {number} num
         * @memberof msg.PbMsgReportData
         * @instance
         */
        PbMsgReportData.prototype.num = 0;

        /**
         * Creates a new PbMsgReportData instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgReportData
         * @static
         * @param {msg.IPbMsgReportData=} [properties] Properties to set
         * @returns {msg.PbMsgReportData} PbMsgReportData instance
         */
        PbMsgReportData.create = function create(properties) {
            return new PbMsgReportData(properties);
        };

        /**
         * Encodes the specified PbMsgReportData message. Does not implicitly {@link msg.PbMsgReportData.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgReportData
         * @static
         * @param {msg.IPbMsgReportData} message PbMsgReportData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgReportData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.subid);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified PbMsgReportData message, length delimited. Does not implicitly {@link msg.PbMsgReportData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgReportData
         * @static
         * @param {msg.IPbMsgReportData} message PbMsgReportData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgReportData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgReportData message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgReportData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgReportData} PbMsgReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgReportData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgReportData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.subid = reader.int32();
                    break;
                case 3:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("id"))
                throw $util.ProtocolError("missing required 'id'", { instance: message });
            if (!message.hasOwnProperty("subid"))
                throw $util.ProtocolError("missing required 'subid'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgReportData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgReportData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgReportData} PbMsgReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgReportData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgReportData message.
         * @function verify
         * @memberof msg.PbMsgReportData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgReportData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.id))
                return "id: integer expected";
            if (!$util.isInteger(message.subid))
                return "subid: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgReportData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgReportData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgReportData} PbMsgReportData
         */
        PbMsgReportData.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgReportData)
                return object;
            var message = new $root.msg.PbMsgReportData();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.subid != null)
                message.subid = object.subid | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgReportData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgReportData
         * @static
         * @param {msg.PbMsgReportData} message PbMsgReportData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgReportData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.subid = 0;
                object.num = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.subid != null && message.hasOwnProperty("subid"))
                object.subid = message.subid;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this PbMsgReportData to JSON.
         * @function toJSON
         * @memberof msg.PbMsgReportData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgReportData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgReportData.MSG
         * @enum {string}
         * @property {number} ID=1017 ID value
         */
        PbMsgReportData.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1017] = "ID"] = 1017;
            return values;
        })();

        return PbMsgReportData;
    })();

    msg.PbMsgRoleInfo = (function() {

        /**
         * Properties of a PbMsgRoleInfo.
         * @memberof msg
         * @interface IPbMsgRoleInfo
         * @property {number|Long} roleId PbMsgRoleInfo roleId
         * @property {string} roleName PbMsgRoleInfo roleName
         * @property {number} careerId PbMsgRoleInfo careerId
         * @property {string} userId PbMsgRoleInfo userId
         * @property {number} platserver PbMsgRoleInfo platserver
         * @property {number} serverid PbMsgRoleInfo serverid
         * @property {number} createTime PbMsgRoleInfo createTime
         * @property {number} loginTime PbMsgRoleInfo loginTime
         * @property {number} logoutTime PbMsgRoleInfo logoutTime
         * @property {number|null} [version] PbMsgRoleInfo version
         * @property {number|Long|null} [inviter] PbMsgRoleInfo inviter
         * @property {number|null} [serverTime] PbMsgRoleInfo serverTime
         */

        /**
         * Constructs a new PbMsgRoleInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgRoleInfo.
         * @implements IPbMsgRoleInfo
         * @constructor
         * @param {msg.IPbMsgRoleInfo=} [properties] Properties to set
         */
        function PbMsgRoleInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRoleInfo roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgRoleInfo roleName.
         * @member {string} roleName
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.roleName = "";

        /**
         * PbMsgRoleInfo careerId.
         * @member {number} careerId
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.careerId = 0;

        /**
         * PbMsgRoleInfo userId.
         * @member {string} userId
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.userId = "";

        /**
         * PbMsgRoleInfo platserver.
         * @member {number} platserver
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.platserver = 0;

        /**
         * PbMsgRoleInfo serverid.
         * @member {number} serverid
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.serverid = 0;

        /**
         * PbMsgRoleInfo createTime.
         * @member {number} createTime
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.createTime = 0;

        /**
         * PbMsgRoleInfo loginTime.
         * @member {number} loginTime
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.loginTime = 0;

        /**
         * PbMsgRoleInfo logoutTime.
         * @member {number} logoutTime
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.logoutTime = 0;

        /**
         * PbMsgRoleInfo version.
         * @member {number} version
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.version = 0;

        /**
         * PbMsgRoleInfo inviter.
         * @member {number|Long} inviter
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.inviter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgRoleInfo serverTime.
         * @member {number} serverTime
         * @memberof msg.PbMsgRoleInfo
         * @instance
         */
        PbMsgRoleInfo.prototype.serverTime = 0;

        /**
         * Creates a new PbMsgRoleInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {msg.IPbMsgRoleInfo=} [properties] Properties to set
         * @returns {msg.PbMsgRoleInfo} PbMsgRoleInfo instance
         */
        PbMsgRoleInfo.create = function create(properties) {
            return new PbMsgRoleInfo(properties);
        };

        /**
         * Encodes the specified PbMsgRoleInfo message. Does not implicitly {@link msg.PbMsgRoleInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {msg.IPbMsgRoleInfo} message PbMsgRoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRoleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.roleName);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.careerId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.userId);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.platserver);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.serverid);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.createTime);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.loginTime);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.logoutTime);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.version);
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                writer.uint32(/* id 11, wireType 1 =*/89).fixed64(message.inviter);
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.serverTime);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRoleInfo message, length delimited. Does not implicitly {@link msg.PbMsgRoleInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {msg.IPbMsgRoleInfo} message PbMsgRoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRoleInfo} PbMsgRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRoleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.fixed64();
                    break;
                case 2:
                    message.roleName = reader.string();
                    break;
                case 3:
                    message.careerId = reader.int32();
                    break;
                case 4:
                    message.userId = reader.string();
                    break;
                case 5:
                    message.platserver = reader.int32();
                    break;
                case 6:
                    message.serverid = reader.int32();
                    break;
                case 7:
                    message.createTime = reader.int32();
                    break;
                case 8:
                    message.loginTime = reader.int32();
                    break;
                case 9:
                    message.logoutTime = reader.int32();
                    break;
                case 10:
                    message.version = reader.int32();
                    break;
                case 11:
                    message.inviter = reader.fixed64();
                    break;
                case 12:
                    message.serverTime = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            if (!message.hasOwnProperty("roleName"))
                throw $util.ProtocolError("missing required 'roleName'", { instance: message });
            if (!message.hasOwnProperty("careerId"))
                throw $util.ProtocolError("missing required 'careerId'", { instance: message });
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("platserver"))
                throw $util.ProtocolError("missing required 'platserver'", { instance: message });
            if (!message.hasOwnProperty("serverid"))
                throw $util.ProtocolError("missing required 'serverid'", { instance: message });
            if (!message.hasOwnProperty("createTime"))
                throw $util.ProtocolError("missing required 'createTime'", { instance: message });
            if (!message.hasOwnProperty("loginTime"))
                throw $util.ProtocolError("missing required 'loginTime'", { instance: message });
            if (!message.hasOwnProperty("logoutTime"))
                throw $util.ProtocolError("missing required 'logoutTime'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRoleInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRoleInfo} PbMsgRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRoleInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRoleInfo message.
         * @function verify
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRoleInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            if (!$util.isString(message.roleName))
                return "roleName: string expected";
            if (!$util.isInteger(message.careerId))
                return "careerId: integer expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.platserver))
                return "platserver: integer expected";
            if (!$util.isInteger(message.serverid))
                return "serverid: integer expected";
            if (!$util.isInteger(message.createTime))
                return "createTime: integer expected";
            if (!$util.isInteger(message.loginTime))
                return "loginTime: integer expected";
            if (!$util.isInteger(message.logoutTime))
                return "logoutTime: integer expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (!$util.isInteger(message.inviter) && !(message.inviter && $util.isInteger(message.inviter.low) && $util.isInteger(message.inviter.high)))
                    return "inviter: integer|Long expected";
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                if (!$util.isInteger(message.serverTime))
                    return "serverTime: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgRoleInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRoleInfo} PbMsgRoleInfo
         */
        PbMsgRoleInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRoleInfo)
                return object;
            var message = new $root.msg.PbMsgRoleInfo();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.roleName != null)
                message.roleName = String(object.roleName);
            if (object.careerId != null)
                message.careerId = object.careerId | 0;
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.platserver != null)
                message.platserver = object.platserver | 0;
            if (object.serverid != null)
                message.serverid = object.serverid | 0;
            if (object.createTime != null)
                message.createTime = object.createTime | 0;
            if (object.loginTime != null)
                message.loginTime = object.loginTime | 0;
            if (object.logoutTime != null)
                message.logoutTime = object.logoutTime | 0;
            if (object.version != null)
                message.version = object.version | 0;
            if (object.inviter != null)
                if ($util.Long)
                    (message.inviter = $util.Long.fromValue(object.inviter)).unsigned = false;
                else if (typeof object.inviter === "string")
                    message.inviter = parseInt(object.inviter, 10);
                else if (typeof object.inviter === "number")
                    message.inviter = object.inviter;
                else if (typeof object.inviter === "object")
                    message.inviter = new $util.LongBits(object.inviter.low >>> 0, object.inviter.high >>> 0).toNumber();
            if (object.serverTime != null)
                message.serverTime = object.serverTime | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRoleInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRoleInfo
         * @static
         * @param {msg.PbMsgRoleInfo} message PbMsgRoleInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRoleInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.roleName = "";
                object.careerId = 0;
                object.userId = "";
                object.platserver = 0;
                object.serverid = 0;
                object.createTime = 0;
                object.loginTime = 0;
                object.logoutTime = 0;
                object.version = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.inviter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inviter = options.longs === String ? "0" : 0;
                object.serverTime = 0;
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.roleName != null && message.hasOwnProperty("roleName"))
                object.roleName = message.roleName;
            if (message.careerId != null && message.hasOwnProperty("careerId"))
                object.careerId = message.careerId;
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.platserver != null && message.hasOwnProperty("platserver"))
                object.platserver = message.platserver;
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                object.serverid = message.serverid;
            if (message.createTime != null && message.hasOwnProperty("createTime"))
                object.createTime = message.createTime;
            if (message.loginTime != null && message.hasOwnProperty("loginTime"))
                object.loginTime = message.loginTime;
            if (message.logoutTime != null && message.hasOwnProperty("logoutTime"))
                object.logoutTime = message.logoutTime;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (typeof message.inviter === "number")
                    object.inviter = options.longs === String ? String(message.inviter) : message.inviter;
                else
                    object.inviter = options.longs === String ? $util.Long.prototype.toString.call(message.inviter) : options.longs === Number ? new $util.LongBits(message.inviter.low >>> 0, message.inviter.high >>> 0).toNumber() : message.inviter;
            if (message.serverTime != null && message.hasOwnProperty("serverTime"))
                object.serverTime = message.serverTime;
            return object;
        };

        /**
         * Converts this PbMsgRoleInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRoleInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRoleInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRoleInfo.MSG
         * @enum {string}
         * @property {number} ID=101 ID value
         */
        PbMsgRoleInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[101] = "ID"] = 101;
            return values;
        })();

        return PbMsgRoleInfo;
    })();

    msg.PbMsgEnterGame = (function() {

        /**
         * Properties of a PbMsgEnterGame.
         * @memberof msg
         * @interface IPbMsgEnterGame
         * @property {number|Long} roleId PbMsgEnterGame roleId
         * @property {number} time PbMsgEnterGame time
         * @property {string} userKey PbMsgEnterGame userKey
         * @property {number} groupid PbMsgEnterGame groupid
         */

        /**
         * Constructs a new PbMsgEnterGame.
         * @memberof msg
         * @classdesc Represents a PbMsgEnterGame.
         * @implements IPbMsgEnterGame
         * @constructor
         * @param {msg.IPbMsgEnterGame=} [properties] Properties to set
         */
        function PbMsgEnterGame(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgEnterGame roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgEnterGame
         * @instance
         */
        PbMsgEnterGame.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgEnterGame time.
         * @member {number} time
         * @memberof msg.PbMsgEnterGame
         * @instance
         */
        PbMsgEnterGame.prototype.time = 0;

        /**
         * PbMsgEnterGame userKey.
         * @member {string} userKey
         * @memberof msg.PbMsgEnterGame
         * @instance
         */
        PbMsgEnterGame.prototype.userKey = "";

        /**
         * PbMsgEnterGame groupid.
         * @member {number} groupid
         * @memberof msg.PbMsgEnterGame
         * @instance
         */
        PbMsgEnterGame.prototype.groupid = 0;

        /**
         * Creates a new PbMsgEnterGame instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {msg.IPbMsgEnterGame=} [properties] Properties to set
         * @returns {msg.PbMsgEnterGame} PbMsgEnterGame instance
         */
        PbMsgEnterGame.create = function create(properties) {
            return new PbMsgEnterGame(properties);
        };

        /**
         * Encodes the specified PbMsgEnterGame message. Does not implicitly {@link msg.PbMsgEnterGame.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {msg.IPbMsgEnterGame} message PbMsgEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgEnterGame.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.time);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.userKey);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.groupid);
            return writer;
        };

        /**
         * Encodes the specified PbMsgEnterGame message, length delimited. Does not implicitly {@link msg.PbMsgEnterGame.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {msg.IPbMsgEnterGame} message PbMsgEnterGame message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgEnterGame.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgEnterGame message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgEnterGame} PbMsgEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgEnterGame.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgEnterGame();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.fixed64();
                    break;
                case 2:
                    message.time = reader.int32();
                    break;
                case 3:
                    message.userKey = reader.string();
                    break;
                case 4:
                    message.groupid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("userKey"))
                throw $util.ProtocolError("missing required 'userKey'", { instance: message });
            if (!message.hasOwnProperty("groupid"))
                throw $util.ProtocolError("missing required 'groupid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgEnterGame message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgEnterGame} PbMsgEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgEnterGame.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgEnterGame message.
         * @function verify
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgEnterGame.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            if (!$util.isInteger(message.time))
                return "time: integer expected";
            if (!$util.isString(message.userKey))
                return "userKey: string expected";
            if (!$util.isInteger(message.groupid))
                return "groupid: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgEnterGame message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgEnterGame} PbMsgEnterGame
         */
        PbMsgEnterGame.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgEnterGame)
                return object;
            var message = new $root.msg.PbMsgEnterGame();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.userKey != null)
                message.userKey = String(object.userKey);
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgEnterGame message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgEnterGame
         * @static
         * @param {msg.PbMsgEnterGame} message PbMsgEnterGame
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgEnterGame.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.time = 0;
                object.userKey = "";
                object.groupid = 0;
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.userKey != null && message.hasOwnProperty("userKey"))
                object.userKey = message.userKey;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            return object;
        };

        /**
         * Converts this PbMsgEnterGame to JSON.
         * @function toJSON
         * @memberof msg.PbMsgEnterGame
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgEnterGame.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgEnterGame.MSG
         * @enum {string}
         * @property {number} ID=1001 ID value
         */
        PbMsgEnterGame.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1001] = "ID"] = 1001;
            return values;
        })();

        return PbMsgEnterGame;
    })();

    msg.PbMsgCreateRole = (function() {

        /**
         * Properties of a PbMsgCreateRole.
         * @memberof msg
         * @interface IPbMsgCreateRole
         * @property {string} userId PbMsgCreateRole userId
         * @property {number|Long} roleId PbMsgCreateRole roleId
         * @property {number} time PbMsgCreateRole time
         * @property {string} userKey PbMsgCreateRole userKey
         * @property {number} serverId PbMsgCreateRole serverId
         * @property {number} groupid PbMsgCreateRole groupid
         * @property {number} platid PbMsgCreateRole platid
         * @property {number} platserver PbMsgCreateRole platserver
         * @property {string} name PbMsgCreateRole name
         * @property {number} careerId PbMsgCreateRole careerId
         * @property {string|null} [headurl] PbMsgCreateRole headurl
         * @property {number|null} [ext] PbMsgCreateRole ext
         */

        /**
         * Constructs a new PbMsgCreateRole.
         * @memberof msg
         * @classdesc Represents a PbMsgCreateRole.
         * @implements IPbMsgCreateRole
         * @constructor
         * @param {msg.IPbMsgCreateRole=} [properties] Properties to set
         */
        function PbMsgCreateRole(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgCreateRole userId.
         * @member {string} userId
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.userId = "";

        /**
         * PbMsgCreateRole roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgCreateRole time.
         * @member {number} time
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.time = 0;

        /**
         * PbMsgCreateRole userKey.
         * @member {string} userKey
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.userKey = "";

        /**
         * PbMsgCreateRole serverId.
         * @member {number} serverId
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.serverId = 0;

        /**
         * PbMsgCreateRole groupid.
         * @member {number} groupid
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.groupid = 0;

        /**
         * PbMsgCreateRole platid.
         * @member {number} platid
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.platid = 0;

        /**
         * PbMsgCreateRole platserver.
         * @member {number} platserver
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.platserver = 0;

        /**
         * PbMsgCreateRole name.
         * @member {string} name
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.name = "";

        /**
         * PbMsgCreateRole careerId.
         * @member {number} careerId
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.careerId = 0;

        /**
         * PbMsgCreateRole headurl.
         * @member {string} headurl
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.headurl = "";

        /**
         * PbMsgCreateRole ext.
         * @member {number} ext
         * @memberof msg.PbMsgCreateRole
         * @instance
         */
        PbMsgCreateRole.prototype.ext = 0;

        /**
         * Creates a new PbMsgCreateRole instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {msg.IPbMsgCreateRole=} [properties] Properties to set
         * @returns {msg.PbMsgCreateRole} PbMsgCreateRole instance
         */
        PbMsgCreateRole.create = function create(properties) {
            return new PbMsgCreateRole(properties);
        };

        /**
         * Encodes the specified PbMsgCreateRole message. Does not implicitly {@link msg.PbMsgCreateRole.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {msg.IPbMsgCreateRole} message PbMsgCreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgCreateRole.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.roleId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.userKey);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.serverId);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.groupid);
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.platid);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.platserver);
            writer.uint32(/* id 9, wireType 2 =*/74).string(message.name);
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.careerId);
            if (message.headurl != null && message.hasOwnProperty("headurl"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.headurl);
            if (message.ext != null && message.hasOwnProperty("ext"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ext);
            return writer;
        };

        /**
         * Encodes the specified PbMsgCreateRole message, length delimited. Does not implicitly {@link msg.PbMsgCreateRole.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {msg.IPbMsgCreateRole} message PbMsgCreateRole message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgCreateRole.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgCreateRole message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgCreateRole} PbMsgCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgCreateRole.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgCreateRole();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.userId = reader.string();
                    break;
                case 2:
                    message.roleId = reader.fixed64();
                    break;
                case 3:
                    message.time = reader.int32();
                    break;
                case 4:
                    message.userKey = reader.string();
                    break;
                case 5:
                    message.serverId = reader.int32();
                    break;
                case 6:
                    message.groupid = reader.int32();
                    break;
                case 7:
                    message.platid = reader.int32();
                    break;
                case 8:
                    message.platserver = reader.int32();
                    break;
                case 9:
                    message.name = reader.string();
                    break;
                case 10:
                    message.careerId = reader.int32();
                    break;
                case 11:
                    message.headurl = reader.string();
                    break;
                case 12:
                    message.ext = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("userId"))
                throw $util.ProtocolError("missing required 'userId'", { instance: message });
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("userKey"))
                throw $util.ProtocolError("missing required 'userKey'", { instance: message });
            if (!message.hasOwnProperty("serverId"))
                throw $util.ProtocolError("missing required 'serverId'", { instance: message });
            if (!message.hasOwnProperty("groupid"))
                throw $util.ProtocolError("missing required 'groupid'", { instance: message });
            if (!message.hasOwnProperty("platid"))
                throw $util.ProtocolError("missing required 'platid'", { instance: message });
            if (!message.hasOwnProperty("platserver"))
                throw $util.ProtocolError("missing required 'platserver'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("careerId"))
                throw $util.ProtocolError("missing required 'careerId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgCreateRole message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgCreateRole} PbMsgCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgCreateRole.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgCreateRole message.
         * @function verify
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgCreateRole.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.userId))
                return "userId: string expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            if (!$util.isInteger(message.time))
                return "time: integer expected";
            if (!$util.isString(message.userKey))
                return "userKey: string expected";
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
            if (!$util.isInteger(message.groupid))
                return "groupid: integer expected";
            if (!$util.isInteger(message.platid))
                return "platid: integer expected";
            if (!$util.isInteger(message.platserver))
                return "platserver: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.careerId))
                return "careerId: integer expected";
            if (message.headurl != null && message.hasOwnProperty("headurl"))
                if (!$util.isString(message.headurl))
                    return "headurl: string expected";
            if (message.ext != null && message.hasOwnProperty("ext"))
                if (!$util.isInteger(message.ext))
                    return "ext: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgCreateRole message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgCreateRole} PbMsgCreateRole
         */
        PbMsgCreateRole.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgCreateRole)
                return object;
            var message = new $root.msg.PbMsgCreateRole();
            if (object.userId != null)
                message.userId = String(object.userId);
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.time != null)
                message.time = object.time | 0;
            if (object.userKey != null)
                message.userKey = String(object.userKey);
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            if (object.platid != null)
                message.platid = object.platid | 0;
            if (object.platserver != null)
                message.platserver = object.platserver | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.careerId != null)
                message.careerId = object.careerId | 0;
            if (object.headurl != null)
                message.headurl = String(object.headurl);
            if (object.ext != null)
                message.ext = object.ext | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgCreateRole message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgCreateRole
         * @static
         * @param {msg.PbMsgCreateRole} message PbMsgCreateRole
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgCreateRole.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.userId = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.time = 0;
                object.userKey = "";
                object.serverId = 0;
                object.groupid = 0;
                object.platid = 0;
                object.platserver = 0;
                object.name = "";
                object.careerId = 0;
                object.headurl = "";
                object.ext = 0;
            }
            if (message.userId != null && message.hasOwnProperty("userId"))
                object.userId = message.userId;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.userKey != null && message.hasOwnProperty("userKey"))
                object.userKey = message.userKey;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.platid != null && message.hasOwnProperty("platid"))
                object.platid = message.platid;
            if (message.platserver != null && message.hasOwnProperty("platserver"))
                object.platserver = message.platserver;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.careerId != null && message.hasOwnProperty("careerId"))
                object.careerId = message.careerId;
            if (message.headurl != null && message.hasOwnProperty("headurl"))
                object.headurl = message.headurl;
            if (message.ext != null && message.hasOwnProperty("ext"))
                object.ext = message.ext;
            return object;
        };

        /**
         * Converts this PbMsgCreateRole to JSON.
         * @function toJSON
         * @memberof msg.PbMsgCreateRole
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgCreateRole.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgCreateRole.MSG
         * @enum {string}
         * @property {number} ID=1002 ID value
         */
        PbMsgCreateRole.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1002] = "ID"] = 1002;
            return values;
        })();

        return PbMsgCreateRole;
    })();

    msg.PbMsgSetName = (function() {

        /**
         * Properties of a PbMsgSetName.
         * @memberof msg
         * @interface IPbMsgSetName
         * @property {string} name PbMsgSetName name
         */

        /**
         * Constructs a new PbMsgSetName.
         * @memberof msg
         * @classdesc Represents a PbMsgSetName.
         * @implements IPbMsgSetName
         * @constructor
         * @param {msg.IPbMsgSetName=} [properties] Properties to set
         */
        function PbMsgSetName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgSetName name.
         * @member {string} name
         * @memberof msg.PbMsgSetName
         * @instance
         */
        PbMsgSetName.prototype.name = "";

        /**
         * Creates a new PbMsgSetName instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgSetName
         * @static
         * @param {msg.IPbMsgSetName=} [properties] Properties to set
         * @returns {msg.PbMsgSetName} PbMsgSetName instance
         */
        PbMsgSetName.create = function create(properties) {
            return new PbMsgSetName(properties);
        };

        /**
         * Encodes the specified PbMsgSetName message. Does not implicitly {@link msg.PbMsgSetName.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgSetName
         * @static
         * @param {msg.IPbMsgSetName} message PbMsgSetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified PbMsgSetName message, length delimited. Does not implicitly {@link msg.PbMsgSetName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgSetName
         * @static
         * @param {msg.IPbMsgSetName} message PbMsgSetName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgSetName message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgSetName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgSetName} PbMsgSetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgSetName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgSetName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgSetName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgSetName} PbMsgSetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgSetName message.
         * @function verify
         * @memberof msg.PbMsgSetName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgSetName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a PbMsgSetName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgSetName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgSetName} PbMsgSetName
         */
        PbMsgSetName.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgSetName)
                return object;
            var message = new $root.msg.PbMsgSetName();
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgSetName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgSetName
         * @static
         * @param {msg.PbMsgSetName} message PbMsgSetName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgSetName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.name = "";
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this PbMsgSetName to JSON.
         * @function toJSON
         * @memberof msg.PbMsgSetName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgSetName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgSetName.MSG
         * @enum {string}
         * @property {number} ID=1021 ID value
         */
        PbMsgSetName.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1021] = "ID"] = 1021;
            return values;
        })();

        return PbMsgSetName;
    })();

    msg.PbMsgSetHead = (function() {

        /**
         * Properties of a PbMsgSetHead.
         * @memberof msg
         * @interface IPbMsgSetHead
         * @property {string} headurl PbMsgSetHead headurl
         */

        /**
         * Constructs a new PbMsgSetHead.
         * @memberof msg
         * @classdesc Represents a PbMsgSetHead.
         * @implements IPbMsgSetHead
         * @constructor
         * @param {msg.IPbMsgSetHead=} [properties] Properties to set
         */
        function PbMsgSetHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgSetHead headurl.
         * @member {string} headurl
         * @memberof msg.PbMsgSetHead
         * @instance
         */
        PbMsgSetHead.prototype.headurl = "";

        /**
         * Creates a new PbMsgSetHead instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {msg.IPbMsgSetHead=} [properties] Properties to set
         * @returns {msg.PbMsgSetHead} PbMsgSetHead instance
         */
        PbMsgSetHead.create = function create(properties) {
            return new PbMsgSetHead(properties);
        };

        /**
         * Encodes the specified PbMsgSetHead message. Does not implicitly {@link msg.PbMsgSetHead.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {msg.IPbMsgSetHead} message PbMsgSetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.headurl);
            return writer;
        };

        /**
         * Encodes the specified PbMsgSetHead message, length delimited. Does not implicitly {@link msg.PbMsgSetHead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {msg.IPbMsgSetHead} message PbMsgSetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetHead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgSetHead message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgSetHead} PbMsgSetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgSetHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.headurl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("headurl"))
                throw $util.ProtocolError("missing required 'headurl'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgSetHead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgSetHead} PbMsgSetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetHead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgSetHead message.
         * @function verify
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgSetHead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.headurl))
                return "headurl: string expected";
            return null;
        };

        /**
         * Creates a PbMsgSetHead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgSetHead} PbMsgSetHead
         */
        PbMsgSetHead.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgSetHead)
                return object;
            var message = new $root.msg.PbMsgSetHead();
            if (object.headurl != null)
                message.headurl = String(object.headurl);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgSetHead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgSetHead
         * @static
         * @param {msg.PbMsgSetHead} message PbMsgSetHead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgSetHead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.headurl = "";
            if (message.headurl != null && message.hasOwnProperty("headurl"))
                object.headurl = message.headurl;
            return object;
        };

        /**
         * Converts this PbMsgSetHead to JSON.
         * @function toJSON
         * @memberof msg.PbMsgSetHead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgSetHead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgSetHead.MSG
         * @enum {string}
         * @property {number} ID=1022 ID value
         */
        PbMsgSetHead.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1022] = "ID"] = 1022;
            return values;
        })();

        return PbMsgSetHead;
    })();

    msg.PbMsgGetHead = (function() {

        /**
         * Properties of a PbMsgGetHead.
         * @memberof msg
         * @interface IPbMsgGetHead
         * @property {number|Long} roleId PbMsgGetHead roleId
         */

        /**
         * Constructs a new PbMsgGetHead.
         * @memberof msg
         * @classdesc Represents a PbMsgGetHead.
         * @implements IPbMsgGetHead
         * @constructor
         * @param {msg.IPbMsgGetHead=} [properties] Properties to set
         */
        function PbMsgGetHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetHead roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgGetHead
         * @instance
         */
        PbMsgGetHead.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PbMsgGetHead instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {msg.IPbMsgGetHead=} [properties] Properties to set
         * @returns {msg.PbMsgGetHead} PbMsgGetHead instance
         */
        PbMsgGetHead.create = function create(properties) {
            return new PbMsgGetHead(properties);
        };

        /**
         * Encodes the specified PbMsgGetHead message. Does not implicitly {@link msg.PbMsgGetHead.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {msg.IPbMsgGetHead} message PbMsgGetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetHead message, length delimited. Does not implicitly {@link msg.PbMsgGetHead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {msg.IPbMsgGetHead} message PbMsgGetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetHead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetHead message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetHead} PbMsgGetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetHead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetHead} PbMsgGetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetHead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetHead message.
         * @function verify
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetHead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PbMsgGetHead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetHead} PbMsgGetHead
         */
        PbMsgGetHead.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetHead)
                return object;
            var message = new $root.msg.PbMsgGetHead();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetHead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetHead
         * @static
         * @param {msg.PbMsgGetHead} message PbMsgGetHead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetHead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            return object;
        };

        /**
         * Converts this PbMsgGetHead to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetHead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetHead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetHead.MSG
         * @enum {string}
         * @property {number} ID=1023 ID value
         */
        PbMsgGetHead.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1023] = "ID"] = 1023;
            return values;
        })();

        return PbMsgGetHead;
    })();

    msg.PbMsgRetHead = (function() {

        /**
         * Properties of a PbMsgRetHead.
         * @memberof msg
         * @interface IPbMsgRetHead
         * @property {string} headurl PbMsgRetHead headurl
         */

        /**
         * Constructs a new PbMsgRetHead.
         * @memberof msg
         * @classdesc Represents a PbMsgRetHead.
         * @implements IPbMsgRetHead
         * @constructor
         * @param {msg.IPbMsgRetHead=} [properties] Properties to set
         */
        function PbMsgRetHead(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetHead headurl.
         * @member {string} headurl
         * @memberof msg.PbMsgRetHead
         * @instance
         */
        PbMsgRetHead.prototype.headurl = "";

        /**
         * Creates a new PbMsgRetHead instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {msg.IPbMsgRetHead=} [properties] Properties to set
         * @returns {msg.PbMsgRetHead} PbMsgRetHead instance
         */
        PbMsgRetHead.create = function create(properties) {
            return new PbMsgRetHead(properties);
        };

        /**
         * Encodes the specified PbMsgRetHead message. Does not implicitly {@link msg.PbMsgRetHead.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {msg.IPbMsgRetHead} message PbMsgRetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetHead.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.headurl);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetHead message, length delimited. Does not implicitly {@link msg.PbMsgRetHead.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {msg.IPbMsgRetHead} message PbMsgRetHead message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetHead.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetHead message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetHead} PbMsgRetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetHead.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetHead();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.headurl = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("headurl"))
                throw $util.ProtocolError("missing required 'headurl'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetHead message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetHead} PbMsgRetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetHead.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetHead message.
         * @function verify
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetHead.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.headurl))
                return "headurl: string expected";
            return null;
        };

        /**
         * Creates a PbMsgRetHead message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetHead} PbMsgRetHead
         */
        PbMsgRetHead.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetHead)
                return object;
            var message = new $root.msg.PbMsgRetHead();
            if (object.headurl != null)
                message.headurl = String(object.headurl);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetHead message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetHead
         * @static
         * @param {msg.PbMsgRetHead} message PbMsgRetHead
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetHead.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.headurl = "";
            if (message.headurl != null && message.hasOwnProperty("headurl"))
                object.headurl = message.headurl;
            return object;
        };

        /**
         * Converts this PbMsgRetHead to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetHead
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetHead.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetHead.MSG
         * @enum {string}
         * @property {number} ID=2023 ID value
         */
        PbMsgRetHead.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2023] = "ID"] = 2023;
            return values;
        })();

        return PbMsgRetHead;
    })();

    msg.PbMsgGetChain = (function() {

        /**
         * Properties of a PbMsgGetChain.
         * @memberof msg
         * @interface IPbMsgGetChain
         * @property {number} type PbMsgGetChain type
         * @property {number} bIndex PbMsgGetChain bIndex
         * @property {number} num PbMsgGetChain num
         */

        /**
         * Constructs a new PbMsgGetChain.
         * @memberof msg
         * @classdesc Represents a PbMsgGetChain.
         * @implements IPbMsgGetChain
         * @constructor
         * @param {msg.IPbMsgGetChain=} [properties] Properties to set
         */
        function PbMsgGetChain(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetChain type.
         * @member {number} type
         * @memberof msg.PbMsgGetChain
         * @instance
         */
        PbMsgGetChain.prototype.type = 0;

        /**
         * PbMsgGetChain bIndex.
         * @member {number} bIndex
         * @memberof msg.PbMsgGetChain
         * @instance
         */
        PbMsgGetChain.prototype.bIndex = 0;

        /**
         * PbMsgGetChain num.
         * @member {number} num
         * @memberof msg.PbMsgGetChain
         * @instance
         */
        PbMsgGetChain.prototype.num = 0;

        /**
         * Creates a new PbMsgGetChain instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {msg.IPbMsgGetChain=} [properties] Properties to set
         * @returns {msg.PbMsgGetChain} PbMsgGetChain instance
         */
        PbMsgGetChain.create = function create(properties) {
            return new PbMsgGetChain(properties);
        };

        /**
         * Encodes the specified PbMsgGetChain message. Does not implicitly {@link msg.PbMsgGetChain.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {msg.IPbMsgGetChain} message PbMsgGetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetChain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bIndex);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetChain message, length delimited. Does not implicitly {@link msg.PbMsgGetChain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {msg.IPbMsgGetChain} message PbMsgGetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetChain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetChain message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetChain} PbMsgGetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetChain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetChain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.bIndex = reader.int32();
                    break;
                case 3:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("bIndex"))
                throw $util.ProtocolError("missing required 'bIndex'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetChain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetChain} PbMsgGetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetChain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetChain message.
         * @function verify
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetChain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.bIndex))
                return "bIndex: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetChain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetChain} PbMsgGetChain
         */
        PbMsgGetChain.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetChain)
                return object;
            var message = new $root.msg.PbMsgGetChain();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bIndex != null)
                message.bIndex = object.bIndex | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetChain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetChain
         * @static
         * @param {msg.PbMsgGetChain} message PbMsgGetChain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetChain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.bIndex = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bIndex != null && message.hasOwnProperty("bIndex"))
                object.bIndex = message.bIndex;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this PbMsgGetChain to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetChain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetChain.MSG
         * @enum {string}
         * @property {number} ID=1024 ID value
         */
        PbMsgGetChain.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1024] = "ID"] = 1024;
            return values;
        })();

        return PbMsgGetChain;
    })();

    msg.PbMsgRetChain = (function() {

        /**
         * Properties of a PbMsgRetChain.
         * @memberof msg
         * @interface IPbMsgRetChain
         * @property {number} type PbMsgRetChain type
         * @property {number} bIndex PbMsgRetChain bIndex
         * @property {Array.<number>|null} [roleid] PbMsgRetChain roleid
         */

        /**
         * Constructs a new PbMsgRetChain.
         * @memberof msg
         * @classdesc Represents a PbMsgRetChain.
         * @implements IPbMsgRetChain
         * @constructor
         * @param {msg.IPbMsgRetChain=} [properties] Properties to set
         */
        function PbMsgRetChain(properties) {
            this.roleid = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetChain type.
         * @member {number} type
         * @memberof msg.PbMsgRetChain
         * @instance
         */
        PbMsgRetChain.prototype.type = 0;

        /**
         * PbMsgRetChain bIndex.
         * @member {number} bIndex
         * @memberof msg.PbMsgRetChain
         * @instance
         */
        PbMsgRetChain.prototype.bIndex = 0;

        /**
         * PbMsgRetChain roleid.
         * @member {Array.<number>} roleid
         * @memberof msg.PbMsgRetChain
         * @instance
         */
        PbMsgRetChain.prototype.roleid = $util.emptyArray;

        /**
         * Creates a new PbMsgRetChain instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {msg.IPbMsgRetChain=} [properties] Properties to set
         * @returns {msg.PbMsgRetChain} PbMsgRetChain instance
         */
        PbMsgRetChain.create = function create(properties) {
            return new PbMsgRetChain(properties);
        };

        /**
         * Encodes the specified PbMsgRetChain message. Does not implicitly {@link msg.PbMsgRetChain.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {msg.IPbMsgRetChain} message PbMsgRetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetChain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bIndex);
            if (message.roleid != null && message.roleid.length)
                for (var i = 0; i < message.roleid.length; ++i)
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roleid[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetChain message, length delimited. Does not implicitly {@link msg.PbMsgRetChain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {msg.IPbMsgRetChain} message PbMsgRetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetChain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetChain message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetChain} PbMsgRetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetChain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetChain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.bIndex = reader.int32();
                    break;
                case 3:
                    if (!(message.roleid && message.roleid.length))
                        message.roleid = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.roleid.push(reader.int32());
                    } else
                        message.roleid.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("bIndex"))
                throw $util.ProtocolError("missing required 'bIndex'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetChain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetChain} PbMsgRetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetChain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetChain message.
         * @function verify
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetChain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.bIndex))
                return "bIndex: integer expected";
            if (message.roleid != null && message.hasOwnProperty("roleid")) {
                if (!Array.isArray(message.roleid))
                    return "roleid: array expected";
                for (var i = 0; i < message.roleid.length; ++i)
                    if (!$util.isInteger(message.roleid[i]))
                        return "roleid: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgRetChain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetChain} PbMsgRetChain
         */
        PbMsgRetChain.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetChain)
                return object;
            var message = new $root.msg.PbMsgRetChain();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bIndex != null)
                message.bIndex = object.bIndex | 0;
            if (object.roleid) {
                if (!Array.isArray(object.roleid))
                    throw TypeError(".msg.PbMsgRetChain.roleid: array expected");
                message.roleid = [];
                for (var i = 0; i < object.roleid.length; ++i)
                    message.roleid[i] = object.roleid[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetChain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetChain
         * @static
         * @param {msg.PbMsgRetChain} message PbMsgRetChain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetChain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.roleid = [];
            if (options.defaults) {
                object.type = 0;
                object.bIndex = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bIndex != null && message.hasOwnProperty("bIndex"))
                object.bIndex = message.bIndex;
            if (message.roleid && message.roleid.length) {
                object.roleid = [];
                for (var j = 0; j < message.roleid.length; ++j)
                    object.roleid[j] = message.roleid[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgRetChain to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetChain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetChain.MSG
         * @enum {string}
         * @property {number} ID=2024 ID value
         */
        PbMsgRetChain.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[2024] = "ID"] = 2024;
            return values;
        })();

        return PbMsgRetChain;
    })();

    msg.PbMsgSetChain = (function() {

        /**
         * Properties of a PbMsgSetChain.
         * @memberof msg
         * @interface IPbMsgSetChain
         * @property {number} type PbMsgSetChain type
         * @property {number} roleId PbMsgSetChain roleId
         * @property {number} action PbMsgSetChain action
         */

        /**
         * Constructs a new PbMsgSetChain.
         * @memberof msg
         * @classdesc Represents a PbMsgSetChain.
         * @implements IPbMsgSetChain
         * @constructor
         * @param {msg.IPbMsgSetChain=} [properties] Properties to set
         */
        function PbMsgSetChain(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgSetChain type.
         * @member {number} type
         * @memberof msg.PbMsgSetChain
         * @instance
         */
        PbMsgSetChain.prototype.type = 0;

        /**
         * PbMsgSetChain roleId.
         * @member {number} roleId
         * @memberof msg.PbMsgSetChain
         * @instance
         */
        PbMsgSetChain.prototype.roleId = 0;

        /**
         * PbMsgSetChain action.
         * @member {number} action
         * @memberof msg.PbMsgSetChain
         * @instance
         */
        PbMsgSetChain.prototype.action = 0;

        /**
         * Creates a new PbMsgSetChain instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {msg.IPbMsgSetChain=} [properties] Properties to set
         * @returns {msg.PbMsgSetChain} PbMsgSetChain instance
         */
        PbMsgSetChain.create = function create(properties) {
            return new PbMsgSetChain(properties);
        };

        /**
         * Encodes the specified PbMsgSetChain message. Does not implicitly {@link msg.PbMsgSetChain.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {msg.IPbMsgSetChain} message PbMsgSetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetChain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.action);
            return writer;
        };

        /**
         * Encodes the specified PbMsgSetChain message, length delimited. Does not implicitly {@link msg.PbMsgSetChain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {msg.IPbMsgSetChain} message PbMsgSetChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgSetChain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgSetChain message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgSetChain} PbMsgSetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetChain.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgSetChain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.roleId = reader.int32();
                    break;
                case 3:
                    message.action = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            if (!message.hasOwnProperty("action"))
                throw $util.ProtocolError("missing required 'action'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgSetChain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgSetChain} PbMsgSetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgSetChain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgSetChain message.
         * @function verify
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgSetChain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.roleId))
                return "roleId: integer expected";
            if (!$util.isInteger(message.action))
                return "action: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgSetChain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgSetChain} PbMsgSetChain
         */
        PbMsgSetChain.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgSetChain)
                return object;
            var message = new $root.msg.PbMsgSetChain();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.roleId != null)
                message.roleId = object.roleId | 0;
            if (object.action != null)
                message.action = object.action | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgSetChain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgSetChain
         * @static
         * @param {msg.PbMsgSetChain} message PbMsgSetChain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgSetChain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.roleId = 0;
                object.action = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                object.roleId = message.roleId;
            if (message.action != null && message.hasOwnProperty("action"))
                object.action = message.action;
            return object;
        };

        /**
         * Converts this PbMsgSetChain to JSON.
         * @function toJSON
         * @memberof msg.PbMsgSetChain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgSetChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgSetChain.MSG
         * @enum {string}
         * @property {number} ID=1025 ID value
         */
        PbMsgSetChain.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[1025] = "ID"] = 1025;
            return values;
        })();

        return PbMsgSetChain;
    })();

    msg.PbMsgAdminCommand = (function() {

        /**
         * Properties of a PbMsgAdminCommand.
         * @memberof msg
         * @interface IPbMsgAdminCommand
         * @property {string} cmd PbMsgAdminCommand cmd
         * @property {Array.<string>|null} [parms] PbMsgAdminCommand parms
         */

        /**
         * Constructs a new PbMsgAdminCommand.
         * @memberof msg
         * @classdesc Represents a PbMsgAdminCommand.
         * @implements IPbMsgAdminCommand
         * @constructor
         * @param {msg.IPbMsgAdminCommand=} [properties] Properties to set
         */
        function PbMsgAdminCommand(properties) {
            this.parms = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgAdminCommand cmd.
         * @member {string} cmd
         * @memberof msg.PbMsgAdminCommand
         * @instance
         */
        PbMsgAdminCommand.prototype.cmd = "";

        /**
         * PbMsgAdminCommand parms.
         * @member {Array.<string>} parms
         * @memberof msg.PbMsgAdminCommand
         * @instance
         */
        PbMsgAdminCommand.prototype.parms = $util.emptyArray;

        /**
         * Creates a new PbMsgAdminCommand instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {msg.IPbMsgAdminCommand=} [properties] Properties to set
         * @returns {msg.PbMsgAdminCommand} PbMsgAdminCommand instance
         */
        PbMsgAdminCommand.create = function create(properties) {
            return new PbMsgAdminCommand(properties);
        };

        /**
         * Encodes the specified PbMsgAdminCommand message. Does not implicitly {@link msg.PbMsgAdminCommand.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {msg.IPbMsgAdminCommand} message PbMsgAdminCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgAdminCommand.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.cmd);
            if (message.parms != null && message.parms.length)
                for (var i = 0; i < message.parms.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.parms[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgAdminCommand message, length delimited. Does not implicitly {@link msg.PbMsgAdminCommand.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {msg.IPbMsgAdminCommand} message PbMsgAdminCommand message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgAdminCommand.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgAdminCommand message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgAdminCommand} PbMsgAdminCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgAdminCommand.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgAdminCommand();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.cmd = reader.string();
                    break;
                case 2:
                    if (!(message.parms && message.parms.length))
                        message.parms = [];
                    message.parms.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("cmd"))
                throw $util.ProtocolError("missing required 'cmd'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgAdminCommand message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgAdminCommand} PbMsgAdminCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgAdminCommand.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgAdminCommand message.
         * @function verify
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgAdminCommand.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.cmd))
                return "cmd: string expected";
            if (message.parms != null && message.hasOwnProperty("parms")) {
                if (!Array.isArray(message.parms))
                    return "parms: array expected";
                for (var i = 0; i < message.parms.length; ++i)
                    if (!$util.isString(message.parms[i]))
                        return "parms: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgAdminCommand message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgAdminCommand} PbMsgAdminCommand
         */
        PbMsgAdminCommand.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgAdminCommand)
                return object;
            var message = new $root.msg.PbMsgAdminCommand();
            if (object.cmd != null)
                message.cmd = String(object.cmd);
            if (object.parms) {
                if (!Array.isArray(object.parms))
                    throw TypeError(".msg.PbMsgAdminCommand.parms: array expected");
                message.parms = [];
                for (var i = 0; i < object.parms.length; ++i)
                    message.parms[i] = String(object.parms[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgAdminCommand message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgAdminCommand
         * @static
         * @param {msg.PbMsgAdminCommand} message PbMsgAdminCommand
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgAdminCommand.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.parms = [];
            if (options.defaults)
                object.cmd = "";
            if (message.cmd != null && message.hasOwnProperty("cmd"))
                object.cmd = message.cmd;
            if (message.parms && message.parms.length) {
                object.parms = [];
                for (var j = 0; j < message.parms.length; ++j)
                    object.parms[j] = message.parms[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgAdminCommand to JSON.
         * @function toJSON
         * @memberof msg.PbMsgAdminCommand
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgAdminCommand.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgAdminCommand.MSG
         * @enum {string}
         * @property {number} ID=3961 ID value
         */
        PbMsgAdminCommand.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[3961] = "ID"] = 3961;
            return values;
        })();

        return PbMsgAdminCommand;
    })();

    msg.PbMsgBuyItem = (function() {

        /**
         * Properties of a PbMsgBuyItem.
         * @memberof msg
         * @interface IPbMsgBuyItem
         * @property {number} itemid PbMsgBuyItem itemid
         * @property {number} num PbMsgBuyItem num
         * @property {number} money PbMsgBuyItem money
         */

        /**
         * Constructs a new PbMsgBuyItem.
         * @memberof msg
         * @classdesc Represents a PbMsgBuyItem.
         * @implements IPbMsgBuyItem
         * @constructor
         * @param {msg.IPbMsgBuyItem=} [properties] Properties to set
         */
        function PbMsgBuyItem(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgBuyItem itemid.
         * @member {number} itemid
         * @memberof msg.PbMsgBuyItem
         * @instance
         */
        PbMsgBuyItem.prototype.itemid = 0;

        /**
         * PbMsgBuyItem num.
         * @member {number} num
         * @memberof msg.PbMsgBuyItem
         * @instance
         */
        PbMsgBuyItem.prototype.num = 0;

        /**
         * PbMsgBuyItem money.
         * @member {number} money
         * @memberof msg.PbMsgBuyItem
         * @instance
         */
        PbMsgBuyItem.prototype.money = 0;

        /**
         * Creates a new PbMsgBuyItem instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {msg.IPbMsgBuyItem=} [properties] Properties to set
         * @returns {msg.PbMsgBuyItem} PbMsgBuyItem instance
         */
        PbMsgBuyItem.create = function create(properties) {
            return new PbMsgBuyItem(properties);
        };

        /**
         * Encodes the specified PbMsgBuyItem message. Does not implicitly {@link msg.PbMsgBuyItem.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {msg.IPbMsgBuyItem} message PbMsgBuyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBuyItem.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.money);
            return writer;
        };

        /**
         * Encodes the specified PbMsgBuyItem message, length delimited. Does not implicitly {@link msg.PbMsgBuyItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {msg.IPbMsgBuyItem} message PbMsgBuyItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgBuyItem.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgBuyItem message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgBuyItem} PbMsgBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBuyItem.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgBuyItem();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.itemid = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                case 3:
                    message.money = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("itemid"))
                throw $util.ProtocolError("missing required 'itemid'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            if (!message.hasOwnProperty("money"))
                throw $util.ProtocolError("missing required 'money'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgBuyItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgBuyItem} PbMsgBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgBuyItem.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgBuyItem message.
         * @function verify
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgBuyItem.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.itemid))
                return "itemid: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            if (!$util.isInteger(message.money))
                return "money: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgBuyItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgBuyItem} PbMsgBuyItem
         */
        PbMsgBuyItem.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgBuyItem)
                return object;
            var message = new $root.msg.PbMsgBuyItem();
            if (object.itemid != null)
                message.itemid = object.itemid | 0;
            if (object.num != null)
                message.num = object.num | 0;
            if (object.money != null)
                message.money = object.money | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgBuyItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgBuyItem
         * @static
         * @param {msg.PbMsgBuyItem} message PbMsgBuyItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgBuyItem.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.itemid = 0;
                object.num = 0;
                object.money = 0;
            }
            if (message.itemid != null && message.hasOwnProperty("itemid"))
                object.itemid = message.itemid;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            if (message.money != null && message.hasOwnProperty("money"))
                object.money = message.money;
            return object;
        };

        /**
         * Converts this PbMsgBuyItem to JSON.
         * @function toJSON
         * @memberof msg.PbMsgBuyItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgBuyItem.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgBuyItem.MSG
         * @enum {string}
         * @property {number} ID=5031 ID value
         */
        PbMsgBuyItem.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5031] = "ID"] = 5031;
            return values;
        })();

        return PbMsgBuyItem;
    })();

    msg.PbMsgGetRandName = (function() {

        /**
         * Properties of a PbMsgGetRandName.
         * @memberof msg
         * @interface IPbMsgGetRandName
         * @property {number} num PbMsgGetRandName num
         */

        /**
         * Constructs a new PbMsgGetRandName.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRandName.
         * @implements IPbMsgGetRandName
         * @constructor
         * @param {msg.IPbMsgGetRandName=} [properties] Properties to set
         */
        function PbMsgGetRandName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRandName num.
         * @member {number} num
         * @memberof msg.PbMsgGetRandName
         * @instance
         */
        PbMsgGetRandName.prototype.num = 0;

        /**
         * Creates a new PbMsgGetRandName instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {msg.IPbMsgGetRandName=} [properties] Properties to set
         * @returns {msg.PbMsgGetRandName} PbMsgGetRandName instance
         */
        PbMsgGetRandName.create = function create(properties) {
            return new PbMsgGetRandName(properties);
        };

        /**
         * Encodes the specified PbMsgGetRandName message. Does not implicitly {@link msg.PbMsgGetRandName.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {msg.IPbMsgGetRandName} message PbMsgGetRandName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRandName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRandName message, length delimited. Does not implicitly {@link msg.PbMsgGetRandName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {msg.IPbMsgGetRandName} message PbMsgGetRandName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRandName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRandName message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRandName} PbMsgGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRandName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRandName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRandName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRandName} PbMsgGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRandName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRandName message.
         * @function verify
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRandName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetRandName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRandName} PbMsgGetRandName
         */
        PbMsgGetRandName.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRandName)
                return object;
            var message = new $root.msg.PbMsgGetRandName();
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRandName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRandName
         * @static
         * @param {msg.PbMsgGetRandName} message PbMsgGetRandName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRandName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.num = 0;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this PbMsgGetRandName to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRandName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRandName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRandName.MSG
         * @enum {string}
         * @property {number} ID=5032 ID value
         */
        PbMsgGetRandName.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5032] = "ID"] = 5032;
            return values;
        })();

        return PbMsgGetRandName;
    })();

    msg.PbMsgRetGetRandName = (function() {

        /**
         * Properties of a PbMsgRetGetRandName.
         * @memberof msg
         * @interface IPbMsgRetGetRandName
         * @property {Array.<string>|null} [name] PbMsgRetGetRandName name
         */

        /**
         * Constructs a new PbMsgRetGetRandName.
         * @memberof msg
         * @classdesc Represents a PbMsgRetGetRandName.
         * @implements IPbMsgRetGetRandName
         * @constructor
         * @param {msg.IPbMsgRetGetRandName=} [properties] Properties to set
         */
        function PbMsgRetGetRandName(properties) {
            this.name = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetGetRandName name.
         * @member {Array.<string>} name
         * @memberof msg.PbMsgRetGetRandName
         * @instance
         */
        PbMsgRetGetRandName.prototype.name = $util.emptyArray;

        /**
         * Creates a new PbMsgRetGetRandName instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {msg.IPbMsgRetGetRandName=} [properties] Properties to set
         * @returns {msg.PbMsgRetGetRandName} PbMsgRetGetRandName instance
         */
        PbMsgRetGetRandName.create = function create(properties) {
            return new PbMsgRetGetRandName(properties);
        };

        /**
         * Encodes the specified PbMsgRetGetRandName message. Does not implicitly {@link msg.PbMsgRetGetRandName.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {msg.IPbMsgRetGetRandName} message PbMsgRetGetRandName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetRandName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.name.length)
                for (var i = 0; i < message.name.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.name[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetGetRandName message, length delimited. Does not implicitly {@link msg.PbMsgRetGetRandName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {msg.IPbMsgRetGetRandName} message PbMsgRetGetRandName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetRandName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetGetRandName message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetGetRandName} PbMsgRetGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetRandName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetRandName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.name && message.name.length))
                        message.name = [];
                    message.name.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgRetGetRandName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetGetRandName} PbMsgRetGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetRandName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetGetRandName message.
         * @function verify
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetGetRandName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name")) {
                if (!Array.isArray(message.name))
                    return "name: array expected";
                for (var i = 0; i < message.name.length; ++i)
                    if (!$util.isString(message.name[i]))
                        return "name: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgRetGetRandName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetGetRandName} PbMsgRetGetRandName
         */
        PbMsgRetGetRandName.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetGetRandName)
                return object;
            var message = new $root.msg.PbMsgRetGetRandName();
            if (object.name) {
                if (!Array.isArray(object.name))
                    throw TypeError(".msg.PbMsgRetGetRandName.name: array expected");
                message.name = [];
                for (var i = 0; i < object.name.length; ++i)
                    message.name[i] = String(object.name[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetGetRandName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetGetRandName
         * @static
         * @param {msg.PbMsgRetGetRandName} message PbMsgRetGetRandName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetGetRandName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.name = [];
            if (message.name && message.name.length) {
                object.name = [];
                for (var j = 0; j < message.name.length; ++j)
                    object.name[j] = message.name[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgRetGetRandName to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetGetRandName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetGetRandName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetGetRandName.MSG
         * @enum {string}
         * @property {number} ID=6032 ID value
         */
        PbMsgRetGetRandName.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6032] = "ID"] = 6032;
            return values;
        })();

        return PbMsgRetGetRandName;
    })();

    msg.PbMsgGetCdkAward = (function() {

        /**
         * Properties of a PbMsgGetCdkAward.
         * @memberof msg
         * @interface IPbMsgGetCdkAward
         * @property {string} code PbMsgGetCdkAward code
         */

        /**
         * Constructs a new PbMsgGetCdkAward.
         * @memberof msg
         * @classdesc Represents a PbMsgGetCdkAward.
         * @implements IPbMsgGetCdkAward
         * @constructor
         * @param {msg.IPbMsgGetCdkAward=} [properties] Properties to set
         */
        function PbMsgGetCdkAward(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetCdkAward code.
         * @member {string} code
         * @memberof msg.PbMsgGetCdkAward
         * @instance
         */
        PbMsgGetCdkAward.prototype.code = "";

        /**
         * Creates a new PbMsgGetCdkAward instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {msg.IPbMsgGetCdkAward=} [properties] Properties to set
         * @returns {msg.PbMsgGetCdkAward} PbMsgGetCdkAward instance
         */
        PbMsgGetCdkAward.create = function create(properties) {
            return new PbMsgGetCdkAward(properties);
        };

        /**
         * Encodes the specified PbMsgGetCdkAward message. Does not implicitly {@link msg.PbMsgGetCdkAward.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {msg.IPbMsgGetCdkAward} message PbMsgGetCdkAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetCdkAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetCdkAward message, length delimited. Does not implicitly {@link msg.PbMsgGetCdkAward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {msg.IPbMsgGetCdkAward} message PbMsgGetCdkAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetCdkAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetCdkAward message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetCdkAward} PbMsgGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetCdkAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetCdkAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.code = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("code"))
                throw $util.ProtocolError("missing required 'code'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetCdkAward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetCdkAward} PbMsgGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetCdkAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetCdkAward message.
         * @function verify
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetCdkAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.code))
                return "code: string expected";
            return null;
        };

        /**
         * Creates a PbMsgGetCdkAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetCdkAward} PbMsgGetCdkAward
         */
        PbMsgGetCdkAward.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetCdkAward)
                return object;
            var message = new $root.msg.PbMsgGetCdkAward();
            if (object.code != null)
                message.code = String(object.code);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetCdkAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetCdkAward
         * @static
         * @param {msg.PbMsgGetCdkAward} message PbMsgGetCdkAward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetCdkAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.code = "";
            if (message.code != null && message.hasOwnProperty("code"))
                object.code = message.code;
            return object;
        };

        /**
         * Converts this PbMsgGetCdkAward to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetCdkAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetCdkAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetCdkAward.MSG
         * @enum {string}
         * @property {number} ID=5033 ID value
         */
        PbMsgGetCdkAward.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5033] = "ID"] = 5033;
            return values;
        })();

        return PbMsgGetCdkAward;
    })();

    msg.PbMsgRetGetCdkAward = (function() {

        /**
         * Properties of a PbMsgRetGetCdkAward.
         * @memberof msg
         * @interface IPbMsgRetGetCdkAward
         * @property {number} retCode PbMsgRetGetCdkAward retCode
         * @property {Array.<msg.PbMsgRetGetCdkAward.IItem>|null} [award] PbMsgRetGetCdkAward award
         */

        /**
         * Constructs a new PbMsgRetGetCdkAward.
         * @memberof msg
         * @classdesc Represents a PbMsgRetGetCdkAward.
         * @implements IPbMsgRetGetCdkAward
         * @constructor
         * @param {msg.IPbMsgRetGetCdkAward=} [properties] Properties to set
         */
        function PbMsgRetGetCdkAward(properties) {
            this.award = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetGetCdkAward retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetGetCdkAward
         * @instance
         */
        PbMsgRetGetCdkAward.prototype.retCode = 0;

        /**
         * PbMsgRetGetCdkAward award.
         * @member {Array.<msg.PbMsgRetGetCdkAward.IItem>} award
         * @memberof msg.PbMsgRetGetCdkAward
         * @instance
         */
        PbMsgRetGetCdkAward.prototype.award = $util.emptyArray;

        /**
         * Creates a new PbMsgRetGetCdkAward instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {msg.IPbMsgRetGetCdkAward=} [properties] Properties to set
         * @returns {msg.PbMsgRetGetCdkAward} PbMsgRetGetCdkAward instance
         */
        PbMsgRetGetCdkAward.create = function create(properties) {
            return new PbMsgRetGetCdkAward(properties);
        };

        /**
         * Encodes the specified PbMsgRetGetCdkAward message. Does not implicitly {@link msg.PbMsgRetGetCdkAward.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {msg.IPbMsgRetGetCdkAward} message PbMsgRetGetCdkAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetCdkAward.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.award != null && message.award.length)
                for (var i = 0; i < message.award.length; ++i)
                    $root.msg.PbMsgRetGetCdkAward.Item.encode(message.award[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetGetCdkAward message, length delimited. Does not implicitly {@link msg.PbMsgRetGetCdkAward.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {msg.IPbMsgRetGetCdkAward} message PbMsgRetGetCdkAward message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetCdkAward.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetGetCdkAward message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetGetCdkAward} PbMsgRetGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetCdkAward.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetCdkAward();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    if (!(message.award && message.award.length))
                        message.award = [];
                    message.award.push($root.msg.PbMsgRetGetCdkAward.Item.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetGetCdkAward message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetGetCdkAward} PbMsgRetGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetCdkAward.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetGetCdkAward message.
         * @function verify
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetGetCdkAward.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.award != null && message.hasOwnProperty("award")) {
                if (!Array.isArray(message.award))
                    return "award: array expected";
                for (var i = 0; i < message.award.length; ++i) {
                    var error = $root.msg.PbMsgRetGetCdkAward.Item.verify(message.award[i]);
                    if (error)
                        return "award." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetGetCdkAward message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetGetCdkAward} PbMsgRetGetCdkAward
         */
        PbMsgRetGetCdkAward.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetGetCdkAward)
                return object;
            var message = new $root.msg.PbMsgRetGetCdkAward();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.award) {
                if (!Array.isArray(object.award))
                    throw TypeError(".msg.PbMsgRetGetCdkAward.award: array expected");
                message.award = [];
                for (var i = 0; i < object.award.length; ++i) {
                    if (typeof object.award[i] !== "object")
                        throw TypeError(".msg.PbMsgRetGetCdkAward.award: object expected");
                    message.award[i] = $root.msg.PbMsgRetGetCdkAward.Item.fromObject(object.award[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetGetCdkAward message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetGetCdkAward
         * @static
         * @param {msg.PbMsgRetGetCdkAward} message PbMsgRetGetCdkAward
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetGetCdkAward.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.award = [];
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.award && message.award.length) {
                object.award = [];
                for (var j = 0; j < message.award.length; ++j)
                    object.award[j] = $root.msg.PbMsgRetGetCdkAward.Item.toObject(message.award[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetGetCdkAward to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetGetCdkAward
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetGetCdkAward.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetGetCdkAward.MSG
         * @enum {string}
         * @property {number} ID=6033 ID value
         */
        PbMsgRetGetCdkAward.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6033] = "ID"] = 6033;
            return values;
        })();

        PbMsgRetGetCdkAward.Item = (function() {

            /**
             * Properties of an Item.
             * @memberof msg.PbMsgRetGetCdkAward
             * @interface IItem
             * @property {number} id Item id
             * @property {number} num Item num
             */

            /**
             * Constructs a new Item.
             * @memberof msg.PbMsgRetGetCdkAward
             * @classdesc Represents an Item.
             * @implements IItem
             * @constructor
             * @param {msg.PbMsgRetGetCdkAward.IItem=} [properties] Properties to set
             */
            function Item(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Item id.
             * @member {number} id
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @instance
             */
            Item.prototype.id = 0;

            /**
             * Item num.
             * @member {number} num
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @instance
             */
            Item.prototype.num = 0;

            /**
             * Creates a new Item instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {msg.PbMsgRetGetCdkAward.IItem=} [properties] Properties to set
             * @returns {msg.PbMsgRetGetCdkAward.Item} Item instance
             */
            Item.create = function create(properties) {
                return new Item(properties);
            };

            /**
             * Encodes the specified Item message. Does not implicitly {@link msg.PbMsgRetGetCdkAward.Item.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {msg.PbMsgRetGetCdkAward.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
                return writer;
            };

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link msg.PbMsgRetGetCdkAward.Item.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {msg.PbMsgRetGetCdkAward.IItem} message Item message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Item.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetGetCdkAward.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetCdkAward.Item();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.id = reader.int32();
                        break;
                    case 3:
                        message.num = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("id"))
                    throw $util.ProtocolError("missing required 'id'", { instance: message });
                if (!message.hasOwnProperty("num"))
                    throw $util.ProtocolError("missing required 'num'", { instance: message });
                return message;
            };

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetGetCdkAward.Item} Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Item.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an Item message.
             * @function verify
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Item.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
                if (!$util.isInteger(message.num))
                    return "num: integer expected";
                return null;
            };

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetGetCdkAward.Item} Item
             */
            Item.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetGetCdkAward.Item)
                    return object;
                var message = new $root.msg.PbMsgRetGetCdkAward.Item();
                if (object.id != null)
                    message.id = object.id | 0;
                if (object.num != null)
                    message.num = object.num | 0;
                return message;
            };

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @static
             * @param {msg.PbMsgRetGetCdkAward.Item} message Item
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Item.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.id = 0;
                    object.num = 0;
                }
                if (message.id != null && message.hasOwnProperty("id"))
                    object.id = message.id;
                if (message.num != null && message.hasOwnProperty("num"))
                    object.num = message.num;
                return object;
            };

            /**
             * Converts this Item to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetGetCdkAward.Item
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Item.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Item;
        })();

        return PbMsgRetGetCdkAward;
    })();

    msg.PbMsgGetRoleIdsByName = (function() {

        /**
         * Properties of a PbMsgGetRoleIdsByName.
         * @memberof msg
         * @interface IPbMsgGetRoleIdsByName
         * @property {number} serverid PbMsgGetRoleIdsByName serverid
         * @property {string} name PbMsgGetRoleIdsByName name
         */

        /**
         * Constructs a new PbMsgGetRoleIdsByName.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRoleIdsByName.
         * @implements IPbMsgGetRoleIdsByName
         * @constructor
         * @param {msg.IPbMsgGetRoleIdsByName=} [properties] Properties to set
         */
        function PbMsgGetRoleIdsByName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRoleIdsByName serverid.
         * @member {number} serverid
         * @memberof msg.PbMsgGetRoleIdsByName
         * @instance
         */
        PbMsgGetRoleIdsByName.prototype.serverid = 0;

        /**
         * PbMsgGetRoleIdsByName name.
         * @member {string} name
         * @memberof msg.PbMsgGetRoleIdsByName
         * @instance
         */
        PbMsgGetRoleIdsByName.prototype.name = "";

        /**
         * Creates a new PbMsgGetRoleIdsByName instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {msg.IPbMsgGetRoleIdsByName=} [properties] Properties to set
         * @returns {msg.PbMsgGetRoleIdsByName} PbMsgGetRoleIdsByName instance
         */
        PbMsgGetRoleIdsByName.create = function create(properties) {
            return new PbMsgGetRoleIdsByName(properties);
        };

        /**
         * Encodes the specified PbMsgGetRoleIdsByName message. Does not implicitly {@link msg.PbMsgGetRoleIdsByName.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {msg.IPbMsgGetRoleIdsByName} message PbMsgGetRoleIdsByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleIdsByName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverid);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRoleIdsByName message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleIdsByName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {msg.IPbMsgGetRoleIdsByName} message PbMsgGetRoleIdsByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleIdsByName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRoleIdsByName message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRoleIdsByName} PbMsgGetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleIdsByName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRoleIdsByName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverid = reader.int32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serverid"))
                throw $util.ProtocolError("missing required 'serverid'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRoleIdsByName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRoleIdsByName} PbMsgGetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleIdsByName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRoleIdsByName message.
         * @function verify
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRoleIdsByName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.serverid))
                return "serverid: integer expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            return null;
        };

        /**
         * Creates a PbMsgGetRoleIdsByName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRoleIdsByName} PbMsgGetRoleIdsByName
         */
        PbMsgGetRoleIdsByName.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRoleIdsByName)
                return object;
            var message = new $root.msg.PbMsgGetRoleIdsByName();
            if (object.serverid != null)
                message.serverid = object.serverid | 0;
            if (object.name != null)
                message.name = String(object.name);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRoleIdsByName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRoleIdsByName
         * @static
         * @param {msg.PbMsgGetRoleIdsByName} message PbMsgGetRoleIdsByName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRoleIdsByName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverid = 0;
                object.name = "";
            }
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                object.serverid = message.serverid;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            return object;
        };

        /**
         * Converts this PbMsgGetRoleIdsByName to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRoleIdsByName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRoleIdsByName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRoleIdsByName.MSG
         * @enum {string}
         * @property {number} ID=5035 ID value
         */
        PbMsgGetRoleIdsByName.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5035] = "ID"] = 5035;
            return values;
        })();

        return PbMsgGetRoleIdsByName;
    })();

    msg.PbMsgRetRoleIdsByName = (function() {

        /**
         * Properties of a PbMsgRetRoleIdsByName.
         * @memberof msg
         * @interface IPbMsgRetRoleIdsByName
         * @property {number} roleid PbMsgRetRoleIdsByName roleid
         */

        /**
         * Constructs a new PbMsgRetRoleIdsByName.
         * @memberof msg
         * @classdesc Represents a PbMsgRetRoleIdsByName.
         * @implements IPbMsgRetRoleIdsByName
         * @constructor
         * @param {msg.IPbMsgRetRoleIdsByName=} [properties] Properties to set
         */
        function PbMsgRetRoleIdsByName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetRoleIdsByName roleid.
         * @member {number} roleid
         * @memberof msg.PbMsgRetRoleIdsByName
         * @instance
         */
        PbMsgRetRoleIdsByName.prototype.roleid = 0;

        /**
         * Creates a new PbMsgRetRoleIdsByName instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {msg.IPbMsgRetRoleIdsByName=} [properties] Properties to set
         * @returns {msg.PbMsgRetRoleIdsByName} PbMsgRetRoleIdsByName instance
         */
        PbMsgRetRoleIdsByName.create = function create(properties) {
            return new PbMsgRetRoleIdsByName(properties);
        };

        /**
         * Encodes the specified PbMsgRetRoleIdsByName message. Does not implicitly {@link msg.PbMsgRetRoleIdsByName.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {msg.IPbMsgRetRoleIdsByName} message PbMsgRetRoleIdsByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRoleIdsByName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roleid);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetRoleIdsByName message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {msg.IPbMsgRetRoleIdsByName} message PbMsgRetRoleIdsByName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRoleIdsByName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetRoleIdsByName message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetRoleIdsByName} PbMsgRetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRoleIdsByName.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetRoleIdsByName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleid"))
                throw $util.ProtocolError("missing required 'roleid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetRoleIdsByName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetRoleIdsByName} PbMsgRetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRoleIdsByName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetRoleIdsByName message.
         * @function verify
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetRoleIdsByName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleid))
                return "roleid: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgRetRoleIdsByName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetRoleIdsByName} PbMsgRetRoleIdsByName
         */
        PbMsgRetRoleIdsByName.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetRoleIdsByName)
                return object;
            var message = new $root.msg.PbMsgRetRoleIdsByName();
            if (object.roleid != null)
                message.roleid = object.roleid | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetRoleIdsByName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetRoleIdsByName
         * @static
         * @param {msg.PbMsgRetRoleIdsByName} message PbMsgRetRoleIdsByName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetRoleIdsByName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.roleid = 0;
            if (message.roleid != null && message.hasOwnProperty("roleid"))
                object.roleid = message.roleid;
            return object;
        };

        /**
         * Converts this PbMsgRetRoleIdsByName to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetRoleIdsByName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetRoleIdsByName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetRoleIdsByName.MSG
         * @enum {string}
         * @property {number} ID=6035 ID value
         */
        PbMsgRetRoleIdsByName.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6035] = "ID"] = 6035;
            return values;
        })();

        return PbMsgRetRoleIdsByName;
    })();

    msg.PbMsgGetRoleIdsByUserIds = (function() {

        /**
         * Properties of a PbMsgGetRoleIdsByUserIds.
         * @memberof msg
         * @interface IPbMsgGetRoleIdsByUserIds
         * @property {number} serverid PbMsgGetRoleIdsByUserIds serverid
         * @property {Array.<string>|null} [list] PbMsgGetRoleIdsByUserIds list
         */

        /**
         * Constructs a new PbMsgGetRoleIdsByUserIds.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRoleIdsByUserIds.
         * @implements IPbMsgGetRoleIdsByUserIds
         * @constructor
         * @param {msg.IPbMsgGetRoleIdsByUserIds=} [properties] Properties to set
         */
        function PbMsgGetRoleIdsByUserIds(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRoleIdsByUserIds serverid.
         * @member {number} serverid
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @instance
         */
        PbMsgGetRoleIdsByUserIds.prototype.serverid = 0;

        /**
         * PbMsgGetRoleIdsByUserIds list.
         * @member {Array.<string>} list
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @instance
         */
        PbMsgGetRoleIdsByUserIds.prototype.list = $util.emptyArray;

        /**
         * Creates a new PbMsgGetRoleIdsByUserIds instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgGetRoleIdsByUserIds=} [properties] Properties to set
         * @returns {msg.PbMsgGetRoleIdsByUserIds} PbMsgGetRoleIdsByUserIds instance
         */
        PbMsgGetRoleIdsByUserIds.create = function create(properties) {
            return new PbMsgGetRoleIdsByUserIds(properties);
        };

        /**
         * Encodes the specified PbMsgGetRoleIdsByUserIds message. Does not implicitly {@link msg.PbMsgGetRoleIdsByUserIds.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgGetRoleIdsByUserIds} message PbMsgGetRoleIdsByUserIds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleIdsByUserIds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverid);
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.list[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRoleIdsByUserIds message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleIdsByUserIds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgGetRoleIdsByUserIds} message PbMsgGetRoleIdsByUserIds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleIdsByUserIds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRoleIdsByUserIds message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRoleIdsByUserIds} PbMsgGetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleIdsByUserIds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRoleIdsByUserIds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverid = reader.int32();
                    break;
                case 2:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serverid"))
                throw $util.ProtocolError("missing required 'serverid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRoleIdsByUserIds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRoleIdsByUserIds} PbMsgGetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleIdsByUserIds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRoleIdsByUserIds message.
         * @function verify
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRoleIdsByUserIds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.serverid))
                return "serverid: integer expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i)
                    if (!$util.isString(message.list[i]))
                        return "list: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgGetRoleIdsByUserIds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRoleIdsByUserIds} PbMsgGetRoleIdsByUserIds
         */
        PbMsgGetRoleIdsByUserIds.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRoleIdsByUserIds)
                return object;
            var message = new $root.msg.PbMsgGetRoleIdsByUserIds();
            if (object.serverid != null)
                message.serverid = object.serverid | 0;
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".msg.PbMsgGetRoleIdsByUserIds.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i)
                    message.list[i] = String(object.list[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRoleIdsByUserIds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @static
         * @param {msg.PbMsgGetRoleIdsByUserIds} message PbMsgGetRoleIdsByUserIds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRoleIdsByUserIds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (options.defaults)
                object.serverid = 0;
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                object.serverid = message.serverid;
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = message.list[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgGetRoleIdsByUserIds to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRoleIdsByUserIds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRoleIdsByUserIds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRoleIdsByUserIds.MSG
         * @enum {string}
         * @property {number} ID=5034 ID value
         */
        PbMsgGetRoleIdsByUserIds.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5034] = "ID"] = 5034;
            return values;
        })();

        return PbMsgGetRoleIdsByUserIds;
    })();

    msg.PbMsgRetRoleIdsByUserIds = (function() {

        /**
         * Properties of a PbMsgRetRoleIdsByUserIds.
         * @memberof msg
         * @interface IPbMsgRetRoleIdsByUserIds
         * @property {Array.<msg.PbMsgRetRoleIdsByUserIds.IRoleInfo>|null} [list] PbMsgRetRoleIdsByUserIds list
         */

        /**
         * Constructs a new PbMsgRetRoleIdsByUserIds.
         * @memberof msg
         * @classdesc Represents a PbMsgRetRoleIdsByUserIds.
         * @implements IPbMsgRetRoleIdsByUserIds
         * @constructor
         * @param {msg.IPbMsgRetRoleIdsByUserIds=} [properties] Properties to set
         */
        function PbMsgRetRoleIdsByUserIds(properties) {
            this.list = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetRoleIdsByUserIds list.
         * @member {Array.<msg.PbMsgRetRoleIdsByUserIds.IRoleInfo>} list
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @instance
         */
        PbMsgRetRoleIdsByUserIds.prototype.list = $util.emptyArray;

        /**
         * Creates a new PbMsgRetRoleIdsByUserIds instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgRetRoleIdsByUserIds=} [properties] Properties to set
         * @returns {msg.PbMsgRetRoleIdsByUserIds} PbMsgRetRoleIdsByUserIds instance
         */
        PbMsgRetRoleIdsByUserIds.create = function create(properties) {
            return new PbMsgRetRoleIdsByUserIds(properties);
        };

        /**
         * Encodes the specified PbMsgRetRoleIdsByUserIds message. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgRetRoleIdsByUserIds} message PbMsgRetRoleIdsByUserIds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRoleIdsByUserIds.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.list != null && message.list.length)
                for (var i = 0; i < message.list.length; ++i)
                    $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo.encode(message.list[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetRoleIdsByUserIds message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {msg.IPbMsgRetRoleIdsByUserIds} message PbMsgRetRoleIdsByUserIds message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRoleIdsByUserIds.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetRoleIdsByUserIds message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetRoleIdsByUserIds} PbMsgRetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRoleIdsByUserIds.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetRoleIdsByUserIds();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.list && message.list.length))
                        message.list = [];
                    message.list.push($root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgRetRoleIdsByUserIds message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetRoleIdsByUserIds} PbMsgRetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRoleIdsByUserIds.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetRoleIdsByUserIds message.
         * @function verify
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetRoleIdsByUserIds.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.list != null && message.hasOwnProperty("list")) {
                if (!Array.isArray(message.list))
                    return "list: array expected";
                for (var i = 0; i < message.list.length; ++i) {
                    var error = $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo.verify(message.list[i]);
                    if (error)
                        return "list." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetRoleIdsByUserIds message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetRoleIdsByUserIds} PbMsgRetRoleIdsByUserIds
         */
        PbMsgRetRoleIdsByUserIds.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetRoleIdsByUserIds)
                return object;
            var message = new $root.msg.PbMsgRetRoleIdsByUserIds();
            if (object.list) {
                if (!Array.isArray(object.list))
                    throw TypeError(".msg.PbMsgRetRoleIdsByUserIds.list: array expected");
                message.list = [];
                for (var i = 0; i < object.list.length; ++i) {
                    if (typeof object.list[i] !== "object")
                        throw TypeError(".msg.PbMsgRetRoleIdsByUserIds.list: object expected");
                    message.list[i] = $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo.fromObject(object.list[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetRoleIdsByUserIds message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @static
         * @param {msg.PbMsgRetRoleIdsByUserIds} message PbMsgRetRoleIdsByUserIds
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetRoleIdsByUserIds.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.list = [];
            if (message.list && message.list.length) {
                object.list = [];
                for (var j = 0; j < message.list.length; ++j)
                    object.list[j] = $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo.toObject(message.list[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetRoleIdsByUserIds to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetRoleIdsByUserIds
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetRoleIdsByUserIds.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetRoleIdsByUserIds.MSG
         * @enum {string}
         * @property {number} ID=6034 ID value
         */
        PbMsgRetRoleIdsByUserIds.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6034] = "ID"] = 6034;
            return values;
        })();

        PbMsgRetRoleIdsByUserIds.RoleInfo = (function() {

            /**
             * Properties of a RoleInfo.
             * @memberof msg.PbMsgRetRoleIdsByUserIds
             * @interface IRoleInfo
             * @property {number|Long} roleId RoleInfo roleId
             * @property {string} userId RoleInfo userId
             */

            /**
             * Constructs a new RoleInfo.
             * @memberof msg.PbMsgRetRoleIdsByUserIds
             * @classdesc Represents a RoleInfo.
             * @implements IRoleInfo
             * @constructor
             * @param {msg.PbMsgRetRoleIdsByUserIds.IRoleInfo=} [properties] Properties to set
             */
            function RoleInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RoleInfo roleId.
             * @member {number|Long} roleId
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @instance
             */
            RoleInfo.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RoleInfo userId.
             * @member {string} userId
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @instance
             */
            RoleInfo.prototype.userId = "";

            /**
             * Creates a new RoleInfo instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {msg.PbMsgRetRoleIdsByUserIds.IRoleInfo=} [properties] Properties to set
             * @returns {msg.PbMsgRetRoleIdsByUserIds.RoleInfo} RoleInfo instance
             */
            RoleInfo.create = function create(properties) {
                return new RoleInfo(properties);
            };

            /**
             * Encodes the specified RoleInfo message. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.RoleInfo.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {msg.PbMsgRetRoleIdsByUserIds.IRoleInfo} message RoleInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoleInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
                return writer;
            };

            /**
             * Encodes the specified RoleInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.RoleInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {msg.PbMsgRetRoleIdsByUserIds.IRoleInfo} message RoleInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RoleInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RoleInfo message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetRoleIdsByUserIds.RoleInfo} RoleInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoleInfo.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roleId = reader.fixed64();
                        break;
                    case 2:
                        message.userId = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("roleId"))
                    throw $util.ProtocolError("missing required 'roleId'", { instance: message });
                if (!message.hasOwnProperty("userId"))
                    throw $util.ProtocolError("missing required 'userId'", { instance: message });
                return message;
            };

            /**
             * Decodes a RoleInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetRoleIdsByUserIds.RoleInfo} RoleInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RoleInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RoleInfo message.
             * @function verify
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RoleInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
                if (!$util.isString(message.userId))
                    return "userId: string expected";
                return null;
            };

            /**
             * Creates a RoleInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetRoleIdsByUserIds.RoleInfo} RoleInfo
             */
            RoleInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo)
                    return object;
                var message = new $root.msg.PbMsgRetRoleIdsByUserIds.RoleInfo();
                if (object.roleId != null)
                    if ($util.Long)
                        (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                    else if (typeof object.roleId === "string")
                        message.roleId = parseInt(object.roleId, 10);
                    else if (typeof object.roleId === "number")
                        message.roleId = object.roleId;
                    else if (typeof object.roleId === "object")
                        message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
                if (object.userId != null)
                    message.userId = String(object.userId);
                return message;
            };

            /**
             * Creates a plain object from a RoleInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @static
             * @param {msg.PbMsgRetRoleIdsByUserIds.RoleInfo} message RoleInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RoleInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roleId = options.longs === String ? "0" : 0;
                    object.userId = "";
                }
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    if (typeof message.roleId === "number")
                        object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                    else
                        object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
                if (message.userId != null && message.hasOwnProperty("userId"))
                    object.userId = message.userId;
                return object;
            };

            /**
             * Converts this RoleInfo to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetRoleIdsByUserIds.RoleInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RoleInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RoleInfo;
        })();

        return PbMsgRetRoleIdsByUserIds;
    })();

    msg.PbMsgMailInfo = (function() {

        /**
         * Properties of a PbMsgMailInfo.
         * @memberof msg
         * @interface IPbMsgMailInfo
         * @property {number|Long} mailId PbMsgMailInfo mailId
         * @property {string} subiect PbMsgMailInfo subiect
         * @property {number|Long} addresserRoleId PbMsgMailInfo addresserRoleId
         * @property {string} addresser PbMsgMailInfo addresser
         * @property {string} content PbMsgMailInfo content
         * @property {Array.<msg.PbMsgMailInfo.IPbMsgAppendix>|null} [appendixList] PbMsgMailInfo appendixList
         * @property {number} recvFlag PbMsgMailInfo recvFlag
         * @property {number} readFlag PbMsgMailInfo readFlag
         * @property {number} date PbMsgMailInfo date
         */

        /**
         * Constructs a new PbMsgMailInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgMailInfo.
         * @implements IPbMsgMailInfo
         * @constructor
         * @param {msg.IPbMsgMailInfo=} [properties] Properties to set
         */
        function PbMsgMailInfo(properties) {
            this.appendixList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgMailInfo mailId.
         * @member {number|Long} mailId
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgMailInfo subiect.
         * @member {string} subiect
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.subiect = "";

        /**
         * PbMsgMailInfo addresserRoleId.
         * @member {number|Long} addresserRoleId
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.addresserRoleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgMailInfo addresser.
         * @member {string} addresser
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.addresser = "";

        /**
         * PbMsgMailInfo content.
         * @member {string} content
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.content = "";

        /**
         * PbMsgMailInfo appendixList.
         * @member {Array.<msg.PbMsgMailInfo.IPbMsgAppendix>} appendixList
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.appendixList = $util.emptyArray;

        /**
         * PbMsgMailInfo recvFlag.
         * @member {number} recvFlag
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.recvFlag = 0;

        /**
         * PbMsgMailInfo readFlag.
         * @member {number} readFlag
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.readFlag = 0;

        /**
         * PbMsgMailInfo date.
         * @member {number} date
         * @memberof msg.PbMsgMailInfo
         * @instance
         */
        PbMsgMailInfo.prototype.date = 0;

        /**
         * Creates a new PbMsgMailInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {msg.IPbMsgMailInfo=} [properties] Properties to set
         * @returns {msg.PbMsgMailInfo} PbMsgMailInfo instance
         */
        PbMsgMailInfo.create = function create(properties) {
            return new PbMsgMailInfo(properties);
        };

        /**
         * Encodes the specified PbMsgMailInfo message. Does not implicitly {@link msg.PbMsgMailInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {msg.IPbMsgMailInfo} message PbMsgMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.mailId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subiect);
            writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.addresserRoleId);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.addresser);
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.content);
            if (message.appendixList != null && message.appendixList.length)
                for (var i = 0; i < message.appendixList.length; ++i)
                    $root.msg.PbMsgMailInfo.PbMsgAppendix.encode(message.appendixList[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            writer.uint32(/* id 7, wireType 0 =*/56).int32(message.recvFlag);
            writer.uint32(/* id 8, wireType 0 =*/64).int32(message.readFlag);
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.date);
            return writer;
        };

        /**
         * Encodes the specified PbMsgMailInfo message, length delimited. Does not implicitly {@link msg.PbMsgMailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {msg.IPbMsgMailInfo} message PbMsgMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgMailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgMailInfo} PbMsgMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMailInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgMailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.fixed64();
                    break;
                case 2:
                    message.subiect = reader.string();
                    break;
                case 3:
                    message.addresserRoleId = reader.fixed64();
                    break;
                case 4:
                    message.addresser = reader.string();
                    break;
                case 5:
                    message.content = reader.string();
                    break;
                case 6:
                    if (!(message.appendixList && message.appendixList.length))
                        message.appendixList = [];
                    message.appendixList.push($root.msg.PbMsgMailInfo.PbMsgAppendix.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.recvFlag = reader.int32();
                    break;
                case 8:
                    message.readFlag = reader.int32();
                    break;
                case 9:
                    message.date = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            if (!message.hasOwnProperty("subiect"))
                throw $util.ProtocolError("missing required 'subiect'", { instance: message });
            if (!message.hasOwnProperty("addresserRoleId"))
                throw $util.ProtocolError("missing required 'addresserRoleId'", { instance: message });
            if (!message.hasOwnProperty("addresser"))
                throw $util.ProtocolError("missing required 'addresser'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("recvFlag"))
                throw $util.ProtocolError("missing required 'recvFlag'", { instance: message });
            if (!message.hasOwnProperty("readFlag"))
                throw $util.ProtocolError("missing required 'readFlag'", { instance: message });
            if (!message.hasOwnProperty("date"))
                throw $util.ProtocolError("missing required 'date'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgMailInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgMailInfo} PbMsgMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMailInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgMailInfo message.
         * @function verify
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgMailInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
                return "mailId: integer|Long expected";
            if (!$util.isString(message.subiect))
                return "subiect: string expected";
            if (!$util.isInteger(message.addresserRoleId) && !(message.addresserRoleId && $util.isInteger(message.addresserRoleId.low) && $util.isInteger(message.addresserRoleId.high)))
                return "addresserRoleId: integer|Long expected";
            if (!$util.isString(message.addresser))
                return "addresser: string expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (message.appendixList != null && message.hasOwnProperty("appendixList")) {
                if (!Array.isArray(message.appendixList))
                    return "appendixList: array expected";
                for (var i = 0; i < message.appendixList.length; ++i) {
                    var error = $root.msg.PbMsgMailInfo.PbMsgAppendix.verify(message.appendixList[i]);
                    if (error)
                        return "appendixList." + error;
                }
            }
            if (!$util.isInteger(message.recvFlag))
                return "recvFlag: integer expected";
            if (!$util.isInteger(message.readFlag))
                return "readFlag: integer expected";
            if (!$util.isInteger(message.date))
                return "date: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgMailInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgMailInfo} PbMsgMailInfo
         */
        PbMsgMailInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgMailInfo)
                return object;
            var message = new $root.msg.PbMsgMailInfo();
            if (object.mailId != null)
                if ($util.Long)
                    (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
                else if (typeof object.mailId === "string")
                    message.mailId = parseInt(object.mailId, 10);
                else if (typeof object.mailId === "number")
                    message.mailId = object.mailId;
                else if (typeof object.mailId === "object")
                    message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
            if (object.subiect != null)
                message.subiect = String(object.subiect);
            if (object.addresserRoleId != null)
                if ($util.Long)
                    (message.addresserRoleId = $util.Long.fromValue(object.addresserRoleId)).unsigned = false;
                else if (typeof object.addresserRoleId === "string")
                    message.addresserRoleId = parseInt(object.addresserRoleId, 10);
                else if (typeof object.addresserRoleId === "number")
                    message.addresserRoleId = object.addresserRoleId;
                else if (typeof object.addresserRoleId === "object")
                    message.addresserRoleId = new $util.LongBits(object.addresserRoleId.low >>> 0, object.addresserRoleId.high >>> 0).toNumber();
            if (object.addresser != null)
                message.addresser = String(object.addresser);
            if (object.content != null)
                message.content = String(object.content);
            if (object.appendixList) {
                if (!Array.isArray(object.appendixList))
                    throw TypeError(".msg.PbMsgMailInfo.appendixList: array expected");
                message.appendixList = [];
                for (var i = 0; i < object.appendixList.length; ++i) {
                    if (typeof object.appendixList[i] !== "object")
                        throw TypeError(".msg.PbMsgMailInfo.appendixList: object expected");
                    message.appendixList[i] = $root.msg.PbMsgMailInfo.PbMsgAppendix.fromObject(object.appendixList[i]);
                }
            }
            if (object.recvFlag != null)
                message.recvFlag = object.recvFlag | 0;
            if (object.readFlag != null)
                message.readFlag = object.readFlag | 0;
            if (object.date != null)
                message.date = object.date | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgMailInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgMailInfo
         * @static
         * @param {msg.PbMsgMailInfo} message PbMsgMailInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgMailInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.appendixList = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mailId = options.longs === String ? "0" : 0;
                object.subiect = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.addresserRoleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.addresserRoleId = options.longs === String ? "0" : 0;
                object.addresser = "";
                object.content = "";
                object.recvFlag = 0;
                object.readFlag = 0;
                object.date = 0;
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (typeof message.mailId === "number")
                    object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
                else
                    object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
            if (message.subiect != null && message.hasOwnProperty("subiect"))
                object.subiect = message.subiect;
            if (message.addresserRoleId != null && message.hasOwnProperty("addresserRoleId"))
                if (typeof message.addresserRoleId === "number")
                    object.addresserRoleId = options.longs === String ? String(message.addresserRoleId) : message.addresserRoleId;
                else
                    object.addresserRoleId = options.longs === String ? $util.Long.prototype.toString.call(message.addresserRoleId) : options.longs === Number ? new $util.LongBits(message.addresserRoleId.low >>> 0, message.addresserRoleId.high >>> 0).toNumber() : message.addresserRoleId;
            if (message.addresser != null && message.hasOwnProperty("addresser"))
                object.addresser = message.addresser;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.appendixList && message.appendixList.length) {
                object.appendixList = [];
                for (var j = 0; j < message.appendixList.length; ++j)
                    object.appendixList[j] = $root.msg.PbMsgMailInfo.PbMsgAppendix.toObject(message.appendixList[j], options);
            }
            if (message.recvFlag != null && message.hasOwnProperty("recvFlag"))
                object.recvFlag = message.recvFlag;
            if (message.readFlag != null && message.hasOwnProperty("readFlag"))
                object.readFlag = message.readFlag;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            return object;
        };

        /**
         * Converts this PbMsgMailInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgMailInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgMailInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgMailInfo.MSG
         * @enum {string}
         * @property {number} ID=701 ID value
         */
        PbMsgMailInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[701] = "ID"] = 701;
            return values;
        })();

        PbMsgMailInfo.PbMsgAppendix = (function() {

            /**
             * Properties of a PbMsgAppendix.
             * @memberof msg.PbMsgMailInfo
             * @interface IPbMsgAppendix
             * @property {number} itemId PbMsgAppendix itemId
             * @property {number} count PbMsgAppendix count
             * @property {number|Long} uId PbMsgAppendix uId
             */

            /**
             * Constructs a new PbMsgAppendix.
             * @memberof msg.PbMsgMailInfo
             * @classdesc Represents a PbMsgAppendix.
             * @implements IPbMsgAppendix
             * @constructor
             * @param {msg.PbMsgMailInfo.IPbMsgAppendix=} [properties] Properties to set
             */
            function PbMsgAppendix(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * PbMsgAppendix itemId.
             * @member {number} itemId
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @instance
             */
            PbMsgAppendix.prototype.itemId = 0;

            /**
             * PbMsgAppendix count.
             * @member {number} count
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @instance
             */
            PbMsgAppendix.prototype.count = 0;

            /**
             * PbMsgAppendix uId.
             * @member {number|Long} uId
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @instance
             */
            PbMsgAppendix.prototype.uId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * Creates a new PbMsgAppendix instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {msg.PbMsgMailInfo.IPbMsgAppendix=} [properties] Properties to set
             * @returns {msg.PbMsgMailInfo.PbMsgAppendix} PbMsgAppendix instance
             */
            PbMsgAppendix.create = function create(properties) {
                return new PbMsgAppendix(properties);
            };

            /**
             * Encodes the specified PbMsgAppendix message. Does not implicitly {@link msg.PbMsgMailInfo.PbMsgAppendix.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {msg.PbMsgMailInfo.IPbMsgAppendix} message PbMsgAppendix message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PbMsgAppendix.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
                writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.uId);
                return writer;
            };

            /**
             * Encodes the specified PbMsgAppendix message, length delimited. Does not implicitly {@link msg.PbMsgMailInfo.PbMsgAppendix.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {msg.PbMsgMailInfo.IPbMsgAppendix} message PbMsgAppendix message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            PbMsgAppendix.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a PbMsgAppendix message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgMailInfo.PbMsgAppendix} PbMsgAppendix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PbMsgAppendix.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgMailInfo.PbMsgAppendix();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.itemId = reader.int32();
                        break;
                    case 2:
                        message.count = reader.int32();
                        break;
                    case 3:
                        message.uId = reader.fixed64();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("itemId"))
                    throw $util.ProtocolError("missing required 'itemId'", { instance: message });
                if (!message.hasOwnProperty("count"))
                    throw $util.ProtocolError("missing required 'count'", { instance: message });
                if (!message.hasOwnProperty("uId"))
                    throw $util.ProtocolError("missing required 'uId'", { instance: message });
                return message;
            };

            /**
             * Decodes a PbMsgAppendix message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgMailInfo.PbMsgAppendix} PbMsgAppendix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            PbMsgAppendix.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a PbMsgAppendix message.
             * @function verify
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            PbMsgAppendix.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.itemId))
                    return "itemId: integer expected";
                if (!$util.isInteger(message.count))
                    return "count: integer expected";
                if (!$util.isInteger(message.uId) && !(message.uId && $util.isInteger(message.uId.low) && $util.isInteger(message.uId.high)))
                    return "uId: integer|Long expected";
                return null;
            };

            /**
             * Creates a PbMsgAppendix message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgMailInfo.PbMsgAppendix} PbMsgAppendix
             */
            PbMsgAppendix.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgMailInfo.PbMsgAppendix)
                    return object;
                var message = new $root.msg.PbMsgMailInfo.PbMsgAppendix();
                if (object.itemId != null)
                    message.itemId = object.itemId | 0;
                if (object.count != null)
                    message.count = object.count | 0;
                if (object.uId != null)
                    if ($util.Long)
                        (message.uId = $util.Long.fromValue(object.uId)).unsigned = false;
                    else if (typeof object.uId === "string")
                        message.uId = parseInt(object.uId, 10);
                    else if (typeof object.uId === "number")
                        message.uId = object.uId;
                    else if (typeof object.uId === "object")
                        message.uId = new $util.LongBits(object.uId.low >>> 0, object.uId.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a PbMsgAppendix message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @static
             * @param {msg.PbMsgMailInfo.PbMsgAppendix} message PbMsgAppendix
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            PbMsgAppendix.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.itemId = 0;
                    object.count = 0;
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.uId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.uId = options.longs === String ? "0" : 0;
                }
                if (message.itemId != null && message.hasOwnProperty("itemId"))
                    object.itemId = message.itemId;
                if (message.count != null && message.hasOwnProperty("count"))
                    object.count = message.count;
                if (message.uId != null && message.hasOwnProperty("uId"))
                    if (typeof message.uId === "number")
                        object.uId = options.longs === String ? String(message.uId) : message.uId;
                    else
                        object.uId = options.longs === String ? $util.Long.prototype.toString.call(message.uId) : options.longs === Number ? new $util.LongBits(message.uId.low >>> 0, message.uId.high >>> 0).toNumber() : message.uId;
                return object;
            };

            /**
             * Converts this PbMsgAppendix to JSON.
             * @function toJSON
             * @memberof msg.PbMsgMailInfo.PbMsgAppendix
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            PbMsgAppendix.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return PbMsgAppendix;
        })();

        return PbMsgMailInfo;
    })();

    msg.PbMsgUpdateMailCountToClient = (function() {

        /**
         * Properties of a PbMsgUpdateMailCountToClient.
         * @memberof msg
         * @interface IPbMsgUpdateMailCountToClient
         * @property {number} count PbMsgUpdateMailCountToClient count
         * @property {number} unreadCount PbMsgUpdateMailCountToClient unreadCount
         */

        /**
         * Constructs a new PbMsgUpdateMailCountToClient.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateMailCountToClient.
         * @implements IPbMsgUpdateMailCountToClient
         * @constructor
         * @param {msg.IPbMsgUpdateMailCountToClient=} [properties] Properties to set
         */
        function PbMsgUpdateMailCountToClient(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateMailCountToClient count.
         * @member {number} count
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @instance
         */
        PbMsgUpdateMailCountToClient.prototype.count = 0;

        /**
         * PbMsgUpdateMailCountToClient unreadCount.
         * @member {number} unreadCount
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @instance
         */
        PbMsgUpdateMailCountToClient.prototype.unreadCount = 0;

        /**
         * Creates a new PbMsgUpdateMailCountToClient instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {msg.IPbMsgUpdateMailCountToClient=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateMailCountToClient} PbMsgUpdateMailCountToClient instance
         */
        PbMsgUpdateMailCountToClient.create = function create(properties) {
            return new PbMsgUpdateMailCountToClient(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateMailCountToClient message. Does not implicitly {@link msg.PbMsgUpdateMailCountToClient.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {msg.IPbMsgUpdateMailCountToClient} message PbMsgUpdateMailCountToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateMailCountToClient.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.count);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.unreadCount);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateMailCountToClient message, length delimited. Does not implicitly {@link msg.PbMsgUpdateMailCountToClient.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {msg.IPbMsgUpdateMailCountToClient} message PbMsgUpdateMailCountToClient message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateMailCountToClient.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateMailCountToClient message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateMailCountToClient} PbMsgUpdateMailCountToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateMailCountToClient.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateMailCountToClient();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.count = reader.int32();
                    break;
                case 2:
                    message.unreadCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("count"))
                throw $util.ProtocolError("missing required 'count'", { instance: message });
            if (!message.hasOwnProperty("unreadCount"))
                throw $util.ProtocolError("missing required 'unreadCount'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateMailCountToClient message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateMailCountToClient} PbMsgUpdateMailCountToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateMailCountToClient.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateMailCountToClient message.
         * @function verify
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateMailCountToClient.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.count))
                return "count: integer expected";
            if (!$util.isInteger(message.unreadCount))
                return "unreadCount: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateMailCountToClient message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateMailCountToClient} PbMsgUpdateMailCountToClient
         */
        PbMsgUpdateMailCountToClient.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateMailCountToClient)
                return object;
            var message = new $root.msg.PbMsgUpdateMailCountToClient();
            if (object.count != null)
                message.count = object.count | 0;
            if (object.unreadCount != null)
                message.unreadCount = object.unreadCount | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateMailCountToClient message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @static
         * @param {msg.PbMsgUpdateMailCountToClient} message PbMsgUpdateMailCountToClient
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateMailCountToClient.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.count = 0;
                object.unreadCount = 0;
            }
            if (message.count != null && message.hasOwnProperty("count"))
                object.count = message.count;
            if (message.unreadCount != null && message.hasOwnProperty("unreadCount"))
                object.unreadCount = message.unreadCount;
            return object;
        };

        /**
         * Converts this PbMsgUpdateMailCountToClient to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateMailCountToClient
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateMailCountToClient.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateMailCountToClient.MSG
         * @enum {string}
         * @property {number} ID=702 ID value
         */
        PbMsgUpdateMailCountToClient.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[702] = "ID"] = 702;
            return values;
        })();

        return PbMsgUpdateMailCountToClient;
    })();

    msg.PbMsgAbstractMailInfo = (function() {

        /**
         * Properties of a PbMsgAbstractMailInfo.
         * @memberof msg
         * @interface IPbMsgAbstractMailInfo
         * @property {number|Long} mailId PbMsgAbstractMailInfo mailId
         * @property {string} subiect PbMsgAbstractMailInfo subiect
         * @property {string} addresser PbMsgAbstractMailInfo addresser
         * @property {number} date PbMsgAbstractMailInfo date
         * @property {number} recvFlag PbMsgAbstractMailInfo recvFlag
         * @property {number} readFlag PbMsgAbstractMailInfo readFlag
         */

        /**
         * Constructs a new PbMsgAbstractMailInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgAbstractMailInfo.
         * @implements IPbMsgAbstractMailInfo
         * @constructor
         * @param {msg.IPbMsgAbstractMailInfo=} [properties] Properties to set
         */
        function PbMsgAbstractMailInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgAbstractMailInfo mailId.
         * @member {number|Long} mailId
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgAbstractMailInfo subiect.
         * @member {string} subiect
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.subiect = "";

        /**
         * PbMsgAbstractMailInfo addresser.
         * @member {string} addresser
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.addresser = "";

        /**
         * PbMsgAbstractMailInfo date.
         * @member {number} date
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.date = 0;

        /**
         * PbMsgAbstractMailInfo recvFlag.
         * @member {number} recvFlag
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.recvFlag = 0;

        /**
         * PbMsgAbstractMailInfo readFlag.
         * @member {number} readFlag
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         */
        PbMsgAbstractMailInfo.prototype.readFlag = 0;

        /**
         * Creates a new PbMsgAbstractMailInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {msg.IPbMsgAbstractMailInfo=} [properties] Properties to set
         * @returns {msg.PbMsgAbstractMailInfo} PbMsgAbstractMailInfo instance
         */
        PbMsgAbstractMailInfo.create = function create(properties) {
            return new PbMsgAbstractMailInfo(properties);
        };

        /**
         * Encodes the specified PbMsgAbstractMailInfo message. Does not implicitly {@link msg.PbMsgAbstractMailInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {msg.IPbMsgAbstractMailInfo} message PbMsgAbstractMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgAbstractMailInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.mailId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.subiect);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.addresser);
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.date);
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.recvFlag);
            writer.uint32(/* id 6, wireType 0 =*/48).int32(message.readFlag);
            return writer;
        };

        /**
         * Encodes the specified PbMsgAbstractMailInfo message, length delimited. Does not implicitly {@link msg.PbMsgAbstractMailInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {msg.IPbMsgAbstractMailInfo} message PbMsgAbstractMailInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgAbstractMailInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgAbstractMailInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgAbstractMailInfo} PbMsgAbstractMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgAbstractMailInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgAbstractMailInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.fixed64();
                    break;
                case 2:
                    message.subiect = reader.string();
                    break;
                case 3:
                    message.addresser = reader.string();
                    break;
                case 4:
                    message.date = reader.int32();
                    break;
                case 5:
                    message.recvFlag = reader.int32();
                    break;
                case 6:
                    message.readFlag = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            if (!message.hasOwnProperty("subiect"))
                throw $util.ProtocolError("missing required 'subiect'", { instance: message });
            if (!message.hasOwnProperty("addresser"))
                throw $util.ProtocolError("missing required 'addresser'", { instance: message });
            if (!message.hasOwnProperty("date"))
                throw $util.ProtocolError("missing required 'date'", { instance: message });
            if (!message.hasOwnProperty("recvFlag"))
                throw $util.ProtocolError("missing required 'recvFlag'", { instance: message });
            if (!message.hasOwnProperty("readFlag"))
                throw $util.ProtocolError("missing required 'readFlag'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgAbstractMailInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgAbstractMailInfo} PbMsgAbstractMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgAbstractMailInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgAbstractMailInfo message.
         * @function verify
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgAbstractMailInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
                return "mailId: integer|Long expected";
            if (!$util.isString(message.subiect))
                return "subiect: string expected";
            if (!$util.isString(message.addresser))
                return "addresser: string expected";
            if (!$util.isInteger(message.date))
                return "date: integer expected";
            if (!$util.isInteger(message.recvFlag))
                return "recvFlag: integer expected";
            if (!$util.isInteger(message.readFlag))
                return "readFlag: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgAbstractMailInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgAbstractMailInfo} PbMsgAbstractMailInfo
         */
        PbMsgAbstractMailInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgAbstractMailInfo)
                return object;
            var message = new $root.msg.PbMsgAbstractMailInfo();
            if (object.mailId != null)
                if ($util.Long)
                    (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
                else if (typeof object.mailId === "string")
                    message.mailId = parseInt(object.mailId, 10);
                else if (typeof object.mailId === "number")
                    message.mailId = object.mailId;
                else if (typeof object.mailId === "object")
                    message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
            if (object.subiect != null)
                message.subiect = String(object.subiect);
            if (object.addresser != null)
                message.addresser = String(object.addresser);
            if (object.date != null)
                message.date = object.date | 0;
            if (object.recvFlag != null)
                message.recvFlag = object.recvFlag | 0;
            if (object.readFlag != null)
                message.readFlag = object.readFlag | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgAbstractMailInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgAbstractMailInfo
         * @static
         * @param {msg.PbMsgAbstractMailInfo} message PbMsgAbstractMailInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgAbstractMailInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mailId = options.longs === String ? "0" : 0;
                object.subiect = "";
                object.addresser = "";
                object.date = 0;
                object.recvFlag = 0;
                object.readFlag = 0;
            }
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (typeof message.mailId === "number")
                    object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
                else
                    object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
            if (message.subiect != null && message.hasOwnProperty("subiect"))
                object.subiect = message.subiect;
            if (message.addresser != null && message.hasOwnProperty("addresser"))
                object.addresser = message.addresser;
            if (message.date != null && message.hasOwnProperty("date"))
                object.date = message.date;
            if (message.recvFlag != null && message.hasOwnProperty("recvFlag"))
                object.recvFlag = message.recvFlag;
            if (message.readFlag != null && message.hasOwnProperty("readFlag"))
                object.readFlag = message.readFlag;
            return object;
        };

        /**
         * Converts this PbMsgAbstractMailInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgAbstractMailInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgAbstractMailInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PbMsgAbstractMailInfo;
    })();

    msg.PbMsgGetRoleMailInfoList = (function() {

        /**
         * Properties of a PbMsgGetRoleMailInfoList.
         * @memberof msg
         * @interface IPbMsgGetRoleMailInfoList
         * @property {number} flag PbMsgGetRoleMailInfoList flag
         * @property {number} index PbMsgGetRoleMailInfoList index
         */

        /**
         * Constructs a new PbMsgGetRoleMailInfoList.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRoleMailInfoList.
         * @implements IPbMsgGetRoleMailInfoList
         * @constructor
         * @param {msg.IPbMsgGetRoleMailInfoList=} [properties] Properties to set
         */
        function PbMsgGetRoleMailInfoList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRoleMailInfoList flag.
         * @member {number} flag
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @instance
         */
        PbMsgGetRoleMailInfoList.prototype.flag = 0;

        /**
         * PbMsgGetRoleMailInfoList index.
         * @member {number} index
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @instance
         */
        PbMsgGetRoleMailInfoList.prototype.index = 0;

        /**
         * Creates a new PbMsgGetRoleMailInfoList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgGetRoleMailInfoList=} [properties] Properties to set
         * @returns {msg.PbMsgGetRoleMailInfoList} PbMsgGetRoleMailInfoList instance
         */
        PbMsgGetRoleMailInfoList.create = function create(properties) {
            return new PbMsgGetRoleMailInfoList(properties);
        };

        /**
         * Encodes the specified PbMsgGetRoleMailInfoList message. Does not implicitly {@link msg.PbMsgGetRoleMailInfoList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgGetRoleMailInfoList} message PbMsgGetRoleMailInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleMailInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.index);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRoleMailInfoList message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleMailInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgGetRoleMailInfoList} message PbMsgGetRoleMailInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRoleMailInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRoleMailInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRoleMailInfoList} PbMsgGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleMailInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRoleMailInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flag = reader.int32();
                    break;
                case 2:
                    message.index = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("flag"))
                throw $util.ProtocolError("missing required 'flag'", { instance: message });
            if (!message.hasOwnProperty("index"))
                throw $util.ProtocolError("missing required 'index'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRoleMailInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRoleMailInfoList} PbMsgGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRoleMailInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRoleMailInfoList message.
         * @function verify
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRoleMailInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.flag))
                return "flag: integer expected";
            if (!$util.isInteger(message.index))
                return "index: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetRoleMailInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRoleMailInfoList} PbMsgGetRoleMailInfoList
         */
        PbMsgGetRoleMailInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRoleMailInfoList)
                return object;
            var message = new $root.msg.PbMsgGetRoleMailInfoList();
            if (object.flag != null)
                message.flag = object.flag | 0;
            if (object.index != null)
                message.index = object.index | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRoleMailInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @static
         * @param {msg.PbMsgGetRoleMailInfoList} message PbMsgGetRoleMailInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRoleMailInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.flag = 0;
                object.index = 0;
            }
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.index != null && message.hasOwnProperty("index"))
                object.index = message.index;
            return object;
        };

        /**
         * Converts this PbMsgGetRoleMailInfoList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRoleMailInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRoleMailInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRoleMailInfoList.MSG
         * @enum {string}
         * @property {number} ID=5001 ID value
         */
        PbMsgGetRoleMailInfoList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5001] = "ID"] = 5001;
            return values;
        })();

        return PbMsgGetRoleMailInfoList;
    })();

    msg.PbMsgRetGetRoleMailInfoList = (function() {

        /**
         * Properties of a PbMsgRetGetRoleMailInfoList.
         * @memberof msg
         * @interface IPbMsgRetGetRoleMailInfoList
         * @property {number} retCode PbMsgRetGetRoleMailInfoList retCode
         * @property {Array.<msg.IPbMsgAbstractMailInfo>|null} [abstractMailList] PbMsgRetGetRoleMailInfoList abstractMailList
         */

        /**
         * Constructs a new PbMsgRetGetRoleMailInfoList.
         * @memberof msg
         * @classdesc Represents a PbMsgRetGetRoleMailInfoList.
         * @implements IPbMsgRetGetRoleMailInfoList
         * @constructor
         * @param {msg.IPbMsgRetGetRoleMailInfoList=} [properties] Properties to set
         */
        function PbMsgRetGetRoleMailInfoList(properties) {
            this.abstractMailList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetGetRoleMailInfoList retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @instance
         */
        PbMsgRetGetRoleMailInfoList.prototype.retCode = 0;

        /**
         * PbMsgRetGetRoleMailInfoList abstractMailList.
         * @member {Array.<msg.IPbMsgAbstractMailInfo>} abstractMailList
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @instance
         */
        PbMsgRetGetRoleMailInfoList.prototype.abstractMailList = $util.emptyArray;

        /**
         * Creates a new PbMsgRetGetRoleMailInfoList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgRetGetRoleMailInfoList=} [properties] Properties to set
         * @returns {msg.PbMsgRetGetRoleMailInfoList} PbMsgRetGetRoleMailInfoList instance
         */
        PbMsgRetGetRoleMailInfoList.create = function create(properties) {
            return new PbMsgRetGetRoleMailInfoList(properties);
        };

        /**
         * Encodes the specified PbMsgRetGetRoleMailInfoList message. Does not implicitly {@link msg.PbMsgRetGetRoleMailInfoList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgRetGetRoleMailInfoList} message PbMsgRetGetRoleMailInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetRoleMailInfoList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.abstractMailList != null && message.abstractMailList.length)
                for (var i = 0; i < message.abstractMailList.length; ++i)
                    $root.msg.PbMsgAbstractMailInfo.encode(message.abstractMailList[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetGetRoleMailInfoList message, length delimited. Does not implicitly {@link msg.PbMsgRetGetRoleMailInfoList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {msg.IPbMsgRetGetRoleMailInfoList} message PbMsgRetGetRoleMailInfoList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetGetRoleMailInfoList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetGetRoleMailInfoList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetGetRoleMailInfoList} PbMsgRetGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetRoleMailInfoList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetGetRoleMailInfoList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    if (!(message.abstractMailList && message.abstractMailList.length))
                        message.abstractMailList = [];
                    message.abstractMailList.push($root.msg.PbMsgAbstractMailInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetGetRoleMailInfoList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetGetRoleMailInfoList} PbMsgRetGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetGetRoleMailInfoList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetGetRoleMailInfoList message.
         * @function verify
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetGetRoleMailInfoList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.abstractMailList != null && message.hasOwnProperty("abstractMailList")) {
                if (!Array.isArray(message.abstractMailList))
                    return "abstractMailList: array expected";
                for (var i = 0; i < message.abstractMailList.length; ++i) {
                    var error = $root.msg.PbMsgAbstractMailInfo.verify(message.abstractMailList[i]);
                    if (error)
                        return "abstractMailList." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetGetRoleMailInfoList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetGetRoleMailInfoList} PbMsgRetGetRoleMailInfoList
         */
        PbMsgRetGetRoleMailInfoList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetGetRoleMailInfoList)
                return object;
            var message = new $root.msg.PbMsgRetGetRoleMailInfoList();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.abstractMailList) {
                if (!Array.isArray(object.abstractMailList))
                    throw TypeError(".msg.PbMsgRetGetRoleMailInfoList.abstractMailList: array expected");
                message.abstractMailList = [];
                for (var i = 0; i < object.abstractMailList.length; ++i) {
                    if (typeof object.abstractMailList[i] !== "object")
                        throw TypeError(".msg.PbMsgRetGetRoleMailInfoList.abstractMailList: object expected");
                    message.abstractMailList[i] = $root.msg.PbMsgAbstractMailInfo.fromObject(object.abstractMailList[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetGetRoleMailInfoList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @static
         * @param {msg.PbMsgRetGetRoleMailInfoList} message PbMsgRetGetRoleMailInfoList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetGetRoleMailInfoList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.abstractMailList = [];
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.abstractMailList && message.abstractMailList.length) {
                object.abstractMailList = [];
                for (var j = 0; j < message.abstractMailList.length; ++j)
                    object.abstractMailList[j] = $root.msg.PbMsgAbstractMailInfo.toObject(message.abstractMailList[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetGetRoleMailInfoList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetGetRoleMailInfoList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetGetRoleMailInfoList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetGetRoleMailInfoList.MSG
         * @enum {string}
         * @property {number} ID=6001 ID value
         */
        PbMsgRetGetRoleMailInfoList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6001] = "ID"] = 6001;
            return values;
        })();

        return PbMsgRetGetRoleMailInfoList;
    })();

    msg.PbMsgReadMail = (function() {

        /**
         * Properties of a PbMsgReadMail.
         * @memberof msg
         * @interface IPbMsgReadMail
         * @property {number|Long} mailId PbMsgReadMail mailId
         */

        /**
         * Constructs a new PbMsgReadMail.
         * @memberof msg
         * @classdesc Represents a PbMsgReadMail.
         * @implements IPbMsgReadMail
         * @constructor
         * @param {msg.IPbMsgReadMail=} [properties] Properties to set
         */
        function PbMsgReadMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgReadMail mailId.
         * @member {number|Long} mailId
         * @memberof msg.PbMsgReadMail
         * @instance
         */
        PbMsgReadMail.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PbMsgReadMail instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {msg.IPbMsgReadMail=} [properties] Properties to set
         * @returns {msg.PbMsgReadMail} PbMsgReadMail instance
         */
        PbMsgReadMail.create = function create(properties) {
            return new PbMsgReadMail(properties);
        };

        /**
         * Encodes the specified PbMsgReadMail message. Does not implicitly {@link msg.PbMsgReadMail.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {msg.IPbMsgReadMail} message PbMsgReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgReadMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgReadMail message, length delimited. Does not implicitly {@link msg.PbMsgReadMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {msg.IPbMsgReadMail} message PbMsgReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgReadMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgReadMail message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgReadMail} PbMsgReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgReadMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgReadMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgReadMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgReadMail} PbMsgReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgReadMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgReadMail message.
         * @function verify
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgReadMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
                return "mailId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PbMsgReadMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgReadMail} PbMsgReadMail
         */
        PbMsgReadMail.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgReadMail)
                return object;
            var message = new $root.msg.PbMsgReadMail();
            if (object.mailId != null)
                if ($util.Long)
                    (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
                else if (typeof object.mailId === "string")
                    message.mailId = parseInt(object.mailId, 10);
                else if (typeof object.mailId === "number")
                    message.mailId = object.mailId;
                else if (typeof object.mailId === "object")
                    message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbMsgReadMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgReadMail
         * @static
         * @param {msg.PbMsgReadMail} message PbMsgReadMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgReadMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mailId = options.longs === String ? "0" : 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (typeof message.mailId === "number")
                    object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
                else
                    object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
            return object;
        };

        /**
         * Converts this PbMsgReadMail to JSON.
         * @function toJSON
         * @memberof msg.PbMsgReadMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgReadMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgReadMail.MSG
         * @enum {string}
         * @property {number} ID=5002 ID value
         */
        PbMsgReadMail.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5002] = "ID"] = 5002;
            return values;
        })();

        return PbMsgReadMail;
    })();

    msg.PbMsgRetReadMail = (function() {

        /**
         * Properties of a PbMsgRetReadMail.
         * @memberof msg
         * @interface IPbMsgRetReadMail
         * @property {number} retCode PbMsgRetReadMail retCode
         * @property {msg.IPbMsgMailInfo|null} [mailInfo] PbMsgRetReadMail mailInfo
         */

        /**
         * Constructs a new PbMsgRetReadMail.
         * @memberof msg
         * @classdesc Represents a PbMsgRetReadMail.
         * @implements IPbMsgRetReadMail
         * @constructor
         * @param {msg.IPbMsgRetReadMail=} [properties] Properties to set
         */
        function PbMsgRetReadMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetReadMail retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetReadMail
         * @instance
         */
        PbMsgRetReadMail.prototype.retCode = 0;

        /**
         * PbMsgRetReadMail mailInfo.
         * @member {msg.IPbMsgMailInfo|null|undefined} mailInfo
         * @memberof msg.PbMsgRetReadMail
         * @instance
         */
        PbMsgRetReadMail.prototype.mailInfo = null;

        /**
         * Creates a new PbMsgRetReadMail instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {msg.IPbMsgRetReadMail=} [properties] Properties to set
         * @returns {msg.PbMsgRetReadMail} PbMsgRetReadMail instance
         */
        PbMsgRetReadMail.create = function create(properties) {
            return new PbMsgRetReadMail(properties);
        };

        /**
         * Encodes the specified PbMsgRetReadMail message. Does not implicitly {@link msg.PbMsgRetReadMail.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {msg.IPbMsgRetReadMail} message PbMsgRetReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetReadMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.mailInfo != null && message.hasOwnProperty("mailInfo"))
                $root.msg.PbMsgMailInfo.encode(message.mailInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetReadMail message, length delimited. Does not implicitly {@link msg.PbMsgRetReadMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {msg.IPbMsgRetReadMail} message PbMsgRetReadMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetReadMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetReadMail message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetReadMail} PbMsgRetReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetReadMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetReadMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.mailInfo = $root.msg.PbMsgMailInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetReadMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetReadMail} PbMsgRetReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetReadMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetReadMail message.
         * @function verify
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetReadMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.mailInfo != null && message.hasOwnProperty("mailInfo")) {
                var error = $root.msg.PbMsgMailInfo.verify(message.mailInfo);
                if (error)
                    return "mailInfo." + error;
            }
            return null;
        };

        /**
         * Creates a PbMsgRetReadMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetReadMail} PbMsgRetReadMail
         */
        PbMsgRetReadMail.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetReadMail)
                return object;
            var message = new $root.msg.PbMsgRetReadMail();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.mailInfo != null) {
                if (typeof object.mailInfo !== "object")
                    throw TypeError(".msg.PbMsgRetReadMail.mailInfo: object expected");
                message.mailInfo = $root.msg.PbMsgMailInfo.fromObject(object.mailInfo);
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetReadMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetReadMail
         * @static
         * @param {msg.PbMsgRetReadMail} message PbMsgRetReadMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetReadMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                object.mailInfo = null;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.mailInfo != null && message.hasOwnProperty("mailInfo"))
                object.mailInfo = $root.msg.PbMsgMailInfo.toObject(message.mailInfo, options);
            return object;
        };

        /**
         * Converts this PbMsgRetReadMail to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetReadMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetReadMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetReadMail.MSG
         * @enum {string}
         * @property {number} ID=6002 ID value
         */
        PbMsgRetReadMail.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6002] = "ID"] = 6002;
            return values;
        })();

        return PbMsgRetReadMail;
    })();

    msg.PbMsgRecvMailAppendix = (function() {

        /**
         * Properties of a PbMsgRecvMailAppendix.
         * @memberof msg
         * @interface IPbMsgRecvMailAppendix
         * @property {number|Long} mailId PbMsgRecvMailAppendix mailId
         */

        /**
         * Constructs a new PbMsgRecvMailAppendix.
         * @memberof msg
         * @classdesc Represents a PbMsgRecvMailAppendix.
         * @implements IPbMsgRecvMailAppendix
         * @constructor
         * @param {msg.IPbMsgRecvMailAppendix=} [properties] Properties to set
         */
        function PbMsgRecvMailAppendix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRecvMailAppendix mailId.
         * @member {number|Long} mailId
         * @memberof msg.PbMsgRecvMailAppendix
         * @instance
         */
        PbMsgRecvMailAppendix.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PbMsgRecvMailAppendix instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {msg.IPbMsgRecvMailAppendix=} [properties] Properties to set
         * @returns {msg.PbMsgRecvMailAppendix} PbMsgRecvMailAppendix instance
         */
        PbMsgRecvMailAppendix.create = function create(properties) {
            return new PbMsgRecvMailAppendix(properties);
        };

        /**
         * Encodes the specified PbMsgRecvMailAppendix message. Does not implicitly {@link msg.PbMsgRecvMailAppendix.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {msg.IPbMsgRecvMailAppendix} message PbMsgRecvMailAppendix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRecvMailAppendix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgRecvMailAppendix message, length delimited. Does not implicitly {@link msg.PbMsgRecvMailAppendix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {msg.IPbMsgRecvMailAppendix} message PbMsgRecvMailAppendix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRecvMailAppendix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRecvMailAppendix message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRecvMailAppendix} PbMsgRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRecvMailAppendix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRecvMailAppendix();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRecvMailAppendix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRecvMailAppendix} PbMsgRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRecvMailAppendix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRecvMailAppendix message.
         * @function verify
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRecvMailAppendix.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
                return "mailId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PbMsgRecvMailAppendix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRecvMailAppendix} PbMsgRecvMailAppendix
         */
        PbMsgRecvMailAppendix.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRecvMailAppendix)
                return object;
            var message = new $root.msg.PbMsgRecvMailAppendix();
            if (object.mailId != null)
                if ($util.Long)
                    (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
                else if (typeof object.mailId === "string")
                    message.mailId = parseInt(object.mailId, 10);
                else if (typeof object.mailId === "number")
                    message.mailId = object.mailId;
                else if (typeof object.mailId === "object")
                    message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRecvMailAppendix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRecvMailAppendix
         * @static
         * @param {msg.PbMsgRecvMailAppendix} message PbMsgRecvMailAppendix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRecvMailAppendix.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mailId = options.longs === String ? "0" : 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (typeof message.mailId === "number")
                    object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
                else
                    object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
            return object;
        };

        /**
         * Converts this PbMsgRecvMailAppendix to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRecvMailAppendix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRecvMailAppendix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRecvMailAppendix.MSG
         * @enum {string}
         * @property {number} ID=5003 ID value
         */
        PbMsgRecvMailAppendix.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5003] = "ID"] = 5003;
            return values;
        })();

        return PbMsgRecvMailAppendix;
    })();

    msg.PbMsgDelMail = (function() {

        /**
         * Properties of a PbMsgDelMail.
         * @memberof msg
         * @interface IPbMsgDelMail
         * @property {number|Long} mailId PbMsgDelMail mailId
         */

        /**
         * Constructs a new PbMsgDelMail.
         * @memberof msg
         * @classdesc Represents a PbMsgDelMail.
         * @implements IPbMsgDelMail
         * @constructor
         * @param {msg.IPbMsgDelMail=} [properties] Properties to set
         */
        function PbMsgDelMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgDelMail mailId.
         * @member {number|Long} mailId
         * @memberof msg.PbMsgDelMail
         * @instance
         */
        PbMsgDelMail.prototype.mailId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PbMsgDelMail instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {msg.IPbMsgDelMail=} [properties] Properties to set
         * @returns {msg.PbMsgDelMail} PbMsgDelMail instance
         */
        PbMsgDelMail.create = function create(properties) {
            return new PbMsgDelMail(properties);
        };

        /**
         * Encodes the specified PbMsgDelMail message. Does not implicitly {@link msg.PbMsgDelMail.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {msg.IPbMsgDelMail} message PbMsgDelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgDelMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.mailId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgDelMail message, length delimited. Does not implicitly {@link msg.PbMsgDelMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {msg.IPbMsgDelMail} message PbMsgDelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgDelMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgDelMail message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgDelMail} PbMsgDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgDelMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgDelMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.mailId = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("mailId"))
                throw $util.ProtocolError("missing required 'mailId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgDelMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgDelMail} PbMsgDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgDelMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgDelMail message.
         * @function verify
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgDelMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.mailId) && !(message.mailId && $util.isInteger(message.mailId.low) && $util.isInteger(message.mailId.high)))
                return "mailId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PbMsgDelMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgDelMail} PbMsgDelMail
         */
        PbMsgDelMail.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgDelMail)
                return object;
            var message = new $root.msg.PbMsgDelMail();
            if (object.mailId != null)
                if ($util.Long)
                    (message.mailId = $util.Long.fromValue(object.mailId)).unsigned = false;
                else if (typeof object.mailId === "string")
                    message.mailId = parseInt(object.mailId, 10);
                else if (typeof object.mailId === "number")
                    message.mailId = object.mailId;
                else if (typeof object.mailId === "object")
                    message.mailId = new $util.LongBits(object.mailId.low >>> 0, object.mailId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbMsgDelMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgDelMail
         * @static
         * @param {msg.PbMsgDelMail} message PbMsgDelMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgDelMail.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.mailId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.mailId = options.longs === String ? "0" : 0;
            if (message.mailId != null && message.hasOwnProperty("mailId"))
                if (typeof message.mailId === "number")
                    object.mailId = options.longs === String ? String(message.mailId) : message.mailId;
                else
                    object.mailId = options.longs === String ? $util.Long.prototype.toString.call(message.mailId) : options.longs === Number ? new $util.LongBits(message.mailId.low >>> 0, message.mailId.high >>> 0).toNumber() : message.mailId;
            return object;
        };

        /**
         * Converts this PbMsgDelMail to JSON.
         * @function toJSON
         * @memberof msg.PbMsgDelMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgDelMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgDelMail.MSG
         * @enum {string}
         * @property {number} ID=5004 ID value
         */
        PbMsgDelMail.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5004] = "ID"] = 5004;
            return values;
        })();

        return PbMsgDelMail;
    })();

    msg.PbMsgMultiDelMail = (function() {

        /**
         * Properties of a PbMsgMultiDelMail.
         * @memberof msg
         * @interface IPbMsgMultiDelMail
         */

        /**
         * Constructs a new PbMsgMultiDelMail.
         * @memberof msg
         * @classdesc Represents a PbMsgMultiDelMail.
         * @implements IPbMsgMultiDelMail
         * @constructor
         * @param {msg.IPbMsgMultiDelMail=} [properties] Properties to set
         */
        function PbMsgMultiDelMail(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new PbMsgMultiDelMail instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {msg.IPbMsgMultiDelMail=} [properties] Properties to set
         * @returns {msg.PbMsgMultiDelMail} PbMsgMultiDelMail instance
         */
        PbMsgMultiDelMail.create = function create(properties) {
            return new PbMsgMultiDelMail(properties);
        };

        /**
         * Encodes the specified PbMsgMultiDelMail message. Does not implicitly {@link msg.PbMsgMultiDelMail.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {msg.IPbMsgMultiDelMail} message PbMsgMultiDelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMultiDelMail.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Encodes the specified PbMsgMultiDelMail message, length delimited. Does not implicitly {@link msg.PbMsgMultiDelMail.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {msg.IPbMsgMultiDelMail} message PbMsgMultiDelMail message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMultiDelMail.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgMultiDelMail message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgMultiDelMail} PbMsgMultiDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMultiDelMail.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgMultiDelMail();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgMultiDelMail message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgMultiDelMail} PbMsgMultiDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMultiDelMail.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgMultiDelMail message.
         * @function verify
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgMultiDelMail.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            return null;
        };

        /**
         * Creates a PbMsgMultiDelMail message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgMultiDelMail} PbMsgMultiDelMail
         */
        PbMsgMultiDelMail.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgMultiDelMail)
                return object;
            return new $root.msg.PbMsgMultiDelMail();
        };

        /**
         * Creates a plain object from a PbMsgMultiDelMail message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgMultiDelMail
         * @static
         * @param {msg.PbMsgMultiDelMail} message PbMsgMultiDelMail
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgMultiDelMail.toObject = function toObject() {
            return {};
        };

        /**
         * Converts this PbMsgMultiDelMail to JSON.
         * @function toJSON
         * @memberof msg.PbMsgMultiDelMail
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgMultiDelMail.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgMultiDelMail.MSG
         * @enum {string}
         * @property {number} ID=5005 ID value
         */
        PbMsgMultiDelMail.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5005] = "ID"] = 5005;
            return values;
        })();

        return PbMsgMultiDelMail;
    })();

    msg.PbMsgMultiRecvMailAppendix = (function() {

        /**
         * Properties of a PbMsgMultiRecvMailAppendix.
         * @memberof msg
         * @interface IPbMsgMultiRecvMailAppendix
         * @property {number} read PbMsgMultiRecvMailAppendix read
         */

        /**
         * Constructs a new PbMsgMultiRecvMailAppendix.
         * @memberof msg
         * @classdesc Represents a PbMsgMultiRecvMailAppendix.
         * @implements IPbMsgMultiRecvMailAppendix
         * @constructor
         * @param {msg.IPbMsgMultiRecvMailAppendix=} [properties] Properties to set
         */
        function PbMsgMultiRecvMailAppendix(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgMultiRecvMailAppendix read.
         * @member {number} read
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @instance
         */
        PbMsgMultiRecvMailAppendix.prototype.read = 0;

        /**
         * Creates a new PbMsgMultiRecvMailAppendix instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {msg.IPbMsgMultiRecvMailAppendix=} [properties] Properties to set
         * @returns {msg.PbMsgMultiRecvMailAppendix} PbMsgMultiRecvMailAppendix instance
         */
        PbMsgMultiRecvMailAppendix.create = function create(properties) {
            return new PbMsgMultiRecvMailAppendix(properties);
        };

        /**
         * Encodes the specified PbMsgMultiRecvMailAppendix message. Does not implicitly {@link msg.PbMsgMultiRecvMailAppendix.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {msg.IPbMsgMultiRecvMailAppendix} message PbMsgMultiRecvMailAppendix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMultiRecvMailAppendix.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.read);
            return writer;
        };

        /**
         * Encodes the specified PbMsgMultiRecvMailAppendix message, length delimited. Does not implicitly {@link msg.PbMsgMultiRecvMailAppendix.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {msg.IPbMsgMultiRecvMailAppendix} message PbMsgMultiRecvMailAppendix message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgMultiRecvMailAppendix.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgMultiRecvMailAppendix message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgMultiRecvMailAppendix} PbMsgMultiRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMultiRecvMailAppendix.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgMultiRecvMailAppendix();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.read = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("read"))
                throw $util.ProtocolError("missing required 'read'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgMultiRecvMailAppendix message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgMultiRecvMailAppendix} PbMsgMultiRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgMultiRecvMailAppendix.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgMultiRecvMailAppendix message.
         * @function verify
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgMultiRecvMailAppendix.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.read))
                return "read: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgMultiRecvMailAppendix message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgMultiRecvMailAppendix} PbMsgMultiRecvMailAppendix
         */
        PbMsgMultiRecvMailAppendix.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgMultiRecvMailAppendix)
                return object;
            var message = new $root.msg.PbMsgMultiRecvMailAppendix();
            if (object.read != null)
                message.read = object.read | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgMultiRecvMailAppendix message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @static
         * @param {msg.PbMsgMultiRecvMailAppendix} message PbMsgMultiRecvMailAppendix
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgMultiRecvMailAppendix.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.read = 0;
            if (message.read != null && message.hasOwnProperty("read"))
                object.read = message.read;
            return object;
        };

        /**
         * Converts this PbMsgMultiRecvMailAppendix to JSON.
         * @function toJSON
         * @memberof msg.PbMsgMultiRecvMailAppendix
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgMultiRecvMailAppendix.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgMultiRecvMailAppendix.MSG
         * @enum {string}
         * @property {number} ID=5006 ID value
         */
        PbMsgMultiRecvMailAppendix.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5006] = "ID"] = 5006;
            return values;
        })();

        return PbMsgMultiRecvMailAppendix;
    })();

    msg.PbMsgLoginCheck = (function() {

        /**
         * Properties of a PbMsgLoginCheck.
         * @memberof msg
         * @interface IPbMsgLoginCheck
         * @property {string} account PbMsgLoginCheck account
         * @property {number} serverId PbMsgLoginCheck serverId
         * @property {number} time PbMsgLoginCheck time
         * @property {string} sig PbMsgLoginCheck sig
         * @property {number|null} [platid] PbMsgLoginCheck platid
         * @property {number|Long|null} [inviter] PbMsgLoginCheck inviter
         * @property {string|null} [linktype] PbMsgLoginCheck linktype
         */

        /**
         * Constructs a new PbMsgLoginCheck.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginCheck.
         * @implements IPbMsgLoginCheck
         * @constructor
         * @param {msg.IPbMsgLoginCheck=} [properties] Properties to set
         */
        function PbMsgLoginCheck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginCheck account.
         * @member {string} account
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.account = "";

        /**
         * PbMsgLoginCheck serverId.
         * @member {number} serverId
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.serverId = 0;

        /**
         * PbMsgLoginCheck time.
         * @member {number} time
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.time = 0;

        /**
         * PbMsgLoginCheck sig.
         * @member {string} sig
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.sig = "";

        /**
         * PbMsgLoginCheck platid.
         * @member {number} platid
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.platid = 0;

        /**
         * PbMsgLoginCheck inviter.
         * @member {number|Long} inviter
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.inviter = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgLoginCheck linktype.
         * @member {string} linktype
         * @memberof msg.PbMsgLoginCheck
         * @instance
         */
        PbMsgLoginCheck.prototype.linktype = "";

        /**
         * Creates a new PbMsgLoginCheck instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {msg.IPbMsgLoginCheck=} [properties] Properties to set
         * @returns {msg.PbMsgLoginCheck} PbMsgLoginCheck instance
         */
        PbMsgLoginCheck.create = function create(properties) {
            return new PbMsgLoginCheck(properties);
        };

        /**
         * Encodes the specified PbMsgLoginCheck message. Does not implicitly {@link msg.PbMsgLoginCheck.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {msg.IPbMsgLoginCheck} message PbMsgLoginCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.sig);
            if (message.platid != null && message.hasOwnProperty("platid"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.platid);
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                writer.uint32(/* id 6, wireType 1 =*/49).fixed64(message.inviter);
            if (message.linktype != null && message.hasOwnProperty("linktype"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.linktype);
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginCheck message, length delimited. Does not implicitly {@link msg.PbMsgLoginCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {msg.IPbMsgLoginCheck} message PbMsgLoginCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginCheck message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginCheck} PbMsgLoginCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginCheck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.serverId = reader.int32();
                    break;
                case 3:
                    message.time = reader.int32();
                    break;
                case 4:
                    message.sig = reader.string();
                    break;
                case 5:
                    message.platid = reader.int32();
                    break;
                case 6:
                    message.inviter = reader.fixed64();
                    break;
                case 7:
                    message.linktype = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("serverId"))
                throw $util.ProtocolError("missing required 'serverId'", { instance: message });
            if (!message.hasOwnProperty("time"))
                throw $util.ProtocolError("missing required 'time'", { instance: message });
            if (!message.hasOwnProperty("sig"))
                throw $util.ProtocolError("missing required 'sig'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgLoginCheck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginCheck} PbMsgLoginCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginCheck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginCheck message.
         * @function verify
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginCheck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
            if (!$util.isInteger(message.time))
                return "time: integer expected";
            if (!$util.isString(message.sig))
                return "sig: string expected";
            if (message.platid != null && message.hasOwnProperty("platid"))
                if (!$util.isInteger(message.platid))
                    return "platid: integer expected";
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (!$util.isInteger(message.inviter) && !(message.inviter && $util.isInteger(message.inviter.low) && $util.isInteger(message.inviter.high)))
                    return "inviter: integer|Long expected";
            if (message.linktype != null && message.hasOwnProperty("linktype"))
                if (!$util.isString(message.linktype))
                    return "linktype: string expected";
            return null;
        };

        /**
         * Creates a PbMsgLoginCheck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginCheck} PbMsgLoginCheck
         */
        PbMsgLoginCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginCheck)
                return object;
            var message = new $root.msg.PbMsgLoginCheck();
            if (object.account != null)
                message.account = String(object.account);
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.time != null)
                message.time = object.time | 0;
            if (object.sig != null)
                message.sig = String(object.sig);
            if (object.platid != null)
                message.platid = object.platid | 0;
            if (object.inviter != null)
                if ($util.Long)
                    (message.inviter = $util.Long.fromValue(object.inviter)).unsigned = false;
                else if (typeof object.inviter === "string")
                    message.inviter = parseInt(object.inviter, 10);
                else if (typeof object.inviter === "number")
                    message.inviter = object.inviter;
                else if (typeof object.inviter === "object")
                    message.inviter = new $util.LongBits(object.inviter.low >>> 0, object.inviter.high >>> 0).toNumber();
            if (object.linktype != null)
                message.linktype = String(object.linktype);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginCheck
         * @static
         * @param {msg.PbMsgLoginCheck} message PbMsgLoginCheck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginCheck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.serverId = 0;
                object.time = 0;
                object.sig = "";
                object.platid = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.inviter = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.inviter = options.longs === String ? "0" : 0;
                object.linktype = "";
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = message.sig;
            if (message.platid != null && message.hasOwnProperty("platid"))
                object.platid = message.platid;
            if (message.inviter != null && message.hasOwnProperty("inviter"))
                if (typeof message.inviter === "number")
                    object.inviter = options.longs === String ? String(message.inviter) : message.inviter;
                else
                    object.inviter = options.longs === String ? $util.Long.prototype.toString.call(message.inviter) : options.longs === Number ? new $util.LongBits(message.inviter.low >>> 0, message.inviter.high >>> 0).toNumber() : message.inviter;
            if (message.linktype != null && message.hasOwnProperty("linktype"))
                object.linktype = message.linktype;
            return object;
        };

        /**
         * Converts this PbMsgLoginCheck to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginCheck.MSG
         * @enum {string}
         * @property {number} ID=5041 ID value
         */
        PbMsgLoginCheck.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5041] = "ID"] = 5041;
            return values;
        })();

        return PbMsgLoginCheck;
    })();

    msg.PbMsgLoginRetCheck = (function() {

        /**
         * Properties of a PbMsgLoginRetCheck.
         * @memberof msg
         * @interface IPbMsgLoginRetCheck
         * @property {number} retCode PbMsgLoginRetCheck retCode
         * @property {number|Long|null} [roleId] PbMsgLoginRetCheck roleId
         * @property {string|null} [host] PbMsgLoginRetCheck host
         * @property {number|null} [port] PbMsgLoginRetCheck port
         * @property {number|null} [time] PbMsgLoginRetCheck time
         * @property {string|null} [sig] PbMsgLoginRetCheck sig
         * @property {number|null} [groupid] PbMsgLoginRetCheck groupid
         * @property {number|null} [serverid] PbMsgLoginRetCheck serverid
         * @property {number|null} [platserver] PbMsgLoginRetCheck platserver
         */

        /**
         * Constructs a new PbMsgLoginRetCheck.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginRetCheck.
         * @implements IPbMsgLoginRetCheck
         * @constructor
         * @param {msg.IPbMsgLoginRetCheck=} [properties] Properties to set
         */
        function PbMsgLoginRetCheck(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginRetCheck retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.retCode = 0;

        /**
         * PbMsgLoginRetCheck roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgLoginRetCheck host.
         * @member {string} host
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.host = "";

        /**
         * PbMsgLoginRetCheck port.
         * @member {number} port
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.port = 0;

        /**
         * PbMsgLoginRetCheck time.
         * @member {number} time
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.time = 0;

        /**
         * PbMsgLoginRetCheck sig.
         * @member {string} sig
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.sig = "";

        /**
         * PbMsgLoginRetCheck groupid.
         * @member {number} groupid
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.groupid = 0;

        /**
         * PbMsgLoginRetCheck serverid.
         * @member {number} serverid
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.serverid = 0;

        /**
         * PbMsgLoginRetCheck platserver.
         * @member {number} platserver
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         */
        PbMsgLoginRetCheck.prototype.platserver = 0;

        /**
         * Creates a new PbMsgLoginRetCheck instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {msg.IPbMsgLoginRetCheck=} [properties] Properties to set
         * @returns {msg.PbMsgLoginRetCheck} PbMsgLoginRetCheck instance
         */
        PbMsgLoginRetCheck.create = function create(properties) {
            return new PbMsgLoginRetCheck(properties);
        };

        /**
         * Encodes the specified PbMsgLoginRetCheck message. Does not implicitly {@link msg.PbMsgLoginRetCheck.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {msg.IPbMsgLoginRetCheck} message PbMsgLoginRetCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetCheck.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.roleId);
            if (message.host != null && message.hasOwnProperty("host"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.host);
            if (message.port != null && message.hasOwnProperty("port"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.port);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.time);
            if (message.sig != null && message.hasOwnProperty("sig"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.sig);
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.groupid);
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.serverid);
            if (message.platserver != null && message.hasOwnProperty("platserver"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.platserver);
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginRetCheck message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetCheck.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {msg.IPbMsgLoginRetCheck} message PbMsgLoginRetCheck message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetCheck.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginRetCheck message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginRetCheck} PbMsgLoginRetCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetCheck.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginRetCheck();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    message.roleId = reader.fixed64();
                    break;
                case 3:
                    message.host = reader.string();
                    break;
                case 4:
                    message.port = reader.int32();
                    break;
                case 5:
                    message.time = reader.int32();
                    break;
                case 6:
                    message.sig = reader.string();
                    break;
                case 7:
                    message.groupid = reader.int32();
                    break;
                case 8:
                    message.serverid = reader.int32();
                    break;
                case 9:
                    message.platserver = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgLoginRetCheck message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginRetCheck} PbMsgLoginRetCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetCheck.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginRetCheck message.
         * @function verify
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginRetCheck.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
            if (message.host != null && message.hasOwnProperty("host"))
                if (!$util.isString(message.host))
                    return "host: string expected";
            if (message.port != null && message.hasOwnProperty("port"))
                if (!$util.isInteger(message.port))
                    return "port: integer expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            if (message.sig != null && message.hasOwnProperty("sig"))
                if (!$util.isString(message.sig))
                    return "sig: string expected";
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                if (!$util.isInteger(message.groupid))
                    return "groupid: integer expected";
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                if (!$util.isInteger(message.serverid))
                    return "serverid: integer expected";
            if (message.platserver != null && message.hasOwnProperty("platserver"))
                if (!$util.isInteger(message.platserver))
                    return "platserver: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgLoginRetCheck message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginRetCheck} PbMsgLoginRetCheck
         */
        PbMsgLoginRetCheck.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginRetCheck)
                return object;
            var message = new $root.msg.PbMsgLoginRetCheck();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.host != null)
                message.host = String(object.host);
            if (object.port != null)
                message.port = object.port | 0;
            if (object.time != null)
                message.time = object.time | 0;
            if (object.sig != null)
                message.sig = String(object.sig);
            if (object.groupid != null)
                message.groupid = object.groupid | 0;
            if (object.serverid != null)
                message.serverid = object.serverid | 0;
            if (object.platserver != null)
                message.platserver = object.platserver | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginRetCheck message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginRetCheck
         * @static
         * @param {msg.PbMsgLoginRetCheck} message PbMsgLoginRetCheck
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginRetCheck.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.retCode = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.host = "";
                object.port = 0;
                object.time = 0;
                object.sig = "";
                object.groupid = 0;
                object.serverid = 0;
                object.platserver = 0;
            }
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.host != null && message.hasOwnProperty("host"))
                object.host = message.host;
            if (message.port != null && message.hasOwnProperty("port"))
                object.port = message.port;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            if (message.sig != null && message.hasOwnProperty("sig"))
                object.sig = message.sig;
            if (message.groupid != null && message.hasOwnProperty("groupid"))
                object.groupid = message.groupid;
            if (message.serverid != null && message.hasOwnProperty("serverid"))
                object.serverid = message.serverid;
            if (message.platserver != null && message.hasOwnProperty("platserver"))
                object.platserver = message.platserver;
            return object;
        };

        /**
         * Converts this PbMsgLoginRetCheck to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginRetCheck
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginRetCheck.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginRetCheck.MSG
         * @enum {string}
         * @property {number} ID=6041 ID value
         */
        PbMsgLoginRetCheck.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6041] = "ID"] = 6041;
            return values;
        })();

        return PbMsgLoginRetCheck;
    })();

    msg.LoginServerInfo = (function() {

        /**
         * Properties of a LoginServerInfo.
         * @memberof msg
         * @interface ILoginServerInfo
         * @property {number} serverId LoginServerInfo serverId
         * @property {string} serverName LoginServerInfo serverName
         * @property {number|null} [time] LoginServerInfo time
         */

        /**
         * Constructs a new LoginServerInfo.
         * @memberof msg
         * @classdesc Represents a LoginServerInfo.
         * @implements ILoginServerInfo
         * @constructor
         * @param {msg.ILoginServerInfo=} [properties] Properties to set
         */
        function LoginServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginServerInfo serverId.
         * @member {number} serverId
         * @memberof msg.LoginServerInfo
         * @instance
         */
        LoginServerInfo.prototype.serverId = 0;

        /**
         * LoginServerInfo serverName.
         * @member {string} serverName
         * @memberof msg.LoginServerInfo
         * @instance
         */
        LoginServerInfo.prototype.serverName = "";

        /**
         * LoginServerInfo time.
         * @member {number} time
         * @memberof msg.LoginServerInfo
         * @instance
         */
        LoginServerInfo.prototype.time = 0;

        /**
         * Creates a new LoginServerInfo instance using the specified properties.
         * @function create
         * @memberof msg.LoginServerInfo
         * @static
         * @param {msg.ILoginServerInfo=} [properties] Properties to set
         * @returns {msg.LoginServerInfo} LoginServerInfo instance
         */
        LoginServerInfo.create = function create(properties) {
            return new LoginServerInfo(properties);
        };

        /**
         * Encodes the specified LoginServerInfo message. Does not implicitly {@link msg.LoginServerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.LoginServerInfo
         * @static
         * @param {msg.ILoginServerInfo} message LoginServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverName);
            if (message.time != null && message.hasOwnProperty("time"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.time);
            return writer;
        };

        /**
         * Encodes the specified LoginServerInfo message, length delimited. Does not implicitly {@link msg.LoginServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LoginServerInfo
         * @static
         * @param {msg.ILoginServerInfo} message LoginServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LoginServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LoginServerInfo} LoginServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LoginServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.serverId = reader.int32();
                    break;
                case 2:
                    message.serverName = reader.string();
                    break;
                case 3:
                    message.time = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("serverId"))
                throw $util.ProtocolError("missing required 'serverId'", { instance: message });
            if (!message.hasOwnProperty("serverName"))
                throw $util.ProtocolError("missing required 'serverName'", { instance: message });
            return message;
        };

        /**
         * Decodes a LoginServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LoginServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LoginServerInfo} LoginServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginServerInfo message.
         * @function verify
         * @memberof msg.LoginServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.serverId))
                return "serverId: integer expected";
            if (!$util.isString(message.serverName))
                return "serverName: string expected";
            if (message.time != null && message.hasOwnProperty("time"))
                if (!$util.isInteger(message.time))
                    return "time: integer expected";
            return null;
        };

        /**
         * Creates a LoginServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LoginServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LoginServerInfo} LoginServerInfo
         */
        LoginServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LoginServerInfo)
                return object;
            var message = new $root.msg.LoginServerInfo();
            if (object.serverId != null)
                message.serverId = object.serverId | 0;
            if (object.serverName != null)
                message.serverName = String(object.serverName);
            if (object.time != null)
                message.time = object.time | 0;
            return message;
        };

        /**
         * Creates a plain object from a LoginServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LoginServerInfo
         * @static
         * @param {msg.LoginServerInfo} message LoginServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.serverId = 0;
                object.serverName = "";
                object.time = 0;
            }
            if (message.serverId != null && message.hasOwnProperty("serverId"))
                object.serverId = message.serverId;
            if (message.serverName != null && message.hasOwnProperty("serverName"))
                object.serverName = message.serverName;
            if (message.time != null && message.hasOwnProperty("time"))
                object.time = message.time;
            return object;
        };

        /**
         * Converts this LoginServerInfo to JSON.
         * @function toJSON
         * @memberof msg.LoginServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginServerInfo;
    })();

    msg.PbMsgLoginGetServerInfo = (function() {

        /**
         * Properties of a PbMsgLoginGetServerInfo.
         * @memberof msg
         * @interface IPbMsgLoginGetServerInfo
         * @property {string} account PbMsgLoginGetServerInfo account
         * @property {number} platid PbMsgLoginGetServerInfo platid
         */

        /**
         * Constructs a new PbMsgLoginGetServerInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginGetServerInfo.
         * @implements IPbMsgLoginGetServerInfo
         * @constructor
         * @param {msg.IPbMsgLoginGetServerInfo=} [properties] Properties to set
         */
        function PbMsgLoginGetServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginGetServerInfo account.
         * @member {string} account
         * @memberof msg.PbMsgLoginGetServerInfo
         * @instance
         */
        PbMsgLoginGetServerInfo.prototype.account = "";

        /**
         * PbMsgLoginGetServerInfo platid.
         * @member {number} platid
         * @memberof msg.PbMsgLoginGetServerInfo
         * @instance
         */
        PbMsgLoginGetServerInfo.prototype.platid = 0;

        /**
         * Creates a new PbMsgLoginGetServerInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {msg.IPbMsgLoginGetServerInfo=} [properties] Properties to set
         * @returns {msg.PbMsgLoginGetServerInfo} PbMsgLoginGetServerInfo instance
         */
        PbMsgLoginGetServerInfo.create = function create(properties) {
            return new PbMsgLoginGetServerInfo(properties);
        };

        /**
         * Encodes the specified PbMsgLoginGetServerInfo message. Does not implicitly {@link msg.PbMsgLoginGetServerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {msg.IPbMsgLoginGetServerInfo} message PbMsgLoginGetServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginGetServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.account);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.platid);
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginGetServerInfo message, length delimited. Does not implicitly {@link msg.PbMsgLoginGetServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {msg.IPbMsgLoginGetServerInfo} message PbMsgLoginGetServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginGetServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginGetServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginGetServerInfo} PbMsgLoginGetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginGetServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginGetServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.account = reader.string();
                    break;
                case 2:
                    message.platid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("account"))
                throw $util.ProtocolError("missing required 'account'", { instance: message });
            if (!message.hasOwnProperty("platid"))
                throw $util.ProtocolError("missing required 'platid'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgLoginGetServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginGetServerInfo} PbMsgLoginGetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginGetServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginGetServerInfo message.
         * @function verify
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginGetServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isString(message.account))
                return "account: string expected";
            if (!$util.isInteger(message.platid))
                return "platid: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgLoginGetServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginGetServerInfo} PbMsgLoginGetServerInfo
         */
        PbMsgLoginGetServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginGetServerInfo)
                return object;
            var message = new $root.msg.PbMsgLoginGetServerInfo();
            if (object.account != null)
                message.account = String(object.account);
            if (object.platid != null)
                message.platid = object.platid | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginGetServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginGetServerInfo
         * @static
         * @param {msg.PbMsgLoginGetServerInfo} message PbMsgLoginGetServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginGetServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.account = "";
                object.platid = 0;
            }
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.platid != null && message.hasOwnProperty("platid"))
                object.platid = message.platid;
            return object;
        };

        /**
         * Converts this PbMsgLoginGetServerInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginGetServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginGetServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginGetServerInfo.MSG
         * @enum {string}
         * @property {number} ID=5042 ID value
         */
        PbMsgLoginGetServerInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5042] = "ID"] = 5042;
            return values;
        })();

        return PbMsgLoginGetServerInfo;
    })();

    msg.PbMsgLoginRetServerInfo = (function() {

        /**
         * Properties of a PbMsgLoginRetServerInfo.
         * @memberof msg
         * @interface IPbMsgLoginRetServerInfo
         * @property {msg.ILoginServerInfo} newServer PbMsgLoginRetServerInfo newServer
         * @property {Array.<msg.ILoginServerInfo>|null} [myServer] PbMsgLoginRetServerInfo myServer
         * @property {number} serverSize PbMsgLoginRetServerInfo serverSize
         * @property {number|null} [minnewserver] PbMsgLoginRetServerInfo minnewserver
         */

        /**
         * Constructs a new PbMsgLoginRetServerInfo.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginRetServerInfo.
         * @implements IPbMsgLoginRetServerInfo
         * @constructor
         * @param {msg.IPbMsgLoginRetServerInfo=} [properties] Properties to set
         */
        function PbMsgLoginRetServerInfo(properties) {
            this.myServer = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginRetServerInfo newServer.
         * @member {msg.ILoginServerInfo} newServer
         * @memberof msg.PbMsgLoginRetServerInfo
         * @instance
         */
        PbMsgLoginRetServerInfo.prototype.newServer = null;

        /**
         * PbMsgLoginRetServerInfo myServer.
         * @member {Array.<msg.ILoginServerInfo>} myServer
         * @memberof msg.PbMsgLoginRetServerInfo
         * @instance
         */
        PbMsgLoginRetServerInfo.prototype.myServer = $util.emptyArray;

        /**
         * PbMsgLoginRetServerInfo serverSize.
         * @member {number} serverSize
         * @memberof msg.PbMsgLoginRetServerInfo
         * @instance
         */
        PbMsgLoginRetServerInfo.prototype.serverSize = 0;

        /**
         * PbMsgLoginRetServerInfo minnewserver.
         * @member {number} minnewserver
         * @memberof msg.PbMsgLoginRetServerInfo
         * @instance
         */
        PbMsgLoginRetServerInfo.prototype.minnewserver = 0;

        /**
         * Creates a new PbMsgLoginRetServerInfo instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {msg.IPbMsgLoginRetServerInfo=} [properties] Properties to set
         * @returns {msg.PbMsgLoginRetServerInfo} PbMsgLoginRetServerInfo instance
         */
        PbMsgLoginRetServerInfo.create = function create(properties) {
            return new PbMsgLoginRetServerInfo(properties);
        };

        /**
         * Encodes the specified PbMsgLoginRetServerInfo message. Does not implicitly {@link msg.PbMsgLoginRetServerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {msg.IPbMsgLoginRetServerInfo} message PbMsgLoginRetServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            $root.msg.LoginServerInfo.encode(message.newServer, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.myServer != null && message.myServer.length)
                for (var i = 0; i < message.myServer.length; ++i)
                    $root.msg.LoginServerInfo.encode(message.myServer[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.serverSize);
            if (message.minnewserver != null && message.hasOwnProperty("minnewserver"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.minnewserver);
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginRetServerInfo message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {msg.IPbMsgLoginRetServerInfo} message PbMsgLoginRetServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginRetServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginRetServerInfo} PbMsgLoginRetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginRetServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.newServer = $root.msg.LoginServerInfo.decode(reader, reader.uint32());
                    break;
                case 2:
                    if (!(message.myServer && message.myServer.length))
                        message.myServer = [];
                    message.myServer.push($root.msg.LoginServerInfo.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.serverSize = reader.int32();
                    break;
                case 4:
                    message.minnewserver = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("newServer"))
                throw $util.ProtocolError("missing required 'newServer'", { instance: message });
            if (!message.hasOwnProperty("serverSize"))
                throw $util.ProtocolError("missing required 'serverSize'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgLoginRetServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginRetServerInfo} PbMsgLoginRetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginRetServerInfo message.
         * @function verify
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginRetServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            {
                var error = $root.msg.LoginServerInfo.verify(message.newServer);
                if (error)
                    return "newServer." + error;
            }
            if (message.myServer != null && message.hasOwnProperty("myServer")) {
                if (!Array.isArray(message.myServer))
                    return "myServer: array expected";
                for (var i = 0; i < message.myServer.length; ++i) {
                    var error = $root.msg.LoginServerInfo.verify(message.myServer[i]);
                    if (error)
                        return "myServer." + error;
                }
            }
            if (!$util.isInteger(message.serverSize))
                return "serverSize: integer expected";
            if (message.minnewserver != null && message.hasOwnProperty("minnewserver"))
                if (!$util.isInteger(message.minnewserver))
                    return "minnewserver: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgLoginRetServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginRetServerInfo} PbMsgLoginRetServerInfo
         */
        PbMsgLoginRetServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginRetServerInfo)
                return object;
            var message = new $root.msg.PbMsgLoginRetServerInfo();
            if (object.newServer != null) {
                if (typeof object.newServer !== "object")
                    throw TypeError(".msg.PbMsgLoginRetServerInfo.newServer: object expected");
                message.newServer = $root.msg.LoginServerInfo.fromObject(object.newServer);
            }
            if (object.myServer) {
                if (!Array.isArray(object.myServer))
                    throw TypeError(".msg.PbMsgLoginRetServerInfo.myServer: array expected");
                message.myServer = [];
                for (var i = 0; i < object.myServer.length; ++i) {
                    if (typeof object.myServer[i] !== "object")
                        throw TypeError(".msg.PbMsgLoginRetServerInfo.myServer: object expected");
                    message.myServer[i] = $root.msg.LoginServerInfo.fromObject(object.myServer[i]);
                }
            }
            if (object.serverSize != null)
                message.serverSize = object.serverSize | 0;
            if (object.minnewserver != null)
                message.minnewserver = object.minnewserver | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginRetServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginRetServerInfo
         * @static
         * @param {msg.PbMsgLoginRetServerInfo} message PbMsgLoginRetServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginRetServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.myServer = [];
            if (options.defaults) {
                object.newServer = null;
                object.serverSize = 0;
                object.minnewserver = 0;
            }
            if (message.newServer != null && message.hasOwnProperty("newServer"))
                object.newServer = $root.msg.LoginServerInfo.toObject(message.newServer, options);
            if (message.myServer && message.myServer.length) {
                object.myServer = [];
                for (var j = 0; j < message.myServer.length; ++j)
                    object.myServer[j] = $root.msg.LoginServerInfo.toObject(message.myServer[j], options);
            }
            if (message.serverSize != null && message.hasOwnProperty("serverSize"))
                object.serverSize = message.serverSize;
            if (message.minnewserver != null && message.hasOwnProperty("minnewserver"))
                object.minnewserver = message.minnewserver;
            return object;
        };

        /**
         * Converts this PbMsgLoginRetServerInfo to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginRetServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginRetServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginRetServerInfo.MSG
         * @enum {string}
         * @property {number} ID=6042 ID value
         */
        PbMsgLoginRetServerInfo.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6042] = "ID"] = 6042;
            return values;
        })();

        return PbMsgLoginRetServerInfo;
    })();

    msg.PbMsgLoginGetServerList = (function() {

        /**
         * Properties of a PbMsgLoginGetServerList.
         * @memberof msg
         * @interface IPbMsgLoginGetServerList
         * @property {number} platid PbMsgLoginGetServerList platid
         * @property {number} beginId PbMsgLoginGetServerList beginId
         * @property {number} endId PbMsgLoginGetServerList endId
         */

        /**
         * Constructs a new PbMsgLoginGetServerList.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginGetServerList.
         * @implements IPbMsgLoginGetServerList
         * @constructor
         * @param {msg.IPbMsgLoginGetServerList=} [properties] Properties to set
         */
        function PbMsgLoginGetServerList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginGetServerList platid.
         * @member {number} platid
         * @memberof msg.PbMsgLoginGetServerList
         * @instance
         */
        PbMsgLoginGetServerList.prototype.platid = 0;

        /**
         * PbMsgLoginGetServerList beginId.
         * @member {number} beginId
         * @memberof msg.PbMsgLoginGetServerList
         * @instance
         */
        PbMsgLoginGetServerList.prototype.beginId = 0;

        /**
         * PbMsgLoginGetServerList endId.
         * @member {number} endId
         * @memberof msg.PbMsgLoginGetServerList
         * @instance
         */
        PbMsgLoginGetServerList.prototype.endId = 0;

        /**
         * Creates a new PbMsgLoginGetServerList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {msg.IPbMsgLoginGetServerList=} [properties] Properties to set
         * @returns {msg.PbMsgLoginGetServerList} PbMsgLoginGetServerList instance
         */
        PbMsgLoginGetServerList.create = function create(properties) {
            return new PbMsgLoginGetServerList(properties);
        };

        /**
         * Encodes the specified PbMsgLoginGetServerList message. Does not implicitly {@link msg.PbMsgLoginGetServerList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {msg.IPbMsgLoginGetServerList} message PbMsgLoginGetServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginGetServerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platid);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.beginId);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.endId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginGetServerList message, length delimited. Does not implicitly {@link msg.PbMsgLoginGetServerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {msg.IPbMsgLoginGetServerList} message PbMsgLoginGetServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginGetServerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginGetServerList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginGetServerList} PbMsgLoginGetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginGetServerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginGetServerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.platid = reader.int32();
                    break;
                case 2:
                    message.beginId = reader.int32();
                    break;
                case 3:
                    message.endId = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("platid"))
                throw $util.ProtocolError("missing required 'platid'", { instance: message });
            if (!message.hasOwnProperty("beginId"))
                throw $util.ProtocolError("missing required 'beginId'", { instance: message });
            if (!message.hasOwnProperty("endId"))
                throw $util.ProtocolError("missing required 'endId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgLoginGetServerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginGetServerList} PbMsgLoginGetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginGetServerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginGetServerList message.
         * @function verify
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginGetServerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.platid))
                return "platid: integer expected";
            if (!$util.isInteger(message.beginId))
                return "beginId: integer expected";
            if (!$util.isInteger(message.endId))
                return "endId: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgLoginGetServerList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginGetServerList} PbMsgLoginGetServerList
         */
        PbMsgLoginGetServerList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginGetServerList)
                return object;
            var message = new $root.msg.PbMsgLoginGetServerList();
            if (object.platid != null)
                message.platid = object.platid | 0;
            if (object.beginId != null)
                message.beginId = object.beginId | 0;
            if (object.endId != null)
                message.endId = object.endId | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginGetServerList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginGetServerList
         * @static
         * @param {msg.PbMsgLoginGetServerList} message PbMsgLoginGetServerList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginGetServerList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.platid = 0;
                object.beginId = 0;
                object.endId = 0;
            }
            if (message.platid != null && message.hasOwnProperty("platid"))
                object.platid = message.platid;
            if (message.beginId != null && message.hasOwnProperty("beginId"))
                object.beginId = message.beginId;
            if (message.endId != null && message.hasOwnProperty("endId"))
                object.endId = message.endId;
            return object;
        };

        /**
         * Converts this PbMsgLoginGetServerList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginGetServerList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginGetServerList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginGetServerList.MSG
         * @enum {string}
         * @property {number} ID=5043 ID value
         */
        PbMsgLoginGetServerList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5043] = "ID"] = 5043;
            return values;
        })();

        return PbMsgLoginGetServerList;
    })();

    msg.PbMsgLoginRetServerList = (function() {

        /**
         * Properties of a PbMsgLoginRetServerList.
         * @memberof msg
         * @interface IPbMsgLoginRetServerList
         * @property {Array.<msg.ILoginServerInfo>|null} [data] PbMsgLoginRetServerList data
         */

        /**
         * Constructs a new PbMsgLoginRetServerList.
         * @memberof msg
         * @classdesc Represents a PbMsgLoginRetServerList.
         * @implements IPbMsgLoginRetServerList
         * @constructor
         * @param {msg.IPbMsgLoginRetServerList=} [properties] Properties to set
         */
        function PbMsgLoginRetServerList(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgLoginRetServerList data.
         * @member {Array.<msg.ILoginServerInfo>} data
         * @memberof msg.PbMsgLoginRetServerList
         * @instance
         */
        PbMsgLoginRetServerList.prototype.data = $util.emptyArray;

        /**
         * Creates a new PbMsgLoginRetServerList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {msg.IPbMsgLoginRetServerList=} [properties] Properties to set
         * @returns {msg.PbMsgLoginRetServerList} PbMsgLoginRetServerList instance
         */
        PbMsgLoginRetServerList.create = function create(properties) {
            return new PbMsgLoginRetServerList(properties);
        };

        /**
         * Encodes the specified PbMsgLoginRetServerList message. Does not implicitly {@link msg.PbMsgLoginRetServerList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {msg.IPbMsgLoginRetServerList} message PbMsgLoginRetServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetServerList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.LoginServerInfo.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgLoginRetServerList message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetServerList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {msg.IPbMsgLoginRetServerList} message PbMsgLoginRetServerList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgLoginRetServerList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgLoginRetServerList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgLoginRetServerList} PbMsgLoginRetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetServerList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgLoginRetServerList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.LoginServerInfo.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgLoginRetServerList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgLoginRetServerList} PbMsgLoginRetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgLoginRetServerList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgLoginRetServerList message.
         * @function verify
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgLoginRetServerList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.LoginServerInfo.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgLoginRetServerList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgLoginRetServerList} PbMsgLoginRetServerList
         */
        PbMsgLoginRetServerList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgLoginRetServerList)
                return object;
            var message = new $root.msg.PbMsgLoginRetServerList();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgLoginRetServerList.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgLoginRetServerList.data: object expected");
                    message.data[i] = $root.msg.LoginServerInfo.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgLoginRetServerList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgLoginRetServerList
         * @static
         * @param {msg.PbMsgLoginRetServerList} message PbMsgLoginRetServerList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgLoginRetServerList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.LoginServerInfo.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgLoginRetServerList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgLoginRetServerList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgLoginRetServerList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgLoginRetServerList.MSG
         * @enum {string}
         * @property {number} ID=6043 ID value
         */
        PbMsgLoginRetServerList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6043] = "ID"] = 6043;
            return values;
        })();

        return PbMsgLoginRetServerList;
    })();

    msg.PbMsgChatSend = (function() {

        /**
         * Properties of a PbMsgChatSend.
         * @memberof msg
         * @interface IPbMsgChatSend
         * @property {number} channel PbMsgChatSend channel
         * @property {number} type PbMsgChatSend type
         * @property {string} content PbMsgChatSend content
         * @property {string} appendContent PbMsgChatSend appendContent
         */

        /**
         * Constructs a new PbMsgChatSend.
         * @memberof msg
         * @classdesc Represents a PbMsgChatSend.
         * @implements IPbMsgChatSend
         * @constructor
         * @param {msg.IPbMsgChatSend=} [properties] Properties to set
         */
        function PbMsgChatSend(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgChatSend channel.
         * @member {number} channel
         * @memberof msg.PbMsgChatSend
         * @instance
         */
        PbMsgChatSend.prototype.channel = 0;

        /**
         * PbMsgChatSend type.
         * @member {number} type
         * @memberof msg.PbMsgChatSend
         * @instance
         */
        PbMsgChatSend.prototype.type = 0;

        /**
         * PbMsgChatSend content.
         * @member {string} content
         * @memberof msg.PbMsgChatSend
         * @instance
         */
        PbMsgChatSend.prototype.content = "";

        /**
         * PbMsgChatSend appendContent.
         * @member {string} appendContent
         * @memberof msg.PbMsgChatSend
         * @instance
         */
        PbMsgChatSend.prototype.appendContent = "";

        /**
         * Creates a new PbMsgChatSend instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {msg.IPbMsgChatSend=} [properties] Properties to set
         * @returns {msg.PbMsgChatSend} PbMsgChatSend instance
         */
        PbMsgChatSend.create = function create(properties) {
            return new PbMsgChatSend(properties);
        };

        /**
         * Encodes the specified PbMsgChatSend message. Does not implicitly {@link msg.PbMsgChatSend.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {msg.IPbMsgChatSend} message PbMsgChatSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgChatSend.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appendContent);
            return writer;
        };

        /**
         * Encodes the specified PbMsgChatSend message, length delimited. Does not implicitly {@link msg.PbMsgChatSend.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {msg.IPbMsgChatSend} message PbMsgChatSend message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgChatSend.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgChatSend message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgChatSend} PbMsgChatSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgChatSend.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgChatSend();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                case 4:
                    message.appendContent = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("appendContent"))
                throw $util.ProtocolError("missing required 'appendContent'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgChatSend message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgChatSend} PbMsgChatSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgChatSend.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgChatSend message.
         * @function verify
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgChatSend.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (!$util.isString(message.appendContent))
                return "appendContent: string expected";
            return null;
        };

        /**
         * Creates a PbMsgChatSend message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgChatSend} PbMsgChatSend
         */
        PbMsgChatSend.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgChatSend)
                return object;
            var message = new $root.msg.PbMsgChatSend();
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.appendContent != null)
                message.appendContent = String(object.appendContent);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgChatSend message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgChatSend
         * @static
         * @param {msg.PbMsgChatSend} message PbMsgChatSend
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgChatSend.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.type = 0;
                object.content = "";
                object.appendContent = "";
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.appendContent != null && message.hasOwnProperty("appendContent"))
                object.appendContent = message.appendContent;
            return object;
        };

        /**
         * Converts this PbMsgChatSend to JSON.
         * @function toJSON
         * @memberof msg.PbMsgChatSend
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgChatSend.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgChatSend.MSG
         * @enum {string}
         * @property {number} ID=5061 ID value
         */
        PbMsgChatSend.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5061] = "ID"] = 5061;
            return values;
        })();

        return PbMsgChatSend;
    })();

    msg.PbMsgChatLog = (function() {

        /**
         * Properties of a PbMsgChatLog.
         * @memberof msg
         * @interface IPbMsgChatLog
         * @property {number} channel PbMsgChatLog channel
         * @property {number} num PbMsgChatLog num
         */

        /**
         * Constructs a new PbMsgChatLog.
         * @memberof msg
         * @classdesc Represents a PbMsgChatLog.
         * @implements IPbMsgChatLog
         * @constructor
         * @param {msg.IPbMsgChatLog=} [properties] Properties to set
         */
        function PbMsgChatLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgChatLog channel.
         * @member {number} channel
         * @memberof msg.PbMsgChatLog
         * @instance
         */
        PbMsgChatLog.prototype.channel = 0;

        /**
         * PbMsgChatLog num.
         * @member {number} num
         * @memberof msg.PbMsgChatLog
         * @instance
         */
        PbMsgChatLog.prototype.num = 0;

        /**
         * Creates a new PbMsgChatLog instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {msg.IPbMsgChatLog=} [properties] Properties to set
         * @returns {msg.PbMsgChatLog} PbMsgChatLog instance
         */
        PbMsgChatLog.create = function create(properties) {
            return new PbMsgChatLog(properties);
        };

        /**
         * Encodes the specified PbMsgChatLog message. Does not implicitly {@link msg.PbMsgChatLog.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {msg.IPbMsgChatLog} message PbMsgChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgChatLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified PbMsgChatLog message, length delimited. Does not implicitly {@link msg.PbMsgChatLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {msg.IPbMsgChatLog} message PbMsgChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgChatLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgChatLog message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgChatLog} PbMsgChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgChatLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgChatLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgChatLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgChatLog} PbMsgChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgChatLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgChatLog message.
         * @function verify
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgChatLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgChatLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgChatLog} PbMsgChatLog
         */
        PbMsgChatLog.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgChatLog)
                return object;
            var message = new $root.msg.PbMsgChatLog();
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgChatLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgChatLog
         * @static
         * @param {msg.PbMsgChatLog} message PbMsgChatLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgChatLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.num = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this PbMsgChatLog to JSON.
         * @function toJSON
         * @memberof msg.PbMsgChatLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgChatLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgChatLog.MSG
         * @enum {string}
         * @property {number} ID=5062 ID value
         */
        PbMsgChatLog.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5062] = "ID"] = 5062;
            return values;
        })();

        return PbMsgChatLog;
    })();

    msg.PbMsgRetChatLog = (function() {

        /**
         * Properties of a PbMsgRetChatLog.
         * @memberof msg
         * @interface IPbMsgRetChatLog
         * @property {Array.<msg.PbMsgRetChatLog.IChatLog>|null} [data] PbMsgRetChatLog data
         */

        /**
         * Constructs a new PbMsgRetChatLog.
         * @memberof msg
         * @classdesc Represents a PbMsgRetChatLog.
         * @implements IPbMsgRetChatLog
         * @constructor
         * @param {msg.IPbMsgRetChatLog=} [properties] Properties to set
         */
        function PbMsgRetChatLog(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetChatLog data.
         * @member {Array.<msg.PbMsgRetChatLog.IChatLog>} data
         * @memberof msg.PbMsgRetChatLog
         * @instance
         */
        PbMsgRetChatLog.prototype.data = $util.emptyArray;

        /**
         * Creates a new PbMsgRetChatLog instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {msg.IPbMsgRetChatLog=} [properties] Properties to set
         * @returns {msg.PbMsgRetChatLog} PbMsgRetChatLog instance
         */
        PbMsgRetChatLog.create = function create(properties) {
            return new PbMsgRetChatLog(properties);
        };

        /**
         * Encodes the specified PbMsgRetChatLog message. Does not implicitly {@link msg.PbMsgRetChatLog.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {msg.IPbMsgRetChatLog} message PbMsgRetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetChatLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.PbMsgRetChatLog.ChatLog.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetChatLog message, length delimited. Does not implicitly {@link msg.PbMsgRetChatLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {msg.IPbMsgRetChatLog} message PbMsgRetChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetChatLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetChatLog message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetChatLog} PbMsgRetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetChatLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetChatLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.PbMsgRetChatLog.ChatLog.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgRetChatLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetChatLog} PbMsgRetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetChatLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetChatLog message.
         * @function verify
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetChatLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.PbMsgRetChatLog.ChatLog.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetChatLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetChatLog} PbMsgRetChatLog
         */
        PbMsgRetChatLog.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetChatLog)
                return object;
            var message = new $root.msg.PbMsgRetChatLog();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgRetChatLog.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgRetChatLog.data: object expected");
                    message.data[i] = $root.msg.PbMsgRetChatLog.ChatLog.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetChatLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetChatLog
         * @static
         * @param {msg.PbMsgRetChatLog} message PbMsgRetChatLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetChatLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.PbMsgRetChatLog.ChatLog.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetChatLog to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetChatLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetChatLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetChatLog.MSG
         * @enum {string}
         * @property {number} ID=6062 ID value
         */
        PbMsgRetChatLog.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6062] = "ID"] = 6062;
            return values;
        })();

        PbMsgRetChatLog.ChatLog = (function() {

            /**
             * Properties of a ChatLog.
             * @memberof msg.PbMsgRetChatLog
             * @interface IChatLog
             * @property {number} type ChatLog type
             * @property {string} content ChatLog content
             * @property {string} appendContent ChatLog appendContent
             * @property {number|Long} srcRoleId ChatLog srcRoleId
             * @property {string} srcRoleName ChatLog srcRoleName
             */

            /**
             * Constructs a new ChatLog.
             * @memberof msg.PbMsgRetChatLog
             * @classdesc Represents a ChatLog.
             * @implements IChatLog
             * @constructor
             * @param {msg.PbMsgRetChatLog.IChatLog=} [properties] Properties to set
             */
            function ChatLog(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ChatLog type.
             * @member {number} type
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             */
            ChatLog.prototype.type = 0;

            /**
             * ChatLog content.
             * @member {string} content
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             */
            ChatLog.prototype.content = "";

            /**
             * ChatLog appendContent.
             * @member {string} appendContent
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             */
            ChatLog.prototype.appendContent = "";

            /**
             * ChatLog srcRoleId.
             * @member {number|Long} srcRoleId
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             */
            ChatLog.prototype.srcRoleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * ChatLog srcRoleName.
             * @member {string} srcRoleName
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             */
            ChatLog.prototype.srcRoleName = "";

            /**
             * Creates a new ChatLog instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {msg.PbMsgRetChatLog.IChatLog=} [properties] Properties to set
             * @returns {msg.PbMsgRetChatLog.ChatLog} ChatLog instance
             */
            ChatLog.create = function create(properties) {
                return new ChatLog(properties);
            };

            /**
             * Encodes the specified ChatLog message. Does not implicitly {@link msg.PbMsgRetChatLog.ChatLog.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {msg.PbMsgRetChatLog.IChatLog} message ChatLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatLog.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.appendContent);
                writer.uint32(/* id 4, wireType 1 =*/33).fixed64(message.srcRoleId);
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.srcRoleName);
                return writer;
            };

            /**
             * Encodes the specified ChatLog message, length delimited. Does not implicitly {@link msg.PbMsgRetChatLog.ChatLog.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {msg.PbMsgRetChatLog.IChatLog} message ChatLog message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ChatLog.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ChatLog message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetChatLog.ChatLog} ChatLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatLog.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetChatLog.ChatLog();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.type = reader.int32();
                        break;
                    case 2:
                        message.content = reader.string();
                        break;
                    case 3:
                        message.appendContent = reader.string();
                        break;
                    case 4:
                        message.srcRoleId = reader.fixed64();
                        break;
                    case 5:
                        message.srcRoleName = reader.string();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("type"))
                    throw $util.ProtocolError("missing required 'type'", { instance: message });
                if (!message.hasOwnProperty("content"))
                    throw $util.ProtocolError("missing required 'content'", { instance: message });
                if (!message.hasOwnProperty("appendContent"))
                    throw $util.ProtocolError("missing required 'appendContent'", { instance: message });
                if (!message.hasOwnProperty("srcRoleId"))
                    throw $util.ProtocolError("missing required 'srcRoleId'", { instance: message });
                if (!message.hasOwnProperty("srcRoleName"))
                    throw $util.ProtocolError("missing required 'srcRoleName'", { instance: message });
                return message;
            };

            /**
             * Decodes a ChatLog message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetChatLog.ChatLog} ChatLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ChatLog.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ChatLog message.
             * @function verify
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ChatLog.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.type))
                    return "type: integer expected";
                if (!$util.isString(message.content))
                    return "content: string expected";
                if (!$util.isString(message.appendContent))
                    return "appendContent: string expected";
                if (!$util.isInteger(message.srcRoleId) && !(message.srcRoleId && $util.isInteger(message.srcRoleId.low) && $util.isInteger(message.srcRoleId.high)))
                    return "srcRoleId: integer|Long expected";
                if (!$util.isString(message.srcRoleName))
                    return "srcRoleName: string expected";
                return null;
            };

            /**
             * Creates a ChatLog message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetChatLog.ChatLog} ChatLog
             */
            ChatLog.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetChatLog.ChatLog)
                    return object;
                var message = new $root.msg.PbMsgRetChatLog.ChatLog();
                if (object.type != null)
                    message.type = object.type | 0;
                if (object.content != null)
                    message.content = String(object.content);
                if (object.appendContent != null)
                    message.appendContent = String(object.appendContent);
                if (object.srcRoleId != null)
                    if ($util.Long)
                        (message.srcRoleId = $util.Long.fromValue(object.srcRoleId)).unsigned = false;
                    else if (typeof object.srcRoleId === "string")
                        message.srcRoleId = parseInt(object.srcRoleId, 10);
                    else if (typeof object.srcRoleId === "number")
                        message.srcRoleId = object.srcRoleId;
                    else if (typeof object.srcRoleId === "object")
                        message.srcRoleId = new $util.LongBits(object.srcRoleId.low >>> 0, object.srcRoleId.high >>> 0).toNumber();
                if (object.srcRoleName != null)
                    message.srcRoleName = String(object.srcRoleName);
                return message;
            };

            /**
             * Creates a plain object from a ChatLog message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @static
             * @param {msg.PbMsgRetChatLog.ChatLog} message ChatLog
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ChatLog.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    object.type = 0;
                    object.content = "";
                    object.appendContent = "";
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.srcRoleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.srcRoleId = options.longs === String ? "0" : 0;
                    object.srcRoleName = "";
                }
                if (message.type != null && message.hasOwnProperty("type"))
                    object.type = message.type;
                if (message.content != null && message.hasOwnProperty("content"))
                    object.content = message.content;
                if (message.appendContent != null && message.hasOwnProperty("appendContent"))
                    object.appendContent = message.appendContent;
                if (message.srcRoleId != null && message.hasOwnProperty("srcRoleId"))
                    if (typeof message.srcRoleId === "number")
                        object.srcRoleId = options.longs === String ? String(message.srcRoleId) : message.srcRoleId;
                    else
                        object.srcRoleId = options.longs === String ? $util.Long.prototype.toString.call(message.srcRoleId) : options.longs === Number ? new $util.LongBits(message.srcRoleId.low >>> 0, message.srcRoleId.high >>> 0).toNumber() : message.srcRoleId;
                if (message.srcRoleName != null && message.hasOwnProperty("srcRoleName"))
                    object.srcRoleName = message.srcRoleName;
                return object;
            };

            /**
             * Converts this ChatLog to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetChatLog.ChatLog
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ChatLog.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return ChatLog;
        })();

        return PbMsgRetChatLog;
    })();

    msg.PbMsgUpdateChatMessage = (function() {

        /**
         * Properties of a PbMsgUpdateChatMessage.
         * @memberof msg
         * @interface IPbMsgUpdateChatMessage
         * @property {number} channel PbMsgUpdateChatMessage channel
         * @property {number} type PbMsgUpdateChatMessage type
         * @property {string} content PbMsgUpdateChatMessage content
         * @property {string} appendContent PbMsgUpdateChatMessage appendContent
         * @property {number|Long} srcRoleId PbMsgUpdateChatMessage srcRoleId
         * @property {string} srcRoleName PbMsgUpdateChatMessage srcRoleName
         */

        /**
         * Constructs a new PbMsgUpdateChatMessage.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateChatMessage.
         * @implements IPbMsgUpdateChatMessage
         * @constructor
         * @param {msg.IPbMsgUpdateChatMessage=} [properties] Properties to set
         */
        function PbMsgUpdateChatMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateChatMessage channel.
         * @member {number} channel
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.channel = 0;

        /**
         * PbMsgUpdateChatMessage type.
         * @member {number} type
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.type = 0;

        /**
         * PbMsgUpdateChatMessage content.
         * @member {string} content
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.content = "";

        /**
         * PbMsgUpdateChatMessage appendContent.
         * @member {string} appendContent
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.appendContent = "";

        /**
         * PbMsgUpdateChatMessage srcRoleId.
         * @member {number|Long} srcRoleId
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.srcRoleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * PbMsgUpdateChatMessage srcRoleName.
         * @member {string} srcRoleName
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         */
        PbMsgUpdateChatMessage.prototype.srcRoleName = "";

        /**
         * Creates a new PbMsgUpdateChatMessage instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {msg.IPbMsgUpdateChatMessage=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateChatMessage} PbMsgUpdateChatMessage instance
         */
        PbMsgUpdateChatMessage.create = function create(properties) {
            return new PbMsgUpdateChatMessage(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateChatMessage message. Does not implicitly {@link msg.PbMsgUpdateChatMessage.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {msg.IPbMsgUpdateChatMessage} message PbMsgUpdateChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateChatMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.content);
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.appendContent);
            writer.uint32(/* id 5, wireType 1 =*/41).fixed64(message.srcRoleId);
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.srcRoleName);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateChatMessage message, length delimited. Does not implicitly {@link msg.PbMsgUpdateChatMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {msg.IPbMsgUpdateChatMessage} message PbMsgUpdateChatMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateChatMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateChatMessage message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateChatMessage} PbMsgUpdateChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateChatMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateChatMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.type = reader.int32();
                    break;
                case 3:
                    message.content = reader.string();
                    break;
                case 4:
                    message.appendContent = reader.string();
                    break;
                case 5:
                    message.srcRoleId = reader.fixed64();
                    break;
                case 6:
                    message.srcRoleName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("content"))
                throw $util.ProtocolError("missing required 'content'", { instance: message });
            if (!message.hasOwnProperty("appendContent"))
                throw $util.ProtocolError("missing required 'appendContent'", { instance: message });
            if (!message.hasOwnProperty("srcRoleId"))
                throw $util.ProtocolError("missing required 'srcRoleId'", { instance: message });
            if (!message.hasOwnProperty("srcRoleName"))
                throw $util.ProtocolError("missing required 'srcRoleName'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateChatMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateChatMessage} PbMsgUpdateChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateChatMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateChatMessage message.
         * @function verify
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateChatMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isString(message.content))
                return "content: string expected";
            if (!$util.isString(message.appendContent))
                return "appendContent: string expected";
            if (!$util.isInteger(message.srcRoleId) && !(message.srcRoleId && $util.isInteger(message.srcRoleId.low) && $util.isInteger(message.srcRoleId.high)))
                return "srcRoleId: integer|Long expected";
            if (!$util.isString(message.srcRoleName))
                return "srcRoleName: string expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateChatMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateChatMessage} PbMsgUpdateChatMessage
         */
        PbMsgUpdateChatMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateChatMessage)
                return object;
            var message = new $root.msg.PbMsgUpdateChatMessage();
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.type != null)
                message.type = object.type | 0;
            if (object.content != null)
                message.content = String(object.content);
            if (object.appendContent != null)
                message.appendContent = String(object.appendContent);
            if (object.srcRoleId != null)
                if ($util.Long)
                    (message.srcRoleId = $util.Long.fromValue(object.srcRoleId)).unsigned = false;
                else if (typeof object.srcRoleId === "string")
                    message.srcRoleId = parseInt(object.srcRoleId, 10);
                else if (typeof object.srcRoleId === "number")
                    message.srcRoleId = object.srcRoleId;
                else if (typeof object.srcRoleId === "object")
                    message.srcRoleId = new $util.LongBits(object.srcRoleId.low >>> 0, object.srcRoleId.high >>> 0).toNumber();
            if (object.srcRoleName != null)
                message.srcRoleName = String(object.srcRoleName);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateChatMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateChatMessage
         * @static
         * @param {msg.PbMsgUpdateChatMessage} message PbMsgUpdateChatMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateChatMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.channel = 0;
                object.type = 0;
                object.content = "";
                object.appendContent = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.srcRoleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.srcRoleId = options.longs === String ? "0" : 0;
                object.srcRoleName = "";
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            if (message.appendContent != null && message.hasOwnProperty("appendContent"))
                object.appendContent = message.appendContent;
            if (message.srcRoleId != null && message.hasOwnProperty("srcRoleId"))
                if (typeof message.srcRoleId === "number")
                    object.srcRoleId = options.longs === String ? String(message.srcRoleId) : message.srcRoleId;
                else
                    object.srcRoleId = options.longs === String ? $util.Long.prototype.toString.call(message.srcRoleId) : options.longs === Number ? new $util.LongBits(message.srcRoleId.low >>> 0, message.srcRoleId.high >>> 0).toNumber() : message.srcRoleId;
            if (message.srcRoleName != null && message.hasOwnProperty("srcRoleName"))
                object.srcRoleName = message.srcRoleName;
            return object;
        };

        /**
         * Converts this PbMsgUpdateChatMessage to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateChatMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateChatMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateChatMessage.MSG
         * @enum {string}
         * @property {number} ID=721 ID value
         */
        PbMsgUpdateChatMessage.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[721] = "ID"] = 721;
            return values;
        })();

        return PbMsgUpdateChatMessage;
    })();

    msg.PbMsgUpdateChatRetcode = (function() {

        /**
         * Properties of a PbMsgUpdateChatRetcode.
         * @memberof msg
         * @interface IPbMsgUpdateChatRetcode
         * @property {number} channel PbMsgUpdateChatRetcode channel
         * @property {number} retcode PbMsgUpdateChatRetcode retcode
         * @property {Array.<string>|null} [content] PbMsgUpdateChatRetcode content
         */

        /**
         * Constructs a new PbMsgUpdateChatRetcode.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateChatRetcode.
         * @implements IPbMsgUpdateChatRetcode
         * @constructor
         * @param {msg.IPbMsgUpdateChatRetcode=} [properties] Properties to set
         */
        function PbMsgUpdateChatRetcode(properties) {
            this.content = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateChatRetcode channel.
         * @member {number} channel
         * @memberof msg.PbMsgUpdateChatRetcode
         * @instance
         */
        PbMsgUpdateChatRetcode.prototype.channel = 0;

        /**
         * PbMsgUpdateChatRetcode retcode.
         * @member {number} retcode
         * @memberof msg.PbMsgUpdateChatRetcode
         * @instance
         */
        PbMsgUpdateChatRetcode.prototype.retcode = 0;

        /**
         * PbMsgUpdateChatRetcode content.
         * @member {Array.<string>} content
         * @memberof msg.PbMsgUpdateChatRetcode
         * @instance
         */
        PbMsgUpdateChatRetcode.prototype.content = $util.emptyArray;

        /**
         * Creates a new PbMsgUpdateChatRetcode instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {msg.IPbMsgUpdateChatRetcode=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateChatRetcode} PbMsgUpdateChatRetcode instance
         */
        PbMsgUpdateChatRetcode.create = function create(properties) {
            return new PbMsgUpdateChatRetcode(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateChatRetcode message. Does not implicitly {@link msg.PbMsgUpdateChatRetcode.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {msg.IPbMsgUpdateChatRetcode} message PbMsgUpdateChatRetcode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateChatRetcode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.channel);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.retcode);
            if (message.content != null && message.content.length)
                for (var i = 0; i < message.content.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.content[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateChatRetcode message, length delimited. Does not implicitly {@link msg.PbMsgUpdateChatRetcode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {msg.IPbMsgUpdateChatRetcode} message PbMsgUpdateChatRetcode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateChatRetcode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateChatRetcode message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateChatRetcode} PbMsgUpdateChatRetcode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateChatRetcode.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateChatRetcode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.channel = reader.int32();
                    break;
                case 2:
                    message.retcode = reader.int32();
                    break;
                case 3:
                    if (!(message.content && message.content.length))
                        message.content = [];
                    message.content.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("channel"))
                throw $util.ProtocolError("missing required 'channel'", { instance: message });
            if (!message.hasOwnProperty("retcode"))
                throw $util.ProtocolError("missing required 'retcode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateChatRetcode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateChatRetcode} PbMsgUpdateChatRetcode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateChatRetcode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateChatRetcode message.
         * @function verify
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateChatRetcode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.channel))
                return "channel: integer expected";
            if (!$util.isInteger(message.retcode))
                return "retcode: integer expected";
            if (message.content != null && message.hasOwnProperty("content")) {
                if (!Array.isArray(message.content))
                    return "content: array expected";
                for (var i = 0; i < message.content.length; ++i)
                    if (!$util.isString(message.content[i]))
                        return "content: string[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgUpdateChatRetcode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateChatRetcode} PbMsgUpdateChatRetcode
         */
        PbMsgUpdateChatRetcode.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateChatRetcode)
                return object;
            var message = new $root.msg.PbMsgUpdateChatRetcode();
            if (object.channel != null)
                message.channel = object.channel | 0;
            if (object.retcode != null)
                message.retcode = object.retcode | 0;
            if (object.content) {
                if (!Array.isArray(object.content))
                    throw TypeError(".msg.PbMsgUpdateChatRetcode.content: array expected");
                message.content = [];
                for (var i = 0; i < object.content.length; ++i)
                    message.content[i] = String(object.content[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateChatRetcode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateChatRetcode
         * @static
         * @param {msg.PbMsgUpdateChatRetcode} message PbMsgUpdateChatRetcode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateChatRetcode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.content = [];
            if (options.defaults) {
                object.channel = 0;
                object.retcode = 0;
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                object.channel = message.channel;
            if (message.retcode != null && message.hasOwnProperty("retcode"))
                object.retcode = message.retcode;
            if (message.content && message.content.length) {
                object.content = [];
                for (var j = 0; j < message.content.length; ++j)
                    object.content[j] = message.content[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgUpdateChatRetcode to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateChatRetcode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateChatRetcode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateChatRetcode.MSG
         * @enum {string}
         * @property {number} ID=722 ID value
         */
        PbMsgUpdateChatRetcode.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[722] = "ID"] = 722;
            return values;
        })();

        return PbMsgUpdateChatRetcode;
    })();

    msg.PbMsgCleanChatLog = (function() {

        /**
         * Properties of a PbMsgCleanChatLog.
         * @memberof msg
         * @interface IPbMsgCleanChatLog
         * @property {number|Long} roleId PbMsgCleanChatLog roleId
         */

        /**
         * Constructs a new PbMsgCleanChatLog.
         * @memberof msg
         * @classdesc Represents a PbMsgCleanChatLog.
         * @implements IPbMsgCleanChatLog
         * @constructor
         * @param {msg.IPbMsgCleanChatLog=} [properties] Properties to set
         */
        function PbMsgCleanChatLog(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgCleanChatLog roleId.
         * @member {number|Long} roleId
         * @memberof msg.PbMsgCleanChatLog
         * @instance
         */
        PbMsgCleanChatLog.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new PbMsgCleanChatLog instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {msg.IPbMsgCleanChatLog=} [properties] Properties to set
         * @returns {msg.PbMsgCleanChatLog} PbMsgCleanChatLog instance
         */
        PbMsgCleanChatLog.create = function create(properties) {
            return new PbMsgCleanChatLog(properties);
        };

        /**
         * Encodes the specified PbMsgCleanChatLog message. Does not implicitly {@link msg.PbMsgCleanChatLog.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {msg.IPbMsgCleanChatLog} message PbMsgCleanChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgCleanChatLog.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
            return writer;
        };

        /**
         * Encodes the specified PbMsgCleanChatLog message, length delimited. Does not implicitly {@link msg.PbMsgCleanChatLog.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {msg.IPbMsgCleanChatLog} message PbMsgCleanChatLog message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgCleanChatLog.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgCleanChatLog message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgCleanChatLog} PbMsgCleanChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgCleanChatLog.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgCleanChatLog();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.fixed64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgCleanChatLog message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgCleanChatLog} PbMsgCleanChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgCleanChatLog.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgCleanChatLog message.
         * @function verify
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgCleanChatLog.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            return null;
        };

        /**
         * Creates a PbMsgCleanChatLog message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgCleanChatLog} PbMsgCleanChatLog
         */
        PbMsgCleanChatLog.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgCleanChatLog)
                return object;
            var message = new $root.msg.PbMsgCleanChatLog();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a PbMsgCleanChatLog message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgCleanChatLog
         * @static
         * @param {msg.PbMsgCleanChatLog} message PbMsgCleanChatLog
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgCleanChatLog.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            return object;
        };

        /**
         * Converts this PbMsgCleanChatLog to JSON.
         * @function toJSON
         * @memberof msg.PbMsgCleanChatLog
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgCleanChatLog.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgCleanChatLog.MSG
         * @enum {string}
         * @property {number} ID=723 ID value
         */
        PbMsgCleanChatLog.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[723] = "ID"] = 723;
            return values;
        })();

        return PbMsgCleanChatLog;
    })();

    msg.PbMsgHeartBeat = (function() {

        /**
         * Properties of a PbMsgHeartBeat.
         * @memberof msg
         * @interface IPbMsgHeartBeat
         * @property {number} placeHolder PbMsgHeartBeat placeHolder
         */

        /**
         * Constructs a new PbMsgHeartBeat.
         * @memberof msg
         * @classdesc Represents a PbMsgHeartBeat.
         * @implements IPbMsgHeartBeat
         * @constructor
         * @param {msg.IPbMsgHeartBeat=} [properties] Properties to set
         */
        function PbMsgHeartBeat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgHeartBeat placeHolder.
         * @member {number} placeHolder
         * @memberof msg.PbMsgHeartBeat
         * @instance
         */
        PbMsgHeartBeat.prototype.placeHolder = 0;

        /**
         * Creates a new PbMsgHeartBeat instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {msg.IPbMsgHeartBeat=} [properties] Properties to set
         * @returns {msg.PbMsgHeartBeat} PbMsgHeartBeat instance
         */
        PbMsgHeartBeat.create = function create(properties) {
            return new PbMsgHeartBeat(properties);
        };

        /**
         * Encodes the specified PbMsgHeartBeat message. Does not implicitly {@link msg.PbMsgHeartBeat.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {msg.IPbMsgHeartBeat} message PbMsgHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgHeartBeat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.placeHolder);
            return writer;
        };

        /**
         * Encodes the specified PbMsgHeartBeat message, length delimited. Does not implicitly {@link msg.PbMsgHeartBeat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {msg.IPbMsgHeartBeat} message PbMsgHeartBeat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgHeartBeat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgHeartBeat message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgHeartBeat} PbMsgHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgHeartBeat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgHeartBeat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.placeHolder = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("placeHolder"))
                throw $util.ProtocolError("missing required 'placeHolder'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgHeartBeat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgHeartBeat} PbMsgHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgHeartBeat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgHeartBeat message.
         * @function verify
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgHeartBeat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.placeHolder))
                return "placeHolder: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgHeartBeat} PbMsgHeartBeat
         */
        PbMsgHeartBeat.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgHeartBeat)
                return object;
            var message = new $root.msg.PbMsgHeartBeat();
            if (object.placeHolder != null)
                message.placeHolder = object.placeHolder | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgHeartBeat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgHeartBeat
         * @static
         * @param {msg.PbMsgHeartBeat} message PbMsgHeartBeat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgHeartBeat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.placeHolder = 0;
            if (message.placeHolder != null && message.hasOwnProperty("placeHolder"))
                object.placeHolder = message.placeHolder;
            return object;
        };

        /**
         * Converts this PbMsgHeartBeat to JSON.
         * @function toJSON
         * @memberof msg.PbMsgHeartBeat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgHeartBeat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgHeartBeat.MSG
         * @enum {string}
         * @property {number} ID=5000 ID value
         */
        PbMsgHeartBeat.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5000] = "ID"] = 5000;
            return values;
        })();

        return PbMsgHeartBeat;
    })();

    msg.RankingData = (function() {

        /**
         * Properties of a RankingData.
         * @memberof msg
         * @interface IRankingData
         * @property {number|Long} roleId RankingData roleId
         * @property {string} name RankingData name
         * @property {number|Long} data RankingData data
         * @property {Array.<number>|null} [additional] RankingData additional
         */

        /**
         * Constructs a new RankingData.
         * @memberof msg
         * @classdesc Represents a RankingData.
         * @implements IRankingData
         * @constructor
         * @param {msg.IRankingData=} [properties] Properties to set
         */
        function RankingData(properties) {
            this.additional = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RankingData roleId.
         * @member {number|Long} roleId
         * @memberof msg.RankingData
         * @instance
         */
        RankingData.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankingData name.
         * @member {string} name
         * @memberof msg.RankingData
         * @instance
         */
        RankingData.prototype.name = "";

        /**
         * RankingData data.
         * @member {number|Long} data
         * @memberof msg.RankingData
         * @instance
         */
        RankingData.prototype.data = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * RankingData additional.
         * @member {Array.<number>} additional
         * @memberof msg.RankingData
         * @instance
         */
        RankingData.prototype.additional = $util.emptyArray;

        /**
         * Creates a new RankingData instance using the specified properties.
         * @function create
         * @memberof msg.RankingData
         * @static
         * @param {msg.IRankingData=} [properties] Properties to set
         * @returns {msg.RankingData} RankingData instance
         */
        RankingData.create = function create(properties) {
            return new RankingData(properties);
        };

        /**
         * Encodes the specified RankingData message. Does not implicitly {@link msg.RankingData.verify|verify} messages.
         * @function encode
         * @memberof msg.RankingData
         * @static
         * @param {msg.IRankingData} message RankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.data);
            if (message.additional != null && message.additional.length)
                for (var i = 0; i < message.additional.length; ++i)
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.additional[i]);
            return writer;
        };

        /**
         * Encodes the specified RankingData message, length delimited. Does not implicitly {@link msg.RankingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RankingData
         * @static
         * @param {msg.IRankingData} message RankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RankingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RankingData message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RankingData} RankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RankingData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roleId = reader.fixed64();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.data = reader.fixed64();
                    break;
                case 4:
                    if (!(message.additional && message.additional.length))
                        message.additional = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.additional.push(reader.int32());
                    } else
                        message.additional.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("roleId"))
                throw $util.ProtocolError("missing required 'roleId'", { instance: message });
            if (!message.hasOwnProperty("name"))
                throw $util.ProtocolError("missing required 'name'", { instance: message });
            if (!message.hasOwnProperty("data"))
                throw $util.ProtocolError("missing required 'data'", { instance: message });
            return message;
        };

        /**
         * Decodes a RankingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RankingData} RankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RankingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RankingData message.
         * @function verify
         * @memberof msg.RankingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RankingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                return "roleId: integer|Long expected";
            if (!$util.isString(message.name))
                return "name: string expected";
            if (!$util.isInteger(message.data) && !(message.data && $util.isInteger(message.data.low) && $util.isInteger(message.data.high)))
                return "data: integer|Long expected";
            if (message.additional != null && message.hasOwnProperty("additional")) {
                if (!Array.isArray(message.additional))
                    return "additional: array expected";
                for (var i = 0; i < message.additional.length; ++i)
                    if (!$util.isInteger(message.additional[i]))
                        return "additional: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a RankingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RankingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RankingData} RankingData
         */
        RankingData.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RankingData)
                return object;
            var message = new $root.msg.RankingData();
            if (object.roleId != null)
                if ($util.Long)
                    (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                else if (typeof object.roleId === "string")
                    message.roleId = parseInt(object.roleId, 10);
                else if (typeof object.roleId === "number")
                    message.roleId = object.roleId;
                else if (typeof object.roleId === "object")
                    message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
            if (object.name != null)
                message.name = String(object.name);
            if (object.data != null)
                if ($util.Long)
                    (message.data = $util.Long.fromValue(object.data)).unsigned = false;
                else if (typeof object.data === "string")
                    message.data = parseInt(object.data, 10);
                else if (typeof object.data === "number")
                    message.data = object.data;
                else if (typeof object.data === "object")
                    message.data = new $util.LongBits(object.data.low >>> 0, object.data.high >>> 0).toNumber();
            if (object.additional) {
                if (!Array.isArray(object.additional))
                    throw TypeError(".msg.RankingData.additional: array expected");
                message.additional = [];
                for (var i = 0; i < object.additional.length; ++i)
                    message.additional[i] = object.additional[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a RankingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RankingData
         * @static
         * @param {msg.RankingData} message RankingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RankingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.additional = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.roleId = options.longs === String ? "0" : 0;
                object.name = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, false);
                    object.data = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.data = options.longs === String ? "0" : 0;
            }
            if (message.roleId != null && message.hasOwnProperty("roleId"))
                if (typeof message.roleId === "number")
                    object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                else
                    object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.data != null && message.hasOwnProperty("data"))
                if (typeof message.data === "number")
                    object.data = options.longs === String ? String(message.data) : message.data;
                else
                    object.data = options.longs === String ? $util.Long.prototype.toString.call(message.data) : options.longs === Number ? new $util.LongBits(message.data.low >>> 0, message.data.high >>> 0).toNumber() : message.data;
            if (message.additional && message.additional.length) {
                object.additional = [];
                for (var j = 0; j < message.additional.length; ++j)
                    object.additional[j] = message.additional[j];
            }
            return object;
        };

        /**
         * Converts this RankingData to JSON.
         * @function toJSON
         * @memberof msg.RankingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RankingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RankingData;
    })();

    msg.PbMsgUpdateRankingData = (function() {

        /**
         * Properties of a PbMsgUpdateRankingData.
         * @memberof msg
         * @interface IPbMsgUpdateRankingData
         * @property {number} type PbMsgUpdateRankingData type
         * @property {number} bIndex PbMsgUpdateRankingData bIndex
         * @property {Array.<msg.IRankingData>|null} [data] PbMsgUpdateRankingData data
         * @property {boolean} nextpage PbMsgUpdateRankingData nextpage
         */

        /**
         * Constructs a new PbMsgUpdateRankingData.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateRankingData.
         * @implements IPbMsgUpdateRankingData
         * @constructor
         * @param {msg.IPbMsgUpdateRankingData=} [properties] Properties to set
         */
        function PbMsgUpdateRankingData(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateRankingData type.
         * @member {number} type
         * @memberof msg.PbMsgUpdateRankingData
         * @instance
         */
        PbMsgUpdateRankingData.prototype.type = 0;

        /**
         * PbMsgUpdateRankingData bIndex.
         * @member {number} bIndex
         * @memberof msg.PbMsgUpdateRankingData
         * @instance
         */
        PbMsgUpdateRankingData.prototype.bIndex = 0;

        /**
         * PbMsgUpdateRankingData data.
         * @member {Array.<msg.IRankingData>} data
         * @memberof msg.PbMsgUpdateRankingData
         * @instance
         */
        PbMsgUpdateRankingData.prototype.data = $util.emptyArray;

        /**
         * PbMsgUpdateRankingData nextpage.
         * @member {boolean} nextpage
         * @memberof msg.PbMsgUpdateRankingData
         * @instance
         */
        PbMsgUpdateRankingData.prototype.nextpage = false;

        /**
         * Creates a new PbMsgUpdateRankingData instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {msg.IPbMsgUpdateRankingData=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateRankingData} PbMsgUpdateRankingData instance
         */
        PbMsgUpdateRankingData.create = function create(properties) {
            return new PbMsgUpdateRankingData(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateRankingData message. Does not implicitly {@link msg.PbMsgUpdateRankingData.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {msg.IPbMsgUpdateRankingData} message PbMsgUpdateRankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRankingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bIndex);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.RankingData.encode(message.data[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.nextpage);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateRankingData message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRankingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {msg.IPbMsgUpdateRankingData} message PbMsgUpdateRankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRankingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateRankingData message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateRankingData} PbMsgUpdateRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRankingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateRankingData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.bIndex = reader.int32();
                    break;
                case 3:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.RankingData.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.nextpage = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("bIndex"))
                throw $util.ProtocolError("missing required 'bIndex'", { instance: message });
            if (!message.hasOwnProperty("nextpage"))
                throw $util.ProtocolError("missing required 'nextpage'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateRankingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateRankingData} PbMsgUpdateRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRankingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateRankingData message.
         * @function verify
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateRankingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.bIndex))
                return "bIndex: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.RankingData.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            if (typeof message.nextpage !== "boolean")
                return "nextpage: boolean expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateRankingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateRankingData} PbMsgUpdateRankingData
         */
        PbMsgUpdateRankingData.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateRankingData)
                return object;
            var message = new $root.msg.PbMsgUpdateRankingData();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bIndex != null)
                message.bIndex = object.bIndex | 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgUpdateRankingData.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgUpdateRankingData.data: object expected");
                    message.data[i] = $root.msg.RankingData.fromObject(object.data[i]);
                }
            }
            if (object.nextpage != null)
                message.nextpage = Boolean(object.nextpage);
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateRankingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateRankingData
         * @static
         * @param {msg.PbMsgUpdateRankingData} message PbMsgUpdateRankingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateRankingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults) {
                object.type = 0;
                object.bIndex = 0;
                object.nextpage = false;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bIndex != null && message.hasOwnProperty("bIndex"))
                object.bIndex = message.bIndex;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.RankingData.toObject(message.data[j], options);
            }
            if (message.nextpage != null && message.hasOwnProperty("nextpage"))
                object.nextpage = message.nextpage;
            return object;
        };

        /**
         * Converts this PbMsgUpdateRankingData to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateRankingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateRankingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateRankingData.MSG
         * @enum {string}
         * @property {number} ID=711 ID value
         */
        PbMsgUpdateRankingData.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[711] = "ID"] = 711;
            return values;
        })();

        return PbMsgUpdateRankingData;
    })();

    msg.PbMsgUpdateRoleRankingLevel = (function() {

        /**
         * Properties of a PbMsgUpdateRoleRankingLevel.
         * @memberof msg
         * @interface IPbMsgUpdateRoleRankingLevel
         * @property {number} type PbMsgUpdateRoleRankingLevel type
         * @property {number} rnkLevel PbMsgUpdateRoleRankingLevel rnkLevel
         */

        /**
         * Constructs a new PbMsgUpdateRoleRankingLevel.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateRoleRankingLevel.
         * @implements IPbMsgUpdateRoleRankingLevel
         * @constructor
         * @param {msg.IPbMsgUpdateRoleRankingLevel=} [properties] Properties to set
         */
        function PbMsgUpdateRoleRankingLevel(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateRoleRankingLevel type.
         * @member {number} type
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @instance
         */
        PbMsgUpdateRoleRankingLevel.prototype.type = 0;

        /**
         * PbMsgUpdateRoleRankingLevel rnkLevel.
         * @member {number} rnkLevel
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @instance
         */
        PbMsgUpdateRoleRankingLevel.prototype.rnkLevel = 0;

        /**
         * Creates a new PbMsgUpdateRoleRankingLevel instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleRankingLevel=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateRoleRankingLevel} PbMsgUpdateRoleRankingLevel instance
         */
        PbMsgUpdateRoleRankingLevel.create = function create(properties) {
            return new PbMsgUpdateRoleRankingLevel(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateRoleRankingLevel message. Does not implicitly {@link msg.PbMsgUpdateRoleRankingLevel.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleRankingLevel} message PbMsgUpdateRoleRankingLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleRankingLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rnkLevel);
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateRoleRankingLevel message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleRankingLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleRankingLevel} message PbMsgUpdateRoleRankingLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleRankingLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateRoleRankingLevel message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateRoleRankingLevel} PbMsgUpdateRoleRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleRankingLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateRoleRankingLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.rnkLevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("rnkLevel"))
                throw $util.ProtocolError("missing required 'rnkLevel'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgUpdateRoleRankingLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateRoleRankingLevel} PbMsgUpdateRoleRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleRankingLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateRoleRankingLevel message.
         * @function verify
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateRoleRankingLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.rnkLevel))
                return "rnkLevel: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgUpdateRoleRankingLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateRoleRankingLevel} PbMsgUpdateRoleRankingLevel
         */
        PbMsgUpdateRoleRankingLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateRoleRankingLevel)
                return object;
            var message = new $root.msg.PbMsgUpdateRoleRankingLevel();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.rnkLevel != null)
                message.rnkLevel = object.rnkLevel | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateRoleRankingLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @static
         * @param {msg.PbMsgUpdateRoleRankingLevel} message PbMsgUpdateRoleRankingLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateRoleRankingLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.rnkLevel = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.rnkLevel != null && message.hasOwnProperty("rnkLevel"))
                object.rnkLevel = message.rnkLevel;
            return object;
        };

        /**
         * Converts this PbMsgUpdateRoleRankingLevel to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateRoleRankingLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateRoleRankingLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateRoleRankingLevel.MSG
         * @enum {string}
         * @property {number} ID=712 ID value
         */
        PbMsgUpdateRoleRankingLevel.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[712] = "ID"] = 712;
            return values;
        })();

        return PbMsgUpdateRoleRankingLevel;
    })();

    msg.PbMsgUpdateRoleMRankingLevel = (function() {

        /**
         * Properties of a PbMsgUpdateRoleMRankingLevel.
         * @memberof msg
         * @interface IPbMsgUpdateRoleMRankingLevel
         * @property {Array.<msg.IPbMsgUpdateRoleRankingLevel>|null} [data] PbMsgUpdateRoleMRankingLevel data
         */

        /**
         * Constructs a new PbMsgUpdateRoleMRankingLevel.
         * @memberof msg
         * @classdesc Represents a PbMsgUpdateRoleMRankingLevel.
         * @implements IPbMsgUpdateRoleMRankingLevel
         * @constructor
         * @param {msg.IPbMsgUpdateRoleMRankingLevel=} [properties] Properties to set
         */
        function PbMsgUpdateRoleMRankingLevel(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgUpdateRoleMRankingLevel data.
         * @member {Array.<msg.IPbMsgUpdateRoleRankingLevel>} data
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @instance
         */
        PbMsgUpdateRoleMRankingLevel.prototype.data = $util.emptyArray;

        /**
         * Creates a new PbMsgUpdateRoleMRankingLevel instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleMRankingLevel=} [properties] Properties to set
         * @returns {msg.PbMsgUpdateRoleMRankingLevel} PbMsgUpdateRoleMRankingLevel instance
         */
        PbMsgUpdateRoleMRankingLevel.create = function create(properties) {
            return new PbMsgUpdateRoleMRankingLevel(properties);
        };

        /**
         * Encodes the specified PbMsgUpdateRoleMRankingLevel message. Does not implicitly {@link msg.PbMsgUpdateRoleMRankingLevel.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleMRankingLevel} message PbMsgUpdateRoleMRankingLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleMRankingLevel.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.PbMsgUpdateRoleRankingLevel.encode(message.data[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgUpdateRoleMRankingLevel message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleMRankingLevel.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {msg.IPbMsgUpdateRoleMRankingLevel} message PbMsgUpdateRoleMRankingLevel message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgUpdateRoleMRankingLevel.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgUpdateRoleMRankingLevel message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgUpdateRoleMRankingLevel} PbMsgUpdateRoleMRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleMRankingLevel.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgUpdateRoleMRankingLevel();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.PbMsgUpdateRoleRankingLevel.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PbMsgUpdateRoleMRankingLevel message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgUpdateRoleMRankingLevel} PbMsgUpdateRoleMRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgUpdateRoleMRankingLevel.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgUpdateRoleMRankingLevel message.
         * @function verify
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgUpdateRoleMRankingLevel.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.PbMsgUpdateRoleRankingLevel.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgUpdateRoleMRankingLevel message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgUpdateRoleMRankingLevel} PbMsgUpdateRoleMRankingLevel
         */
        PbMsgUpdateRoleMRankingLevel.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgUpdateRoleMRankingLevel)
                return object;
            var message = new $root.msg.PbMsgUpdateRoleMRankingLevel();
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgUpdateRoleMRankingLevel.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgUpdateRoleMRankingLevel.data: object expected");
                    message.data[i] = $root.msg.PbMsgUpdateRoleRankingLevel.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgUpdateRoleMRankingLevel message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @static
         * @param {msg.PbMsgUpdateRoleMRankingLevel} message PbMsgUpdateRoleMRankingLevel
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgUpdateRoleMRankingLevel.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.PbMsgUpdateRoleRankingLevel.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgUpdateRoleMRankingLevel to JSON.
         * @function toJSON
         * @memberof msg.PbMsgUpdateRoleMRankingLevel
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgUpdateRoleMRankingLevel.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgUpdateRoleMRankingLevel.MSG
         * @enum {string}
         * @property {number} ID=713 ID value
         */
        PbMsgUpdateRoleMRankingLevel.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[713] = "ID"] = 713;
            return values;
        })();

        return PbMsgUpdateRoleMRankingLevel;
    })();

    msg.PbMsgGetRankingData = (function() {

        /**
         * Properties of a PbMsgGetRankingData.
         * @memberof msg
         * @interface IPbMsgGetRankingData
         * @property {number} type PbMsgGetRankingData type
         * @property {number} bIndex PbMsgGetRankingData bIndex
         * @property {number} num PbMsgGetRankingData num
         */

        /**
         * Constructs a new PbMsgGetRankingData.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRankingData.
         * @implements IPbMsgGetRankingData
         * @constructor
         * @param {msg.IPbMsgGetRankingData=} [properties] Properties to set
         */
        function PbMsgGetRankingData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRankingData type.
         * @member {number} type
         * @memberof msg.PbMsgGetRankingData
         * @instance
         */
        PbMsgGetRankingData.prototype.type = 0;

        /**
         * PbMsgGetRankingData bIndex.
         * @member {number} bIndex
         * @memberof msg.PbMsgGetRankingData
         * @instance
         */
        PbMsgGetRankingData.prototype.bIndex = 0;

        /**
         * PbMsgGetRankingData num.
         * @member {number} num
         * @memberof msg.PbMsgGetRankingData
         * @instance
         */
        PbMsgGetRankingData.prototype.num = 0;

        /**
         * Creates a new PbMsgGetRankingData instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {msg.IPbMsgGetRankingData=} [properties] Properties to set
         * @returns {msg.PbMsgGetRankingData} PbMsgGetRankingData instance
         */
        PbMsgGetRankingData.create = function create(properties) {
            return new PbMsgGetRankingData(properties);
        };

        /**
         * Encodes the specified PbMsgGetRankingData message. Does not implicitly {@link msg.PbMsgGetRankingData.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {msg.IPbMsgGetRankingData} message PbMsgGetRankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRankingData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.bIndex);
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.num);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRankingData message, length delimited. Does not implicitly {@link msg.PbMsgGetRankingData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {msg.IPbMsgGetRankingData} message PbMsgGetRankingData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRankingData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRankingData message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRankingData} PbMsgGetRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRankingData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRankingData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    message.bIndex = reader.int32();
                    break;
                case 3:
                    message.num = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            if (!message.hasOwnProperty("bIndex"))
                throw $util.ProtocolError("missing required 'bIndex'", { instance: message });
            if (!message.hasOwnProperty("num"))
                throw $util.ProtocolError("missing required 'num'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRankingData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRankingData} PbMsgGetRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRankingData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRankingData message.
         * @function verify
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRankingData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (!$util.isInteger(message.bIndex))
                return "bIndex: integer expected";
            if (!$util.isInteger(message.num))
                return "num: integer expected";
            return null;
        };

        /**
         * Creates a PbMsgGetRankingData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRankingData} PbMsgGetRankingData
         */
        PbMsgGetRankingData.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRankingData)
                return object;
            var message = new $root.msg.PbMsgGetRankingData();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.bIndex != null)
                message.bIndex = object.bIndex | 0;
            if (object.num != null)
                message.num = object.num | 0;
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRankingData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRankingData
         * @static
         * @param {msg.PbMsgGetRankingData} message PbMsgGetRankingData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRankingData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = 0;
                object.bIndex = 0;
                object.num = 0;
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.bIndex != null && message.hasOwnProperty("bIndex"))
                object.bIndex = message.bIndex;
            if (message.num != null && message.hasOwnProperty("num"))
                object.num = message.num;
            return object;
        };

        /**
         * Converts this PbMsgGetRankingData to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRankingData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRankingData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRankingData.MSG
         * @enum {string}
         * @property {number} ID=5021 ID value
         */
        PbMsgGetRankingData.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5021] = "ID"] = 5021;
            return values;
        })();

        return PbMsgGetRankingData;
    })();

    msg.PbMsgGetRankingDataByRankList = (function() {

        /**
         * Properties of a PbMsgGetRankingDataByRankList.
         * @memberof msg
         * @interface IPbMsgGetRankingDataByRankList
         * @property {number} type PbMsgGetRankingDataByRankList type
         * @property {Array.<number>|null} [ranklist] PbMsgGetRankingDataByRankList ranklist
         */

        /**
         * Constructs a new PbMsgGetRankingDataByRankList.
         * @memberof msg
         * @classdesc Represents a PbMsgGetRankingDataByRankList.
         * @implements IPbMsgGetRankingDataByRankList
         * @constructor
         * @param {msg.IPbMsgGetRankingDataByRankList=} [properties] Properties to set
         */
        function PbMsgGetRankingDataByRankList(properties) {
            this.ranklist = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgGetRankingDataByRankList type.
         * @member {number} type
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @instance
         */
        PbMsgGetRankingDataByRankList.prototype.type = 0;

        /**
         * PbMsgGetRankingDataByRankList ranklist.
         * @member {Array.<number>} ranklist
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @instance
         */
        PbMsgGetRankingDataByRankList.prototype.ranklist = $util.emptyArray;

        /**
         * Creates a new PbMsgGetRankingDataByRankList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgGetRankingDataByRankList=} [properties] Properties to set
         * @returns {msg.PbMsgGetRankingDataByRankList} PbMsgGetRankingDataByRankList instance
         */
        PbMsgGetRankingDataByRankList.create = function create(properties) {
            return new PbMsgGetRankingDataByRankList(properties);
        };

        /**
         * Encodes the specified PbMsgGetRankingDataByRankList message. Does not implicitly {@link msg.PbMsgGetRankingDataByRankList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgGetRankingDataByRankList} message PbMsgGetRankingDataByRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRankingDataByRankList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.ranklist != null && message.ranklist.length)
                for (var i = 0; i < message.ranklist.length; ++i)
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ranklist[i]);
            return writer;
        };

        /**
         * Encodes the specified PbMsgGetRankingDataByRankList message, length delimited. Does not implicitly {@link msg.PbMsgGetRankingDataByRankList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgGetRankingDataByRankList} message PbMsgGetRankingDataByRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgGetRankingDataByRankList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgGetRankingDataByRankList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgGetRankingDataByRankList} PbMsgGetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRankingDataByRankList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgGetRankingDataByRankList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
                    break;
                case 2:
                    if (!(message.ranklist && message.ranklist.length))
                        message.ranklist = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ranklist.push(reader.int32());
                    } else
                        message.ranklist.push(reader.int32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("type"))
                throw $util.ProtocolError("missing required 'type'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgGetRankingDataByRankList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgGetRankingDataByRankList} PbMsgGetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgGetRankingDataByRankList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgGetRankingDataByRankList message.
         * @function verify
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgGetRankingDataByRankList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.type))
                return "type: integer expected";
            if (message.ranklist != null && message.hasOwnProperty("ranklist")) {
                if (!Array.isArray(message.ranklist))
                    return "ranklist: array expected";
                for (var i = 0; i < message.ranklist.length; ++i)
                    if (!$util.isInteger(message.ranklist[i]))
                        return "ranklist: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a PbMsgGetRankingDataByRankList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgGetRankingDataByRankList} PbMsgGetRankingDataByRankList
         */
        PbMsgGetRankingDataByRankList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgGetRankingDataByRankList)
                return object;
            var message = new $root.msg.PbMsgGetRankingDataByRankList();
            if (object.type != null)
                message.type = object.type | 0;
            if (object.ranklist) {
                if (!Array.isArray(object.ranklist))
                    throw TypeError(".msg.PbMsgGetRankingDataByRankList.ranklist: array expected");
                message.ranklist = [];
                for (var i = 0; i < object.ranklist.length; ++i)
                    message.ranklist[i] = object.ranklist[i] | 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgGetRankingDataByRankList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @static
         * @param {msg.PbMsgGetRankingDataByRankList} message PbMsgGetRankingDataByRankList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgGetRankingDataByRankList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ranklist = [];
            if (options.defaults)
                object.type = 0;
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.ranklist && message.ranklist.length) {
                object.ranklist = [];
                for (var j = 0; j < message.ranklist.length; ++j)
                    object.ranklist[j] = message.ranklist[j];
            }
            return object;
        };

        /**
         * Converts this PbMsgGetRankingDataByRankList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgGetRankingDataByRankList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgGetRankingDataByRankList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgGetRankingDataByRankList.MSG
         * @enum {string}
         * @property {number} ID=5023 ID value
         */
        PbMsgGetRankingDataByRankList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[5023] = "ID"] = 5023;
            return values;
        })();

        return PbMsgGetRankingDataByRankList;
    })();

    msg.PbMsgRetRankingDataByRankList = (function() {

        /**
         * Properties of a PbMsgRetRankingDataByRankList.
         * @memberof msg
         * @interface IPbMsgRetRankingDataByRankList
         * @property {number} retCode PbMsgRetRankingDataByRankList retCode
         * @property {Array.<msg.PbMsgRetRankingDataByRankList.IRankRole>|null} [data] PbMsgRetRankingDataByRankList data
         */

        /**
         * Constructs a new PbMsgRetRankingDataByRankList.
         * @memberof msg
         * @classdesc Represents a PbMsgRetRankingDataByRankList.
         * @implements IPbMsgRetRankingDataByRankList
         * @constructor
         * @param {msg.IPbMsgRetRankingDataByRankList=} [properties] Properties to set
         */
        function PbMsgRetRankingDataByRankList(properties) {
            this.data = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PbMsgRetRankingDataByRankList retCode.
         * @member {number} retCode
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @instance
         */
        PbMsgRetRankingDataByRankList.prototype.retCode = 0;

        /**
         * PbMsgRetRankingDataByRankList data.
         * @member {Array.<msg.PbMsgRetRankingDataByRankList.IRankRole>} data
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @instance
         */
        PbMsgRetRankingDataByRankList.prototype.data = $util.emptyArray;

        /**
         * Creates a new PbMsgRetRankingDataByRankList instance using the specified properties.
         * @function create
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgRetRankingDataByRankList=} [properties] Properties to set
         * @returns {msg.PbMsgRetRankingDataByRankList} PbMsgRetRankingDataByRankList instance
         */
        PbMsgRetRankingDataByRankList.create = function create(properties) {
            return new PbMsgRetRankingDataByRankList(properties);
        };

        /**
         * Encodes the specified PbMsgRetRankingDataByRankList message. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.verify|verify} messages.
         * @function encode
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgRetRankingDataByRankList} message PbMsgRetRankingDataByRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRankingDataByRankList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.retCode);
            if (message.data != null && message.data.length)
                for (var i = 0; i < message.data.length; ++i)
                    $root.msg.PbMsgRetRankingDataByRankList.RankRole.encode(message.data[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PbMsgRetRankingDataByRankList message, length delimited. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {msg.IPbMsgRetRankingDataByRankList} message PbMsgRetRankingDataByRankList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PbMsgRetRankingDataByRankList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PbMsgRetRankingDataByRankList message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PbMsgRetRankingDataByRankList} PbMsgRetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRankingDataByRankList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetRankingDataByRankList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.retCode = reader.int32();
                    break;
                case 2:
                    if (!(message.data && message.data.length))
                        message.data = [];
                    message.data.push($root.msg.PbMsgRetRankingDataByRankList.RankRole.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            if (!message.hasOwnProperty("retCode"))
                throw $util.ProtocolError("missing required 'retCode'", { instance: message });
            return message;
        };

        /**
         * Decodes a PbMsgRetRankingDataByRankList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PbMsgRetRankingDataByRankList} PbMsgRetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PbMsgRetRankingDataByRankList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PbMsgRetRankingDataByRankList message.
         * @function verify
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PbMsgRetRankingDataByRankList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (!$util.isInteger(message.retCode))
                return "retCode: integer expected";
            if (message.data != null && message.hasOwnProperty("data")) {
                if (!Array.isArray(message.data))
                    return "data: array expected";
                for (var i = 0; i < message.data.length; ++i) {
                    var error = $root.msg.PbMsgRetRankingDataByRankList.RankRole.verify(message.data[i]);
                    if (error)
                        return "data." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PbMsgRetRankingDataByRankList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PbMsgRetRankingDataByRankList} PbMsgRetRankingDataByRankList
         */
        PbMsgRetRankingDataByRankList.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PbMsgRetRankingDataByRankList)
                return object;
            var message = new $root.msg.PbMsgRetRankingDataByRankList();
            if (object.retCode != null)
                message.retCode = object.retCode | 0;
            if (object.data) {
                if (!Array.isArray(object.data))
                    throw TypeError(".msg.PbMsgRetRankingDataByRankList.data: array expected");
                message.data = [];
                for (var i = 0; i < object.data.length; ++i) {
                    if (typeof object.data[i] !== "object")
                        throw TypeError(".msg.PbMsgRetRankingDataByRankList.data: object expected");
                    message.data[i] = $root.msg.PbMsgRetRankingDataByRankList.RankRole.fromObject(object.data[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PbMsgRetRankingDataByRankList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @static
         * @param {msg.PbMsgRetRankingDataByRankList} message PbMsgRetRankingDataByRankList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PbMsgRetRankingDataByRankList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.data = [];
            if (options.defaults)
                object.retCode = 0;
            if (message.retCode != null && message.hasOwnProperty("retCode"))
                object.retCode = message.retCode;
            if (message.data && message.data.length) {
                object.data = [];
                for (var j = 0; j < message.data.length; ++j)
                    object.data[j] = $root.msg.PbMsgRetRankingDataByRankList.RankRole.toObject(message.data[j], options);
            }
            return object;
        };

        /**
         * Converts this PbMsgRetRankingDataByRankList to JSON.
         * @function toJSON
         * @memberof msg.PbMsgRetRankingDataByRankList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PbMsgRetRankingDataByRankList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * MSG enum.
         * @name msg.PbMsgRetRankingDataByRankList.MSG
         * @enum {string}
         * @property {number} ID=6023 ID value
         */
        PbMsgRetRankingDataByRankList.MSG = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[6023] = "ID"] = 6023;
            return values;
        })();

        PbMsgRetRankingDataByRankList.RankRole = (function() {

            /**
             * Properties of a RankRole.
             * @memberof msg.PbMsgRetRankingDataByRankList
             * @interface IRankRole
             * @property {number|Long} roleId RankRole roleId
             * @property {number} rank RankRole rank
             */

            /**
             * Constructs a new RankRole.
             * @memberof msg.PbMsgRetRankingDataByRankList
             * @classdesc Represents a RankRole.
             * @implements IRankRole
             * @constructor
             * @param {msg.PbMsgRetRankingDataByRankList.IRankRole=} [properties] Properties to set
             */
            function RankRole(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RankRole roleId.
             * @member {number|Long} roleId
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @instance
             */
            RankRole.prototype.roleId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * RankRole rank.
             * @member {number} rank
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @instance
             */
            RankRole.prototype.rank = 0;

            /**
             * Creates a new RankRole instance using the specified properties.
             * @function create
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {msg.PbMsgRetRankingDataByRankList.IRankRole=} [properties] Properties to set
             * @returns {msg.PbMsgRetRankingDataByRankList.RankRole} RankRole instance
             */
            RankRole.create = function create(properties) {
                return new RankRole(properties);
            };

            /**
             * Encodes the specified RankRole message. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.RankRole.verify|verify} messages.
             * @function encode
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {msg.PbMsgRetRankingDataByRankList.IRankRole} message RankRole message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankRole.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.roleId);
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.rank);
                return writer;
            };

            /**
             * Encodes the specified RankRole message, length delimited. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.RankRole.verify|verify} messages.
             * @function encodeDelimited
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {msg.PbMsgRetRankingDataByRankList.IRankRole} message RankRole message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RankRole.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RankRole message from the specified reader or buffer.
             * @function decode
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {msg.PbMsgRetRankingDataByRankList.RankRole} RankRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankRole.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PbMsgRetRankingDataByRankList.RankRole();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.roleId = reader.fixed64();
                        break;
                    case 2:
                        message.rank = reader.int32();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                if (!message.hasOwnProperty("roleId"))
                    throw $util.ProtocolError("missing required 'roleId'", { instance: message });
                if (!message.hasOwnProperty("rank"))
                    throw $util.ProtocolError("missing required 'rank'", { instance: message });
                return message;
            };

            /**
             * Decodes a RankRole message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {msg.PbMsgRetRankingDataByRankList.RankRole} RankRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RankRole.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RankRole message.
             * @function verify
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RankRole.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (!$util.isInteger(message.roleId) && !(message.roleId && $util.isInteger(message.roleId.low) && $util.isInteger(message.roleId.high)))
                    return "roleId: integer|Long expected";
                if (!$util.isInteger(message.rank))
                    return "rank: integer expected";
                return null;
            };

            /**
             * Creates a RankRole message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {msg.PbMsgRetRankingDataByRankList.RankRole} RankRole
             */
            RankRole.fromObject = function fromObject(object) {
                if (object instanceof $root.msg.PbMsgRetRankingDataByRankList.RankRole)
                    return object;
                var message = new $root.msg.PbMsgRetRankingDataByRankList.RankRole();
                if (object.roleId != null)
                    if ($util.Long)
                        (message.roleId = $util.Long.fromValue(object.roleId)).unsigned = false;
                    else if (typeof object.roleId === "string")
                        message.roleId = parseInt(object.roleId, 10);
                    else if (typeof object.roleId === "number")
                        message.roleId = object.roleId;
                    else if (typeof object.roleId === "object")
                        message.roleId = new $util.LongBits(object.roleId.low >>> 0, object.roleId.high >>> 0).toNumber();
                if (object.rank != null)
                    message.rank = object.rank | 0;
                return message;
            };

            /**
             * Creates a plain object from a RankRole message. Also converts values to other types if specified.
             * @function toObject
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @static
             * @param {msg.PbMsgRetRankingDataByRankList.RankRole} message RankRole
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RankRole.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        var long = new $util.Long(0, 0, false);
                        object.roleId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.roleId = options.longs === String ? "0" : 0;
                    object.rank = 0;
                }
                if (message.roleId != null && message.hasOwnProperty("roleId"))
                    if (typeof message.roleId === "number")
                        object.roleId = options.longs === String ? String(message.roleId) : message.roleId;
                    else
                        object.roleId = options.longs === String ? $util.Long.prototype.toString.call(message.roleId) : options.longs === Number ? new $util.LongBits(message.roleId.low >>> 0, message.roleId.high >>> 0).toNumber() : message.roleId;
                if (message.rank != null && message.hasOwnProperty("rank"))
                    object.rank = message.rank;
                return object;
            };

            /**
             * Converts this RankRole to JSON.
             * @function toJSON
             * @memberof msg.PbMsgRetRankingDataByRankList.RankRole
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RankRole.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return RankRole;
        })();

        return PbMsgRetRankingDataByRankList;
    })();

    return msg;
})();