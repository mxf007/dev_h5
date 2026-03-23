type Long = protobuf.Long;

/** Namespace msg. */
declare namespace msg {

    /** Properties of a PbMsgRetCode. */
    interface IPbMsgRetCode {

        /** PbMsgRetCode retCode */
        retCode: number;
    }

    /** Represents a PbMsgRetCode. */
    class PbMsgRetCode implements IPbMsgRetCode {

        /**
         * Constructs a new PbMsgRetCode.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetCode);

        /** PbMsgRetCode retCode. */
        public retCode: number;

        /**
         * Creates a new PbMsgRetCode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetCode instance
         */
        public static create(properties?: msg.IPbMsgRetCode): msg.PbMsgRetCode;

        /**
         * Encodes the specified PbMsgRetCode message. Does not implicitly {@link msg.PbMsgRetCode.verify|verify} messages.
         * @param message PbMsgRetCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetCode, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetCode message, length delimited. Does not implicitly {@link msg.PbMsgRetCode.verify|verify} messages.
         * @param message PbMsgRetCode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetCode, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetCode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetCode;

        /**
         * Decodes a PbMsgRetCode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetCode;

        /**
         * Verifies a PbMsgRetCode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetCode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetCode
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetCode;

        /**
         * Creates a plain object from a PbMsgRetCode message. Also converts values to other types if specified.
         * @param message PbMsgRetCode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetCode, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetCode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetCode {

        /** MSG enum. */
        enum MSG {
            ID = 1
        }
    }

    /** Properties of a PbMsgBeginPaidGuide. */
    interface IPbMsgBeginPaidGuide {

        /** PbMsgBeginPaidGuide number */
        number: number;
    }

    /** Represents a PbMsgBeginPaidGuide. */
    class PbMsgBeginPaidGuide implements IPbMsgBeginPaidGuide {

        /**
         * Constructs a new PbMsgBeginPaidGuide.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgBeginPaidGuide);

        /** PbMsgBeginPaidGuide number. */
        public number: number;

        /**
         * Creates a new PbMsgBeginPaidGuide instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgBeginPaidGuide instance
         */
        public static create(properties?: msg.IPbMsgBeginPaidGuide): msg.PbMsgBeginPaidGuide;

        /**
         * Encodes the specified PbMsgBeginPaidGuide message. Does not implicitly {@link msg.PbMsgBeginPaidGuide.verify|verify} messages.
         * @param message PbMsgBeginPaidGuide message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgBeginPaidGuide, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgBeginPaidGuide message, length delimited. Does not implicitly {@link msg.PbMsgBeginPaidGuide.verify|verify} messages.
         * @param message PbMsgBeginPaidGuide message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgBeginPaidGuide, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgBeginPaidGuide message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgBeginPaidGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgBeginPaidGuide;

        /**
         * Decodes a PbMsgBeginPaidGuide message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgBeginPaidGuide
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgBeginPaidGuide;

        /**
         * Verifies a PbMsgBeginPaidGuide message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgBeginPaidGuide message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgBeginPaidGuide
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgBeginPaidGuide;

        /**
         * Creates a plain object from a PbMsgBeginPaidGuide message. Also converts values to other types if specified.
         * @param message PbMsgBeginPaidGuide
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgBeginPaidGuide, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgBeginPaidGuide to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgBeginPaidGuide {

        /** MSG enum. */
        enum MSG {
            ID = 4
        }
    }

    /** Properties of a PbMsgBeginBuyItem. */
    interface IPbMsgBeginBuyItem {

        /** PbMsgBeginBuyItem itemId */
        itemId: number;

        /** PbMsgBeginBuyItem number */
        number: number;
    }

    /** Represents a PbMsgBeginBuyItem. */
    class PbMsgBeginBuyItem implements IPbMsgBeginBuyItem {

        /**
         * Constructs a new PbMsgBeginBuyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgBeginBuyItem);

        /** PbMsgBeginBuyItem itemId. */
        public itemId: number;

        /** PbMsgBeginBuyItem number. */
        public number: number;

        /**
         * Creates a new PbMsgBeginBuyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgBeginBuyItem instance
         */
        public static create(properties?: msg.IPbMsgBeginBuyItem): msg.PbMsgBeginBuyItem;

        /**
         * Encodes the specified PbMsgBeginBuyItem message. Does not implicitly {@link msg.PbMsgBeginBuyItem.verify|verify} messages.
         * @param message PbMsgBeginBuyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgBeginBuyItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgBeginBuyItem message, length delimited. Does not implicitly {@link msg.PbMsgBeginBuyItem.verify|verify} messages.
         * @param message PbMsgBeginBuyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgBeginBuyItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgBeginBuyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgBeginBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgBeginBuyItem;

        /**
         * Decodes a PbMsgBeginBuyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgBeginBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgBeginBuyItem;

        /**
         * Verifies a PbMsgBeginBuyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgBeginBuyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgBeginBuyItem
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgBeginBuyItem;

        /**
         * Creates a plain object from a PbMsgBeginBuyItem message. Also converts values to other types if specified.
         * @param message PbMsgBeginBuyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgBeginBuyItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgBeginBuyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgBeginBuyItem {

        /** MSG enum. */
        enum MSG {
            ID = 5
        }
    }

    /** Properties of a PbMsgUpdateOffline. */
    interface IPbMsgUpdateOffline {

        /** PbMsgUpdateOffline retCode */
        retCode: number;
    }

    /** Represents a PbMsgUpdateOffline. */
    class PbMsgUpdateOffline implements IPbMsgUpdateOffline {

        /**
         * Constructs a new PbMsgUpdateOffline.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateOffline);

        /** PbMsgUpdateOffline retCode. */
        public retCode: number;

        /**
         * Creates a new PbMsgUpdateOffline instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateOffline instance
         */
        public static create(properties?: msg.IPbMsgUpdateOffline): msg.PbMsgUpdateOffline;

        /**
         * Encodes the specified PbMsgUpdateOffline message. Does not implicitly {@link msg.PbMsgUpdateOffline.verify|verify} messages.
         * @param message PbMsgUpdateOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateOffline, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateOffline message, length delimited. Does not implicitly {@link msg.PbMsgUpdateOffline.verify|verify} messages.
         * @param message PbMsgUpdateOffline message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateOffline, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateOffline message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateOffline;

        /**
         * Decodes a PbMsgUpdateOffline message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateOffline
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateOffline;

        /**
         * Verifies a PbMsgUpdateOffline message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateOffline message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateOffline
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateOffline;

        /**
         * Creates a plain object from a PbMsgUpdateOffline message. Also converts values to other types if specified.
         * @param message PbMsgUpdateOffline
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateOffline, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateOffline to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateOffline {

        /** MSG enum. */
        enum MSG {
            ID = 10
        }
    }

    /** Properties of a PbMsgUpdateJson. */
    interface IPbMsgUpdateJson {

        /** PbMsgUpdateJson id */
        id: number;

        /** PbMsgUpdateJson data */
        data: string;
    }

    /** Represents a PbMsgUpdateJson. */
    class PbMsgUpdateJson implements IPbMsgUpdateJson {

        /**
         * Constructs a new PbMsgUpdateJson.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateJson);

        /** PbMsgUpdateJson id. */
        public id: number;

        /** PbMsgUpdateJson data. */
        public data: string;

        /**
         * Creates a new PbMsgUpdateJson instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateJson instance
         */
        public static create(properties?: msg.IPbMsgUpdateJson): msg.PbMsgUpdateJson;

        /**
         * Encodes the specified PbMsgUpdateJson message. Does not implicitly {@link msg.PbMsgUpdateJson.verify|verify} messages.
         * @param message PbMsgUpdateJson message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateJson, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateJson message, length delimited. Does not implicitly {@link msg.PbMsgUpdateJson.verify|verify} messages.
         * @param message PbMsgUpdateJson message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateJson, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateJson message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateJson
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateJson;

        /**
         * Decodes a PbMsgUpdateJson message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateJson
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateJson;

        /**
         * Verifies a PbMsgUpdateJson message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateJson message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateJson
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateJson;

        /**
         * Creates a plain object from a PbMsgUpdateJson message. Also converts values to other types if specified.
         * @param message PbMsgUpdateJson
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateJson, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateJson to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateJson {

        /** MSG enum. */
        enum MSG {
            ID = 11
        }
    }

    /** Properties of a PbMsgUpdateRoleList. */
    interface IPbMsgUpdateRoleList {

        /** PbMsgUpdateRoleList id */
        id: number;

        /** PbMsgUpdateRoleList roleid */
        roleid?: (number[]|null);
    }

    /** Represents a PbMsgUpdateRoleList. */
    class PbMsgUpdateRoleList implements IPbMsgUpdateRoleList {

        /**
         * Constructs a new PbMsgUpdateRoleList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateRoleList);

        /** PbMsgUpdateRoleList id. */
        public id: number;

        /** PbMsgUpdateRoleList roleid. */
        public roleid: number[];

        /**
         * Creates a new PbMsgUpdateRoleList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateRoleList instance
         */
        public static create(properties?: msg.IPbMsgUpdateRoleList): msg.PbMsgUpdateRoleList;

        /**
         * Encodes the specified PbMsgUpdateRoleList message. Does not implicitly {@link msg.PbMsgUpdateRoleList.verify|verify} messages.
         * @param message PbMsgUpdateRoleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateRoleList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateRoleList message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleList.verify|verify} messages.
         * @param message PbMsgUpdateRoleList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateRoleList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateRoleList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateRoleList;

        /**
         * Decodes a PbMsgUpdateRoleList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateRoleList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateRoleList;

        /**
         * Verifies a PbMsgUpdateRoleList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateRoleList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateRoleList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateRoleList;

        /**
         * Creates a plain object from a PbMsgUpdateRoleList message. Also converts values to other types if specified.
         * @param message PbMsgUpdateRoleList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateRoleList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateRoleList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateRoleList {

        /** MSG enum. */
        enum MSG {
            ID = 12
        }
    }

    /** Properties of a PbMsgUpdateJsonList. */
    interface IPbMsgUpdateJsonList {

        /** PbMsgUpdateJsonList datas */
        datas?: (msg.IPbMsgUpdateJson[]|null);
    }

    /** Represents a PbMsgUpdateJsonList. */
    class PbMsgUpdateJsonList implements IPbMsgUpdateJsonList {

        /**
         * Constructs a new PbMsgUpdateJsonList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateJsonList);

        /** PbMsgUpdateJsonList datas. */
        public datas: msg.IPbMsgUpdateJson[];

        /**
         * Creates a new PbMsgUpdateJsonList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateJsonList instance
         */
        public static create(properties?: msg.IPbMsgUpdateJsonList): msg.PbMsgUpdateJsonList;

        /**
         * Encodes the specified PbMsgUpdateJsonList message. Does not implicitly {@link msg.PbMsgUpdateJsonList.verify|verify} messages.
         * @param message PbMsgUpdateJsonList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateJsonList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateJsonList message, length delimited. Does not implicitly {@link msg.PbMsgUpdateJsonList.verify|verify} messages.
         * @param message PbMsgUpdateJsonList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateJsonList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateJsonList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateJsonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateJsonList;

        /**
         * Decodes a PbMsgUpdateJsonList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateJsonList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateJsonList;

        /**
         * Verifies a PbMsgUpdateJsonList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateJsonList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateJsonList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateJsonList;

        /**
         * Creates a plain object from a PbMsgUpdateJsonList message. Also converts values to other types if specified.
         * @param message PbMsgUpdateJsonList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateJsonList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateJsonList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateJsonList {

        /** MSG enum. */
        enum MSG {
            ID = 13
        }
    }

    /** Properties of a PbMsgGetAwardById. */
    interface IPbMsgGetAwardById {

        /** PbMsgGetAwardById id */
        id: number;

        /** PbMsgGetAwardById argv */
        argv?: (number[]|null);

        /** PbMsgGetAwardById time */
        time?: (number|null);
    }

    /** Represents a PbMsgGetAwardById. */
    class PbMsgGetAwardById implements IPbMsgGetAwardById {

        /**
         * Constructs a new PbMsgGetAwardById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetAwardById);

        /** PbMsgGetAwardById id. */
        public id: number;

        /** PbMsgGetAwardById argv. */
        public argv: number[];

        /** PbMsgGetAwardById time. */
        public time: number;

        /**
         * Creates a new PbMsgGetAwardById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetAwardById instance
         */
        public static create(properties?: msg.IPbMsgGetAwardById): msg.PbMsgGetAwardById;

        /**
         * Encodes the specified PbMsgGetAwardById message. Does not implicitly {@link msg.PbMsgGetAwardById.verify|verify} messages.
         * @param message PbMsgGetAwardById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetAwardById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetAwardById message, length delimited. Does not implicitly {@link msg.PbMsgGetAwardById.verify|verify} messages.
         * @param message PbMsgGetAwardById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetAwardById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetAwardById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetAwardById;

        /**
         * Decodes a PbMsgGetAwardById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetAwardById;

        /**
         * Verifies a PbMsgGetAwardById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetAwardById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetAwardById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetAwardById;

        /**
         * Creates a plain object from a PbMsgGetAwardById message. Also converts values to other types if specified.
         * @param message PbMsgGetAwardById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetAwardById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetAwardById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetAwardById {

        /** MSG enum. */
        enum MSG {
            ID = 1010
        }
    }

    /** Properties of a PbMsgRetGetAwardById. */
    interface IPbMsgRetGetAwardById {

        /** PbMsgRetGetAwardById retCode */
        retCode: number;

        /** PbMsgRetGetAwardById award */
        award?: (msg.PbMsgRetGetAwardById.IItem[]|null);

        /** PbMsgRetGetAwardById datas */
        datas?: (msg.IPbMsgUpdateJson[]|null);
    }

    /** Represents a PbMsgRetGetAwardById. */
    class PbMsgRetGetAwardById implements IPbMsgRetGetAwardById {

        /**
         * Constructs a new PbMsgRetGetAwardById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetGetAwardById);

        /** PbMsgRetGetAwardById retCode. */
        public retCode: number;

        /** PbMsgRetGetAwardById award. */
        public award: msg.PbMsgRetGetAwardById.IItem[];

        /** PbMsgRetGetAwardById datas. */
        public datas: msg.IPbMsgUpdateJson[];

        /**
         * Creates a new PbMsgRetGetAwardById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetGetAwardById instance
         */
        public static create(properties?: msg.IPbMsgRetGetAwardById): msg.PbMsgRetGetAwardById;

        /**
         * Encodes the specified PbMsgRetGetAwardById message. Does not implicitly {@link msg.PbMsgRetGetAwardById.verify|verify} messages.
         * @param message PbMsgRetGetAwardById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetGetAwardById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetGetAwardById message, length delimited. Does not implicitly {@link msg.PbMsgRetGetAwardById.verify|verify} messages.
         * @param message PbMsgRetGetAwardById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetGetAwardById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetGetAwardById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetAwardById;

        /**
         * Decodes a PbMsgRetGetAwardById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetGetAwardById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetAwardById;

        /**
         * Verifies a PbMsgRetGetAwardById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetGetAwardById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetGetAwardById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetAwardById;

        /**
         * Creates a plain object from a PbMsgRetGetAwardById message. Also converts values to other types if specified.
         * @param message PbMsgRetGetAwardById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetGetAwardById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetGetAwardById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetGetAwardById {

        /** MSG enum. */
        enum MSG {
            ID = 2010
        }

        /** Properties of an Item. */
        interface IItem {

            /** Item id */
            id: number;

            /** Item num */
            num: number;
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetGetAwardById.IItem);

            /** Item id. */
            public id: number;

            /** Item num. */
            public num: number;

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: msg.PbMsgRetGetAwardById.IItem): msg.PbMsgRetGetAwardById.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link msg.PbMsgRetGetAwardById.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetGetAwardById.IItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link msg.PbMsgRetGetAwardById.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetGetAwardById.IItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetAwardById.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetAwardById.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetAwardById.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetGetAwardById.Item, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgDoActionById. */
    interface IPbMsgDoActionById {

        /** PbMsgDoActionById id */
        id: number;

        /** PbMsgDoActionById argv */
        argv?: (number[]|null);

        /** PbMsgDoActionById time */
        time?: (number|null);
    }

    /** Represents a PbMsgDoActionById. */
    class PbMsgDoActionById implements IPbMsgDoActionById {

        /**
         * Constructs a new PbMsgDoActionById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgDoActionById);

        /** PbMsgDoActionById id. */
        public id: number;

        /** PbMsgDoActionById argv. */
        public argv: number[];

        /** PbMsgDoActionById time. */
        public time: number;

        /**
         * Creates a new PbMsgDoActionById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgDoActionById instance
         */
        public static create(properties?: msg.IPbMsgDoActionById): msg.PbMsgDoActionById;

        /**
         * Encodes the specified PbMsgDoActionById message. Does not implicitly {@link msg.PbMsgDoActionById.verify|verify} messages.
         * @param message PbMsgDoActionById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgDoActionById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgDoActionById message, length delimited. Does not implicitly {@link msg.PbMsgDoActionById.verify|verify} messages.
         * @param message PbMsgDoActionById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgDoActionById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgDoActionById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgDoActionById;

        /**
         * Decodes a PbMsgDoActionById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgDoActionById;

        /**
         * Verifies a PbMsgDoActionById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgDoActionById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgDoActionById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgDoActionById;

        /**
         * Creates a plain object from a PbMsgDoActionById message. Also converts values to other types if specified.
         * @param message PbMsgDoActionById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgDoActionById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgDoActionById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgDoActionById {

        /** MSG enum. */
        enum MSG {
            ID = 1011
        }
    }

    /** Properties of a PbMsgRetDoActionById. */
    interface IPbMsgRetDoActionById {

        /** PbMsgRetDoActionById retCode */
        retCode: number;

        /** PbMsgRetDoActionById datas */
        datas?: (msg.IPbMsgUpdateJson[]|null);
    }

    /** Represents a PbMsgRetDoActionById. */
    class PbMsgRetDoActionById implements IPbMsgRetDoActionById {

        /**
         * Constructs a new PbMsgRetDoActionById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetDoActionById);

        /** PbMsgRetDoActionById retCode. */
        public retCode: number;

        /** PbMsgRetDoActionById datas. */
        public datas: msg.IPbMsgUpdateJson[];

        /**
         * Creates a new PbMsgRetDoActionById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetDoActionById instance
         */
        public static create(properties?: msg.IPbMsgRetDoActionById): msg.PbMsgRetDoActionById;

        /**
         * Encodes the specified PbMsgRetDoActionById message. Does not implicitly {@link msg.PbMsgRetDoActionById.verify|verify} messages.
         * @param message PbMsgRetDoActionById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetDoActionById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetDoActionById message, length delimited. Does not implicitly {@link msg.PbMsgRetDoActionById.verify|verify} messages.
         * @param message PbMsgRetDoActionById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetDoActionById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetDoActionById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetDoActionById;

        /**
         * Decodes a PbMsgRetDoActionById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetDoActionById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetDoActionById;

        /**
         * Verifies a PbMsgRetDoActionById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetDoActionById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetDoActionById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetDoActionById;

        /**
         * Creates a plain object from a PbMsgRetDoActionById message. Also converts values to other types if specified.
         * @param message PbMsgRetDoActionById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetDoActionById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetDoActionById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetDoActionById {

        /** MSG enum. */
        enum MSG {
            ID = 2011
        }
    }

    /** Properties of a PbMsgGetAiInfo. */
    interface IPbMsgGetAiInfo {

        /** PbMsgGetAiInfo roleId */
        roleId?: ((number|Long)[]|null);

        /** PbMsgGetAiInfo idx */
        idx?: (number[]|null);
    }

    /** Represents a PbMsgGetAiInfo. */
    class PbMsgGetAiInfo implements IPbMsgGetAiInfo {

        /**
         * Constructs a new PbMsgGetAiInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetAiInfo);

        /** PbMsgGetAiInfo roleId. */
        public roleId: (number|Long)[];

        /** PbMsgGetAiInfo idx. */
        public idx: number[];

        /**
         * Creates a new PbMsgGetAiInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetAiInfo instance
         */
        public static create(properties?: msg.IPbMsgGetAiInfo): msg.PbMsgGetAiInfo;

        /**
         * Encodes the specified PbMsgGetAiInfo message. Does not implicitly {@link msg.PbMsgGetAiInfo.verify|verify} messages.
         * @param message PbMsgGetAiInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetAiInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetAiInfo message, length delimited. Does not implicitly {@link msg.PbMsgGetAiInfo.verify|verify} messages.
         * @param message PbMsgGetAiInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetAiInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetAiInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetAiInfo;

        /**
         * Decodes a PbMsgGetAiInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetAiInfo;

        /**
         * Verifies a PbMsgGetAiInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetAiInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetAiInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetAiInfo;

        /**
         * Creates a plain object from a PbMsgGetAiInfo message. Also converts values to other types if specified.
         * @param message PbMsgGetAiInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetAiInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetAiInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetAiInfo {

        /** MSG enum. */
        enum MSG {
            ID = 1012
        }
    }

    /** Properties of a PbMsgRetAiInfo. */
    interface IPbMsgRetAiInfo {

        /** PbMsgRetAiInfo data */
        data?: (msg.PbMsgRetAiInfo.IAiInfo[]|null);
    }

    /** Represents a PbMsgRetAiInfo. */
    class PbMsgRetAiInfo implements IPbMsgRetAiInfo {

        /**
         * Constructs a new PbMsgRetAiInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetAiInfo);

        /** PbMsgRetAiInfo data. */
        public data: msg.PbMsgRetAiInfo.IAiInfo[];

        /**
         * Creates a new PbMsgRetAiInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetAiInfo instance
         */
        public static create(properties?: msg.IPbMsgRetAiInfo): msg.PbMsgRetAiInfo;

        /**
         * Encodes the specified PbMsgRetAiInfo message. Does not implicitly {@link msg.PbMsgRetAiInfo.verify|verify} messages.
         * @param message PbMsgRetAiInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetAiInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetAiInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetAiInfo.verify|verify} messages.
         * @param message PbMsgRetAiInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetAiInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetAiInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetAiInfo;

        /**
         * Decodes a PbMsgRetAiInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetAiInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetAiInfo;

        /**
         * Verifies a PbMsgRetAiInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetAiInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetAiInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetAiInfo;

        /**
         * Creates a plain object from a PbMsgRetAiInfo message. Also converts values to other types if specified.
         * @param message PbMsgRetAiInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetAiInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetAiInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetAiInfo {

        /** MSG enum. */
        enum MSG {
            ID = 2012
        }

        /** Properties of an AiInfo. */
        interface IAiInfo {

            /** AiInfo roleId */
            roleId: (number|Long);

            /** AiInfo roleName */
            roleName: string;

            /** AiInfo serverid */
            serverid: number;

            /** AiInfo data */
            data?: (number[]|null);
        }

        /** Represents an AiInfo. */
        class AiInfo implements IAiInfo {

            /**
             * Constructs a new AiInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetAiInfo.IAiInfo);

            /** AiInfo roleId. */
            public roleId: (number|Long);

            /** AiInfo roleName. */
            public roleName: string;

            /** AiInfo serverid. */
            public serverid: number;

            /** AiInfo data. */
            public data: number[];

            /**
             * Creates a new AiInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns AiInfo instance
             */
            public static create(properties?: msg.PbMsgRetAiInfo.IAiInfo): msg.PbMsgRetAiInfo.AiInfo;

            /**
             * Encodes the specified AiInfo message. Does not implicitly {@link msg.PbMsgRetAiInfo.AiInfo.verify|verify} messages.
             * @param message AiInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetAiInfo.IAiInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified AiInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetAiInfo.AiInfo.verify|verify} messages.
             * @param message AiInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetAiInfo.IAiInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an AiInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns AiInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetAiInfo.AiInfo;

            /**
             * Decodes an AiInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns AiInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetAiInfo.AiInfo;

            /**
             * Verifies an AiInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an AiInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns AiInfo
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetAiInfo.AiInfo;

            /**
             * Creates a plain object from an AiInfo message. Also converts values to other types if specified.
             * @param message AiInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetAiInfo.AiInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this AiInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgGetJsonById. */
    interface IPbMsgGetJsonById {

        /** PbMsgGetJsonById id */
        id: number;

        /** PbMsgGetJsonById argv */
        argv?: (number[]|null);
    }

    /** Represents a PbMsgGetJsonById. */
    class PbMsgGetJsonById implements IPbMsgGetJsonById {

        /**
         * Constructs a new PbMsgGetJsonById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetJsonById);

        /** PbMsgGetJsonById id. */
        public id: number;

        /** PbMsgGetJsonById argv. */
        public argv: number[];

        /**
         * Creates a new PbMsgGetJsonById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetJsonById instance
         */
        public static create(properties?: msg.IPbMsgGetJsonById): msg.PbMsgGetJsonById;

        /**
         * Encodes the specified PbMsgGetJsonById message. Does not implicitly {@link msg.PbMsgGetJsonById.verify|verify} messages.
         * @param message PbMsgGetJsonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetJsonById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetJsonById message, length delimited. Does not implicitly {@link msg.PbMsgGetJsonById.verify|verify} messages.
         * @param message PbMsgGetJsonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetJsonById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetJsonById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetJsonById;

        /**
         * Decodes a PbMsgGetJsonById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetJsonById;

        /**
         * Verifies a PbMsgGetJsonById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetJsonById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetJsonById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetJsonById;

        /**
         * Creates a plain object from a PbMsgGetJsonById message. Also converts values to other types if specified.
         * @param message PbMsgGetJsonById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetJsonById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetJsonById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetJsonById {

        /** MSG enum. */
        enum MSG {
            ID = 1013
        }
    }

    /** Properties of a PbMsgRetJsonById. */
    interface IPbMsgRetJsonById {

        /** PbMsgRetJsonById retCode */
        retCode: number;

        /** PbMsgRetJsonById data */
        data?: (string|null);
    }

    /** Represents a PbMsgRetJsonById. */
    class PbMsgRetJsonById implements IPbMsgRetJsonById {

        /**
         * Constructs a new PbMsgRetJsonById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetJsonById);

        /** PbMsgRetJsonById retCode. */
        public retCode: number;

        /** PbMsgRetJsonById data. */
        public data: string;

        /**
         * Creates a new PbMsgRetJsonById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetJsonById instance
         */
        public static create(properties?: msg.IPbMsgRetJsonById): msg.PbMsgRetJsonById;

        /**
         * Encodes the specified PbMsgRetJsonById message. Does not implicitly {@link msg.PbMsgRetJsonById.verify|verify} messages.
         * @param message PbMsgRetJsonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetJsonById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetJsonById message, length delimited. Does not implicitly {@link msg.PbMsgRetJsonById.verify|verify} messages.
         * @param message PbMsgRetJsonById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetJsonById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetJsonById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetJsonById;

        /**
         * Decodes a PbMsgRetJsonById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetJsonById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetJsonById;

        /**
         * Verifies a PbMsgRetJsonById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetJsonById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetJsonById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetJsonById;

        /**
         * Creates a plain object from a PbMsgRetJsonById message. Also converts values to other types if specified.
         * @param message PbMsgRetJsonById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetJsonById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetJsonById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetJsonById {

        /** MSG enum. */
        enum MSG {
            ID = 2013
        }
    }

    /** Properties of a PbMsgKillRole. */
    interface IPbMsgKillRole {

        /** PbMsgKillRole msg */
        msg: string;
    }

    /** Represents a PbMsgKillRole. */
    class PbMsgKillRole implements IPbMsgKillRole {

        /**
         * Constructs a new PbMsgKillRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgKillRole);

        /** PbMsgKillRole msg. */
        public msg: string;

        /**
         * Creates a new PbMsgKillRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgKillRole instance
         */
        public static create(properties?: msg.IPbMsgKillRole): msg.PbMsgKillRole;

        /**
         * Encodes the specified PbMsgKillRole message. Does not implicitly {@link msg.PbMsgKillRole.verify|verify} messages.
         * @param message PbMsgKillRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgKillRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgKillRole message, length delimited. Does not implicitly {@link msg.PbMsgKillRole.verify|verify} messages.
         * @param message PbMsgKillRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgKillRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgKillRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgKillRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgKillRole;

        /**
         * Decodes a PbMsgKillRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgKillRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgKillRole;

        /**
         * Verifies a PbMsgKillRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgKillRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgKillRole
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgKillRole;

        /**
         * Creates a plain object from a PbMsgKillRole message. Also converts values to other types if specified.
         * @param message PbMsgKillRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgKillRole, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgKillRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgKillRole {

        /** MSG enum. */
        enum MSG {
            ID = 1014
        }
    }

    /** Properties of a PbMsgGetShareById. */
    interface IPbMsgGetShareById {

        /** PbMsgGetShareById id */
        id: number;
    }

    /** Represents a PbMsgGetShareById. */
    class PbMsgGetShareById implements IPbMsgGetShareById {

        /**
         * Constructs a new PbMsgGetShareById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetShareById);

        /** PbMsgGetShareById id. */
        public id: number;

        /**
         * Creates a new PbMsgGetShareById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetShareById instance
         */
        public static create(properties?: msg.IPbMsgGetShareById): msg.PbMsgGetShareById;

        /**
         * Encodes the specified PbMsgGetShareById message. Does not implicitly {@link msg.PbMsgGetShareById.verify|verify} messages.
         * @param message PbMsgGetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetShareById message, length delimited. Does not implicitly {@link msg.PbMsgGetShareById.verify|verify} messages.
         * @param message PbMsgGetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetShareById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetShareById;

        /**
         * Decodes a PbMsgGetShareById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetShareById;

        /**
         * Verifies a PbMsgGetShareById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetShareById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetShareById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetShareById;

        /**
         * Creates a plain object from a PbMsgGetShareById message. Also converts values to other types if specified.
         * @param message PbMsgGetShareById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetShareById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetShareById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetShareById {

        /** MSG enum. */
        enum MSG {
            ID = 1015
        }
    }

    /** Properties of a PbMsgRetShareById. */
    interface IPbMsgRetShareById {

        /** PbMsgRetShareById data */
        data: string;
    }

    /** Represents a PbMsgRetShareById. */
    class PbMsgRetShareById implements IPbMsgRetShareById {

        /**
         * Constructs a new PbMsgRetShareById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetShareById);

        /** PbMsgRetShareById data. */
        public data: string;

        /**
         * Creates a new PbMsgRetShareById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetShareById instance
         */
        public static create(properties?: msg.IPbMsgRetShareById): msg.PbMsgRetShareById;

        /**
         * Encodes the specified PbMsgRetShareById message. Does not implicitly {@link msg.PbMsgRetShareById.verify|verify} messages.
         * @param message PbMsgRetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetShareById message, length delimited. Does not implicitly {@link msg.PbMsgRetShareById.verify|verify} messages.
         * @param message PbMsgRetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetShareById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetShareById;

        /**
         * Decodes a PbMsgRetShareById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetShareById;

        /**
         * Verifies a PbMsgRetShareById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetShareById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetShareById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetShareById;

        /**
         * Creates a plain object from a PbMsgRetShareById message. Also converts values to other types if specified.
         * @param message PbMsgRetShareById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetShareById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetShareById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetShareById {

        /** MSG enum. */
        enum MSG {
            ID = 2015
        }
    }

    /** Properties of a PbMsgSetShareById. */
    interface IPbMsgSetShareById {

        /** PbMsgSetShareById id */
        id: number;

        /** PbMsgSetShareById data */
        data: string;
    }

    /** Represents a PbMsgSetShareById. */
    class PbMsgSetShareById implements IPbMsgSetShareById {

        /**
         * Constructs a new PbMsgSetShareById.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgSetShareById);

        /** PbMsgSetShareById id. */
        public id: number;

        /** PbMsgSetShareById data. */
        public data: string;

        /**
         * Creates a new PbMsgSetShareById instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgSetShareById instance
         */
        public static create(properties?: msg.IPbMsgSetShareById): msg.PbMsgSetShareById;

        /**
         * Encodes the specified PbMsgSetShareById message. Does not implicitly {@link msg.PbMsgSetShareById.verify|verify} messages.
         * @param message PbMsgSetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgSetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgSetShareById message, length delimited. Does not implicitly {@link msg.PbMsgSetShareById.verify|verify} messages.
         * @param message PbMsgSetShareById message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgSetShareById, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgSetShareById message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgSetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgSetShareById;

        /**
         * Decodes a PbMsgSetShareById message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgSetShareById
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgSetShareById;

        /**
         * Verifies a PbMsgSetShareById message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgSetShareById message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgSetShareById
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgSetShareById;

        /**
         * Creates a plain object from a PbMsgSetShareById message. Also converts values to other types if specified.
         * @param message PbMsgSetShareById
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgSetShareById, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgSetShareById to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgSetShareById {

        /** MSG enum. */
        enum MSG {
            ID = 1016
        }
    }

    /** Properties of a PbMsgReportData. */
    interface IPbMsgReportData {

        /** PbMsgReportData id */
        id: number;

        /** PbMsgReportData subid */
        subid: number;

        /** PbMsgReportData num */
        num: number;
    }

    /** Represents a PbMsgReportData. */
    class PbMsgReportData implements IPbMsgReportData {

        /**
         * Constructs a new PbMsgReportData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgReportData);

        /** PbMsgReportData id. */
        public id: number;

        /** PbMsgReportData subid. */
        public subid: number;

        /** PbMsgReportData num. */
        public num: number;

        /**
         * Creates a new PbMsgReportData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgReportData instance
         */
        public static create(properties?: msg.IPbMsgReportData): msg.PbMsgReportData;

        /**
         * Encodes the specified PbMsgReportData message. Does not implicitly {@link msg.PbMsgReportData.verify|verify} messages.
         * @param message PbMsgReportData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgReportData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgReportData message, length delimited. Does not implicitly {@link msg.PbMsgReportData.verify|verify} messages.
         * @param message PbMsgReportData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgReportData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgReportData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgReportData;

        /**
         * Decodes a PbMsgReportData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgReportData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgReportData;

        /**
         * Verifies a PbMsgReportData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgReportData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgReportData
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgReportData;

        /**
         * Creates a plain object from a PbMsgReportData message. Also converts values to other types if specified.
         * @param message PbMsgReportData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgReportData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgReportData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgReportData {

        /** MSG enum. */
        enum MSG {
            ID = 1017
        }
    }

    /** Properties of a PbMsgRoleInfo. */
    interface IPbMsgRoleInfo {

        /** PbMsgRoleInfo roleId */
        roleId: (number|Long);

        /** PbMsgRoleInfo roleName */
        roleName: string;

        /** PbMsgRoleInfo careerId */
        careerId: number;

        /** PbMsgRoleInfo userId */
        userId: string;

        /** PbMsgRoleInfo platserver */
        platserver: number;

        /** PbMsgRoleInfo serverid */
        serverid: number;

        /** PbMsgRoleInfo createTime */
        createTime: number;

        /** PbMsgRoleInfo loginTime */
        loginTime: number;

        /** PbMsgRoleInfo logoutTime */
        logoutTime: number;

        /** PbMsgRoleInfo version */
        version?: (number|null);

        /** PbMsgRoleInfo inviter */
        inviter?: (number|Long|null);

        /** PbMsgRoleInfo serverTime */
        serverTime?: (number|null);
    }

    /** Represents a PbMsgRoleInfo. */
    class PbMsgRoleInfo implements IPbMsgRoleInfo {

        /**
         * Constructs a new PbMsgRoleInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRoleInfo);

        /** PbMsgRoleInfo roleId. */
        public roleId: (number|Long);

        /** PbMsgRoleInfo roleName. */
        public roleName: string;

        /** PbMsgRoleInfo careerId. */
        public careerId: number;

        /** PbMsgRoleInfo userId. */
        public userId: string;

        /** PbMsgRoleInfo platserver. */
        public platserver: number;

        /** PbMsgRoleInfo serverid. */
        public serverid: number;

        /** PbMsgRoleInfo createTime. */
        public createTime: number;

        /** PbMsgRoleInfo loginTime. */
        public loginTime: number;

        /** PbMsgRoleInfo logoutTime. */
        public logoutTime: number;

        /** PbMsgRoleInfo version. */
        public version: number;

        /** PbMsgRoleInfo inviter. */
        public inviter: (number|Long);

        /** PbMsgRoleInfo serverTime. */
        public serverTime: number;

        /**
         * Creates a new PbMsgRoleInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRoleInfo instance
         */
        public static create(properties?: msg.IPbMsgRoleInfo): msg.PbMsgRoleInfo;

        /**
         * Encodes the specified PbMsgRoleInfo message. Does not implicitly {@link msg.PbMsgRoleInfo.verify|verify} messages.
         * @param message PbMsgRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRoleInfo message, length delimited. Does not implicitly {@link msg.PbMsgRoleInfo.verify|verify} messages.
         * @param message PbMsgRoleInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRoleInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRoleInfo;

        /**
         * Decodes a PbMsgRoleInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRoleInfo;

        /**
         * Verifies a PbMsgRoleInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRoleInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRoleInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRoleInfo;

        /**
         * Creates a plain object from a PbMsgRoleInfo message. Also converts values to other types if specified.
         * @param message PbMsgRoleInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRoleInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRoleInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRoleInfo {

        /** MSG enum. */
        enum MSG {
            ID = 101
        }
    }

    /** Properties of a PbMsgEnterGame. */
    interface IPbMsgEnterGame {

        /** PbMsgEnterGame roleId */
        roleId: (number|Long);

        /** PbMsgEnterGame time */
        time: number;

        /** PbMsgEnterGame userKey */
        userKey: string;

        /** PbMsgEnterGame groupid */
        groupid: number;
    }

    /** Represents a PbMsgEnterGame. */
    class PbMsgEnterGame implements IPbMsgEnterGame {

        /**
         * Constructs a new PbMsgEnterGame.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgEnterGame);

        /** PbMsgEnterGame roleId. */
        public roleId: (number|Long);

        /** PbMsgEnterGame time. */
        public time: number;

        /** PbMsgEnterGame userKey. */
        public userKey: string;

        /** PbMsgEnterGame groupid. */
        public groupid: number;

        /**
         * Creates a new PbMsgEnterGame instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgEnterGame instance
         */
        public static create(properties?: msg.IPbMsgEnterGame): msg.PbMsgEnterGame;

        /**
         * Encodes the specified PbMsgEnterGame message. Does not implicitly {@link msg.PbMsgEnterGame.verify|verify} messages.
         * @param message PbMsgEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgEnterGame message, length delimited. Does not implicitly {@link msg.PbMsgEnterGame.verify|verify} messages.
         * @param message PbMsgEnterGame message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgEnterGame, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgEnterGame message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgEnterGame;

        /**
         * Decodes a PbMsgEnterGame message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgEnterGame
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgEnterGame;

        /**
         * Verifies a PbMsgEnterGame message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgEnterGame message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgEnterGame
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgEnterGame;

        /**
         * Creates a plain object from a PbMsgEnterGame message. Also converts values to other types if specified.
         * @param message PbMsgEnterGame
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgEnterGame, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgEnterGame to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgEnterGame {

        /** MSG enum. */
        enum MSG {
            ID = 1001
        }
    }

    /** Properties of a PbMsgCreateRole. */
    interface IPbMsgCreateRole {

        /** PbMsgCreateRole userId */
        userId: string;

        /** PbMsgCreateRole roleId */
        roleId: (number|Long);

        /** PbMsgCreateRole time */
        time: number;

        /** PbMsgCreateRole userKey */
        userKey: string;

        /** PbMsgCreateRole serverId */
        serverId: number;

        /** PbMsgCreateRole groupid */
        groupid: number;

        /** PbMsgCreateRole platid */
        platid: number;

        /** PbMsgCreateRole platserver */
        platserver: number;

        /** PbMsgCreateRole name */
        name: string;

        /** PbMsgCreateRole careerId */
        careerId: number;

        /** PbMsgCreateRole headurl */
        headurl?: (string|null);

        /** PbMsgCreateRole ext */
        ext?: (number|null);
    }

    /** Represents a PbMsgCreateRole. */
    class PbMsgCreateRole implements IPbMsgCreateRole {

        /**
         * Constructs a new PbMsgCreateRole.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgCreateRole);

        /** PbMsgCreateRole userId. */
        public userId: string;

        /** PbMsgCreateRole roleId. */
        public roleId: (number|Long);

        /** PbMsgCreateRole time. */
        public time: number;

        /** PbMsgCreateRole userKey. */
        public userKey: string;

        /** PbMsgCreateRole serverId. */
        public serverId: number;

        /** PbMsgCreateRole groupid. */
        public groupid: number;

        /** PbMsgCreateRole platid. */
        public platid: number;

        /** PbMsgCreateRole platserver. */
        public platserver: number;

        /** PbMsgCreateRole name. */
        public name: string;

        /** PbMsgCreateRole careerId. */
        public careerId: number;

        /** PbMsgCreateRole headurl. */
        public headurl: string;

        /** PbMsgCreateRole ext. */
        public ext: number;

        /**
         * Creates a new PbMsgCreateRole instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgCreateRole instance
         */
        public static create(properties?: msg.IPbMsgCreateRole): msg.PbMsgCreateRole;

        /**
         * Encodes the specified PbMsgCreateRole message. Does not implicitly {@link msg.PbMsgCreateRole.verify|verify} messages.
         * @param message PbMsgCreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgCreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgCreateRole message, length delimited. Does not implicitly {@link msg.PbMsgCreateRole.verify|verify} messages.
         * @param message PbMsgCreateRole message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgCreateRole, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgCreateRole message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgCreateRole;

        /**
         * Decodes a PbMsgCreateRole message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgCreateRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgCreateRole;

        /**
         * Verifies a PbMsgCreateRole message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgCreateRole message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgCreateRole
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgCreateRole;

        /**
         * Creates a plain object from a PbMsgCreateRole message. Also converts values to other types if specified.
         * @param message PbMsgCreateRole
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgCreateRole, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgCreateRole to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgCreateRole {

        /** MSG enum. */
        enum MSG {
            ID = 1002
        }
    }

    /** Properties of a PbMsgSetName. */
    interface IPbMsgSetName {

        /** PbMsgSetName name */
        name: string;
    }

    /** Represents a PbMsgSetName. */
    class PbMsgSetName implements IPbMsgSetName {

        /**
         * Constructs a new PbMsgSetName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgSetName);

        /** PbMsgSetName name. */
        public name: string;

        /**
         * Creates a new PbMsgSetName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgSetName instance
         */
        public static create(properties?: msg.IPbMsgSetName): msg.PbMsgSetName;

        /**
         * Encodes the specified PbMsgSetName message. Does not implicitly {@link msg.PbMsgSetName.verify|verify} messages.
         * @param message PbMsgSetName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgSetName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgSetName message, length delimited. Does not implicitly {@link msg.PbMsgSetName.verify|verify} messages.
         * @param message PbMsgSetName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgSetName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgSetName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgSetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgSetName;

        /**
         * Decodes a PbMsgSetName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgSetName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgSetName;

        /**
         * Verifies a PbMsgSetName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgSetName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgSetName
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgSetName;

        /**
         * Creates a plain object from a PbMsgSetName message. Also converts values to other types if specified.
         * @param message PbMsgSetName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgSetName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgSetName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgSetName {

        /** MSG enum. */
        enum MSG {
            ID = 1021
        }
    }

    /** Properties of a PbMsgSetHead. */
    interface IPbMsgSetHead {

        /** PbMsgSetHead headurl */
        headurl: string;
    }

    /** Represents a PbMsgSetHead. */
    class PbMsgSetHead implements IPbMsgSetHead {

        /**
         * Constructs a new PbMsgSetHead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgSetHead);

        /** PbMsgSetHead headurl. */
        public headurl: string;

        /**
         * Creates a new PbMsgSetHead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgSetHead instance
         */
        public static create(properties?: msg.IPbMsgSetHead): msg.PbMsgSetHead;

        /**
         * Encodes the specified PbMsgSetHead message. Does not implicitly {@link msg.PbMsgSetHead.verify|verify} messages.
         * @param message PbMsgSetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgSetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgSetHead message, length delimited. Does not implicitly {@link msg.PbMsgSetHead.verify|verify} messages.
         * @param message PbMsgSetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgSetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgSetHead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgSetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgSetHead;

        /**
         * Decodes a PbMsgSetHead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgSetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgSetHead;

        /**
         * Verifies a PbMsgSetHead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgSetHead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgSetHead
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgSetHead;

        /**
         * Creates a plain object from a PbMsgSetHead message. Also converts values to other types if specified.
         * @param message PbMsgSetHead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgSetHead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgSetHead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgSetHead {

        /** MSG enum. */
        enum MSG {
            ID = 1022
        }
    }

    /** Properties of a PbMsgGetHead. */
    interface IPbMsgGetHead {

        /** PbMsgGetHead roleId */
        roleId: (number|Long);
    }

    /** Represents a PbMsgGetHead. */
    class PbMsgGetHead implements IPbMsgGetHead {

        /**
         * Constructs a new PbMsgGetHead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetHead);

        /** PbMsgGetHead roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new PbMsgGetHead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetHead instance
         */
        public static create(properties?: msg.IPbMsgGetHead): msg.PbMsgGetHead;

        /**
         * Encodes the specified PbMsgGetHead message. Does not implicitly {@link msg.PbMsgGetHead.verify|verify} messages.
         * @param message PbMsgGetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetHead message, length delimited. Does not implicitly {@link msg.PbMsgGetHead.verify|verify} messages.
         * @param message PbMsgGetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetHead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetHead;

        /**
         * Decodes a PbMsgGetHead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetHead;

        /**
         * Verifies a PbMsgGetHead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetHead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetHead
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetHead;

        /**
         * Creates a plain object from a PbMsgGetHead message. Also converts values to other types if specified.
         * @param message PbMsgGetHead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetHead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetHead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetHead {

        /** MSG enum. */
        enum MSG {
            ID = 1023
        }
    }

    /** Properties of a PbMsgRetHead. */
    interface IPbMsgRetHead {

        /** PbMsgRetHead headurl */
        headurl: string;
    }

    /** Represents a PbMsgRetHead. */
    class PbMsgRetHead implements IPbMsgRetHead {

        /**
         * Constructs a new PbMsgRetHead.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetHead);

        /** PbMsgRetHead headurl. */
        public headurl: string;

        /**
         * Creates a new PbMsgRetHead instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetHead instance
         */
        public static create(properties?: msg.IPbMsgRetHead): msg.PbMsgRetHead;

        /**
         * Encodes the specified PbMsgRetHead message. Does not implicitly {@link msg.PbMsgRetHead.verify|verify} messages.
         * @param message PbMsgRetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetHead message, length delimited. Does not implicitly {@link msg.PbMsgRetHead.verify|verify} messages.
         * @param message PbMsgRetHead message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetHead, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetHead message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetHead;

        /**
         * Decodes a PbMsgRetHead message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetHead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetHead;

        /**
         * Verifies a PbMsgRetHead message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetHead message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetHead
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetHead;

        /**
         * Creates a plain object from a PbMsgRetHead message. Also converts values to other types if specified.
         * @param message PbMsgRetHead
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetHead, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetHead to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetHead {

        /** MSG enum. */
        enum MSG {
            ID = 2023
        }
    }

    /** Properties of a PbMsgGetChain. */
    interface IPbMsgGetChain {

        /** PbMsgGetChain type */
        type: number;

        /** PbMsgGetChain bIndex */
        bIndex: number;

        /** PbMsgGetChain num */
        num: number;
    }

    /** Represents a PbMsgGetChain. */
    class PbMsgGetChain implements IPbMsgGetChain {

        /**
         * Constructs a new PbMsgGetChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetChain);

        /** PbMsgGetChain type. */
        public type: number;

        /** PbMsgGetChain bIndex. */
        public bIndex: number;

        /** PbMsgGetChain num. */
        public num: number;

        /**
         * Creates a new PbMsgGetChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetChain instance
         */
        public static create(properties?: msg.IPbMsgGetChain): msg.PbMsgGetChain;

        /**
         * Encodes the specified PbMsgGetChain message. Does not implicitly {@link msg.PbMsgGetChain.verify|verify} messages.
         * @param message PbMsgGetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetChain message, length delimited. Does not implicitly {@link msg.PbMsgGetChain.verify|verify} messages.
         * @param message PbMsgGetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetChain;

        /**
         * Decodes a PbMsgGetChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetChain;

        /**
         * Verifies a PbMsgGetChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetChain
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetChain;

        /**
         * Creates a plain object from a PbMsgGetChain message. Also converts values to other types if specified.
         * @param message PbMsgGetChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetChain, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetChain {

        /** MSG enum. */
        enum MSG {
            ID = 1024
        }
    }

    /** Properties of a PbMsgRetChain. */
    interface IPbMsgRetChain {

        /** PbMsgRetChain type */
        type: number;

        /** PbMsgRetChain bIndex */
        bIndex: number;

        /** PbMsgRetChain roleid */
        roleid?: (number[]|null);
    }

    /** Represents a PbMsgRetChain. */
    class PbMsgRetChain implements IPbMsgRetChain {

        /**
         * Constructs a new PbMsgRetChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetChain);

        /** PbMsgRetChain type. */
        public type: number;

        /** PbMsgRetChain bIndex. */
        public bIndex: number;

        /** PbMsgRetChain roleid. */
        public roleid: number[];

        /**
         * Creates a new PbMsgRetChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetChain instance
         */
        public static create(properties?: msg.IPbMsgRetChain): msg.PbMsgRetChain;

        /**
         * Encodes the specified PbMsgRetChain message. Does not implicitly {@link msg.PbMsgRetChain.verify|verify} messages.
         * @param message PbMsgRetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetChain message, length delimited. Does not implicitly {@link msg.PbMsgRetChain.verify|verify} messages.
         * @param message PbMsgRetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetChain;

        /**
         * Decodes a PbMsgRetChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetChain;

        /**
         * Verifies a PbMsgRetChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetChain
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetChain;

        /**
         * Creates a plain object from a PbMsgRetChain message. Also converts values to other types if specified.
         * @param message PbMsgRetChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetChain, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetChain {

        /** MSG enum. */
        enum MSG {
            ID = 2024
        }
    }

    /** Properties of a PbMsgSetChain. */
    interface IPbMsgSetChain {

        /** PbMsgSetChain type */
        type: number;

        /** PbMsgSetChain roleId */
        roleId: number;

        /** PbMsgSetChain action */
        action: number;
    }

    /** Represents a PbMsgSetChain. */
    class PbMsgSetChain implements IPbMsgSetChain {

        /**
         * Constructs a new PbMsgSetChain.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgSetChain);

        /** PbMsgSetChain type. */
        public type: number;

        /** PbMsgSetChain roleId. */
        public roleId: number;

        /** PbMsgSetChain action. */
        public action: number;

        /**
         * Creates a new PbMsgSetChain instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgSetChain instance
         */
        public static create(properties?: msg.IPbMsgSetChain): msg.PbMsgSetChain;

        /**
         * Encodes the specified PbMsgSetChain message. Does not implicitly {@link msg.PbMsgSetChain.verify|verify} messages.
         * @param message PbMsgSetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgSetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgSetChain message, length delimited. Does not implicitly {@link msg.PbMsgSetChain.verify|verify} messages.
         * @param message PbMsgSetChain message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgSetChain, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgSetChain message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgSetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgSetChain;

        /**
         * Decodes a PbMsgSetChain message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgSetChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgSetChain;

        /**
         * Verifies a PbMsgSetChain message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgSetChain message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgSetChain
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgSetChain;

        /**
         * Creates a plain object from a PbMsgSetChain message. Also converts values to other types if specified.
         * @param message PbMsgSetChain
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgSetChain, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgSetChain to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgSetChain {

        /** MSG enum. */
        enum MSG {
            ID = 1025
        }
    }

    /** Properties of a PbMsgAdminCommand. */
    interface IPbMsgAdminCommand {

        /** PbMsgAdminCommand cmd */
        cmd: string;

        /** PbMsgAdminCommand parms */
        parms?: (string[]|null);
    }

    /** Represents a PbMsgAdminCommand. */
    class PbMsgAdminCommand implements IPbMsgAdminCommand {

        /**
         * Constructs a new PbMsgAdminCommand.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgAdminCommand);

        /** PbMsgAdminCommand cmd. */
        public cmd: string;

        /** PbMsgAdminCommand parms. */
        public parms: string[];

        /**
         * Creates a new PbMsgAdminCommand instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgAdminCommand instance
         */
        public static create(properties?: msg.IPbMsgAdminCommand): msg.PbMsgAdminCommand;

        /**
         * Encodes the specified PbMsgAdminCommand message. Does not implicitly {@link msg.PbMsgAdminCommand.verify|verify} messages.
         * @param message PbMsgAdminCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgAdminCommand, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgAdminCommand message, length delimited. Does not implicitly {@link msg.PbMsgAdminCommand.verify|verify} messages.
         * @param message PbMsgAdminCommand message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgAdminCommand, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgAdminCommand message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgAdminCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgAdminCommand;

        /**
         * Decodes a PbMsgAdminCommand message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgAdminCommand
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgAdminCommand;

        /**
         * Verifies a PbMsgAdminCommand message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgAdminCommand message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgAdminCommand
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgAdminCommand;

        /**
         * Creates a plain object from a PbMsgAdminCommand message. Also converts values to other types if specified.
         * @param message PbMsgAdminCommand
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgAdminCommand, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgAdminCommand to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgAdminCommand {

        /** MSG enum. */
        enum MSG {
            ID = 3961
        }
    }

    /** Properties of a PbMsgBuyItem. */
    interface IPbMsgBuyItem {

        /** PbMsgBuyItem itemid */
        itemid: number;

        /** PbMsgBuyItem num */
        num: number;

        /** PbMsgBuyItem money */
        money: number;
    }

    /** Represents a PbMsgBuyItem. */
    class PbMsgBuyItem implements IPbMsgBuyItem {

        /**
         * Constructs a new PbMsgBuyItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgBuyItem);

        /** PbMsgBuyItem itemid. */
        public itemid: number;

        /** PbMsgBuyItem num. */
        public num: number;

        /** PbMsgBuyItem money. */
        public money: number;

        /**
         * Creates a new PbMsgBuyItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgBuyItem instance
         */
        public static create(properties?: msg.IPbMsgBuyItem): msg.PbMsgBuyItem;

        /**
         * Encodes the specified PbMsgBuyItem message. Does not implicitly {@link msg.PbMsgBuyItem.verify|verify} messages.
         * @param message PbMsgBuyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgBuyItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgBuyItem message, length delimited. Does not implicitly {@link msg.PbMsgBuyItem.verify|verify} messages.
         * @param message PbMsgBuyItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgBuyItem, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgBuyItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgBuyItem;

        /**
         * Decodes a PbMsgBuyItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgBuyItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgBuyItem;

        /**
         * Verifies a PbMsgBuyItem message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgBuyItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgBuyItem
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgBuyItem;

        /**
         * Creates a plain object from a PbMsgBuyItem message. Also converts values to other types if specified.
         * @param message PbMsgBuyItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgBuyItem, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgBuyItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgBuyItem {

        /** MSG enum. */
        enum MSG {
            ID = 5031
        }
    }

    /** Properties of a PbMsgGetRandName. */
    interface IPbMsgGetRandName {

        /** PbMsgGetRandName num */
        num: number;
    }

    /** Represents a PbMsgGetRandName. */
    class PbMsgGetRandName implements IPbMsgGetRandName {

        /**
         * Constructs a new PbMsgGetRandName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRandName);

        /** PbMsgGetRandName num. */
        public num: number;

        /**
         * Creates a new PbMsgGetRandName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRandName instance
         */
        public static create(properties?: msg.IPbMsgGetRandName): msg.PbMsgGetRandName;

        /**
         * Encodes the specified PbMsgGetRandName message. Does not implicitly {@link msg.PbMsgGetRandName.verify|verify} messages.
         * @param message PbMsgGetRandName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRandName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRandName message, length delimited. Does not implicitly {@link msg.PbMsgGetRandName.verify|verify} messages.
         * @param message PbMsgGetRandName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRandName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRandName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRandName;

        /**
         * Decodes a PbMsgGetRandName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRandName;

        /**
         * Verifies a PbMsgGetRandName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRandName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRandName
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRandName;

        /**
         * Creates a plain object from a PbMsgGetRandName message. Also converts values to other types if specified.
         * @param message PbMsgGetRandName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRandName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRandName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRandName {

        /** MSG enum. */
        enum MSG {
            ID = 5032
        }
    }

    /** Properties of a PbMsgRetGetRandName. */
    interface IPbMsgRetGetRandName {

        /** PbMsgRetGetRandName name */
        name?: (string[]|null);
    }

    /** Represents a PbMsgRetGetRandName. */
    class PbMsgRetGetRandName implements IPbMsgRetGetRandName {

        /**
         * Constructs a new PbMsgRetGetRandName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetGetRandName);

        /** PbMsgRetGetRandName name. */
        public name: string[];

        /**
         * Creates a new PbMsgRetGetRandName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetGetRandName instance
         */
        public static create(properties?: msg.IPbMsgRetGetRandName): msg.PbMsgRetGetRandName;

        /**
         * Encodes the specified PbMsgRetGetRandName message. Does not implicitly {@link msg.PbMsgRetGetRandName.verify|verify} messages.
         * @param message PbMsgRetGetRandName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetGetRandName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetGetRandName message, length delimited. Does not implicitly {@link msg.PbMsgRetGetRandName.verify|verify} messages.
         * @param message PbMsgRetGetRandName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetGetRandName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetGetRandName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetRandName;

        /**
         * Decodes a PbMsgRetGetRandName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetGetRandName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetRandName;

        /**
         * Verifies a PbMsgRetGetRandName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetGetRandName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetGetRandName
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetRandName;

        /**
         * Creates a plain object from a PbMsgRetGetRandName message. Also converts values to other types if specified.
         * @param message PbMsgRetGetRandName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetGetRandName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetGetRandName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetGetRandName {

        /** MSG enum. */
        enum MSG {
            ID = 6032
        }
    }

    /** Properties of a PbMsgGetCdkAward. */
    interface IPbMsgGetCdkAward {

        /** PbMsgGetCdkAward code */
        code: string;
    }

    /** Represents a PbMsgGetCdkAward. */
    class PbMsgGetCdkAward implements IPbMsgGetCdkAward {

        /**
         * Constructs a new PbMsgGetCdkAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetCdkAward);

        /** PbMsgGetCdkAward code. */
        public code: string;

        /**
         * Creates a new PbMsgGetCdkAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetCdkAward instance
         */
        public static create(properties?: msg.IPbMsgGetCdkAward): msg.PbMsgGetCdkAward;

        /**
         * Encodes the specified PbMsgGetCdkAward message. Does not implicitly {@link msg.PbMsgGetCdkAward.verify|verify} messages.
         * @param message PbMsgGetCdkAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetCdkAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetCdkAward message, length delimited. Does not implicitly {@link msg.PbMsgGetCdkAward.verify|verify} messages.
         * @param message PbMsgGetCdkAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetCdkAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetCdkAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetCdkAward;

        /**
         * Decodes a PbMsgGetCdkAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetCdkAward;

        /**
         * Verifies a PbMsgGetCdkAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetCdkAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetCdkAward
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetCdkAward;

        /**
         * Creates a plain object from a PbMsgGetCdkAward message. Also converts values to other types if specified.
         * @param message PbMsgGetCdkAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetCdkAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetCdkAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetCdkAward {

        /** MSG enum. */
        enum MSG {
            ID = 5033
        }
    }

    /** Properties of a PbMsgRetGetCdkAward. */
    interface IPbMsgRetGetCdkAward {

        /** PbMsgRetGetCdkAward retCode */
        retCode: number;

        /** PbMsgRetGetCdkAward award */
        award?: (msg.PbMsgRetGetCdkAward.IItem[]|null);
    }

    /** Represents a PbMsgRetGetCdkAward. */
    class PbMsgRetGetCdkAward implements IPbMsgRetGetCdkAward {

        /**
         * Constructs a new PbMsgRetGetCdkAward.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetGetCdkAward);

        /** PbMsgRetGetCdkAward retCode. */
        public retCode: number;

        /** PbMsgRetGetCdkAward award. */
        public award: msg.PbMsgRetGetCdkAward.IItem[];

        /**
         * Creates a new PbMsgRetGetCdkAward instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetGetCdkAward instance
         */
        public static create(properties?: msg.IPbMsgRetGetCdkAward): msg.PbMsgRetGetCdkAward;

        /**
         * Encodes the specified PbMsgRetGetCdkAward message. Does not implicitly {@link msg.PbMsgRetGetCdkAward.verify|verify} messages.
         * @param message PbMsgRetGetCdkAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetGetCdkAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetGetCdkAward message, length delimited. Does not implicitly {@link msg.PbMsgRetGetCdkAward.verify|verify} messages.
         * @param message PbMsgRetGetCdkAward message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetGetCdkAward, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetGetCdkAward message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetCdkAward;

        /**
         * Decodes a PbMsgRetGetCdkAward message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetGetCdkAward
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetCdkAward;

        /**
         * Verifies a PbMsgRetGetCdkAward message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetGetCdkAward message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetGetCdkAward
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetCdkAward;

        /**
         * Creates a plain object from a PbMsgRetGetCdkAward message. Also converts values to other types if specified.
         * @param message PbMsgRetGetCdkAward
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetGetCdkAward, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetGetCdkAward to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetGetCdkAward {

        /** MSG enum. */
        enum MSG {
            ID = 6033
        }

        /** Properties of an Item. */
        interface IItem {

            /** Item id */
            id: number;

            /** Item num */
            num: number;
        }

        /** Represents an Item. */
        class Item implements IItem {

            /**
             * Constructs a new Item.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetGetCdkAward.IItem);

            /** Item id. */
            public id: number;

            /** Item num. */
            public num: number;

            /**
             * Creates a new Item instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Item instance
             */
            public static create(properties?: msg.PbMsgRetGetCdkAward.IItem): msg.PbMsgRetGetCdkAward.Item;

            /**
             * Encodes the specified Item message. Does not implicitly {@link msg.PbMsgRetGetCdkAward.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetGetCdkAward.IItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified Item message, length delimited. Does not implicitly {@link msg.PbMsgRetGetCdkAward.Item.verify|verify} messages.
             * @param message Item message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetGetCdkAward.IItem, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes an Item message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetCdkAward.Item;

            /**
             * Decodes an Item message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Item
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetCdkAward.Item;

            /**
             * Verifies an Item message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Item message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Item
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetCdkAward.Item;

            /**
             * Creates a plain object from an Item message. Also converts values to other types if specified.
             * @param message Item
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetGetCdkAward.Item, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Item to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgGetRoleIdsByName. */
    interface IPbMsgGetRoleIdsByName {

        /** PbMsgGetRoleIdsByName serverid */
        serverid: number;

        /** PbMsgGetRoleIdsByName name */
        name: string;
    }

    /** Represents a PbMsgGetRoleIdsByName. */
    class PbMsgGetRoleIdsByName implements IPbMsgGetRoleIdsByName {

        /**
         * Constructs a new PbMsgGetRoleIdsByName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRoleIdsByName);

        /** PbMsgGetRoleIdsByName serverid. */
        public serverid: number;

        /** PbMsgGetRoleIdsByName name. */
        public name: string;

        /**
         * Creates a new PbMsgGetRoleIdsByName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRoleIdsByName instance
         */
        public static create(properties?: msg.IPbMsgGetRoleIdsByName): msg.PbMsgGetRoleIdsByName;

        /**
         * Encodes the specified PbMsgGetRoleIdsByName message. Does not implicitly {@link msg.PbMsgGetRoleIdsByName.verify|verify} messages.
         * @param message PbMsgGetRoleIdsByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRoleIdsByName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRoleIdsByName message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleIdsByName.verify|verify} messages.
         * @param message PbMsgGetRoleIdsByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRoleIdsByName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRoleIdsByName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRoleIdsByName;

        /**
         * Decodes a PbMsgGetRoleIdsByName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRoleIdsByName;

        /**
         * Verifies a PbMsgGetRoleIdsByName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRoleIdsByName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRoleIdsByName
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRoleIdsByName;

        /**
         * Creates a plain object from a PbMsgGetRoleIdsByName message. Also converts values to other types if specified.
         * @param message PbMsgGetRoleIdsByName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRoleIdsByName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRoleIdsByName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRoleIdsByName {

        /** MSG enum. */
        enum MSG {
            ID = 5035
        }
    }

    /** Properties of a PbMsgRetRoleIdsByName. */
    interface IPbMsgRetRoleIdsByName {

        /** PbMsgRetRoleIdsByName roleid */
        roleid: number;
    }

    /** Represents a PbMsgRetRoleIdsByName. */
    class PbMsgRetRoleIdsByName implements IPbMsgRetRoleIdsByName {

        /**
         * Constructs a new PbMsgRetRoleIdsByName.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetRoleIdsByName);

        /** PbMsgRetRoleIdsByName roleid. */
        public roleid: number;

        /**
         * Creates a new PbMsgRetRoleIdsByName instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetRoleIdsByName instance
         */
        public static create(properties?: msg.IPbMsgRetRoleIdsByName): msg.PbMsgRetRoleIdsByName;

        /**
         * Encodes the specified PbMsgRetRoleIdsByName message. Does not implicitly {@link msg.PbMsgRetRoleIdsByName.verify|verify} messages.
         * @param message PbMsgRetRoleIdsByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetRoleIdsByName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetRoleIdsByName message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByName.verify|verify} messages.
         * @param message PbMsgRetRoleIdsByName message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetRoleIdsByName, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetRoleIdsByName message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetRoleIdsByName;

        /**
         * Decodes a PbMsgRetRoleIdsByName message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetRoleIdsByName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetRoleIdsByName;

        /**
         * Verifies a PbMsgRetRoleIdsByName message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetRoleIdsByName message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetRoleIdsByName
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetRoleIdsByName;

        /**
         * Creates a plain object from a PbMsgRetRoleIdsByName message. Also converts values to other types if specified.
         * @param message PbMsgRetRoleIdsByName
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetRoleIdsByName, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetRoleIdsByName to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetRoleIdsByName {

        /** MSG enum. */
        enum MSG {
            ID = 6035
        }
    }

    /** Properties of a PbMsgGetRoleIdsByUserIds. */
    interface IPbMsgGetRoleIdsByUserIds {

        /** PbMsgGetRoleIdsByUserIds serverid */
        serverid: number;

        /** PbMsgGetRoleIdsByUserIds list */
        list?: (string[]|null);
    }

    /** Represents a PbMsgGetRoleIdsByUserIds. */
    class PbMsgGetRoleIdsByUserIds implements IPbMsgGetRoleIdsByUserIds {

        /**
         * Constructs a new PbMsgGetRoleIdsByUserIds.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRoleIdsByUserIds);

        /** PbMsgGetRoleIdsByUserIds serverid. */
        public serverid: number;

        /** PbMsgGetRoleIdsByUserIds list. */
        public list: string[];

        /**
         * Creates a new PbMsgGetRoleIdsByUserIds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRoleIdsByUserIds instance
         */
        public static create(properties?: msg.IPbMsgGetRoleIdsByUserIds): msg.PbMsgGetRoleIdsByUserIds;

        /**
         * Encodes the specified PbMsgGetRoleIdsByUserIds message. Does not implicitly {@link msg.PbMsgGetRoleIdsByUserIds.verify|verify} messages.
         * @param message PbMsgGetRoleIdsByUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRoleIdsByUserIds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRoleIdsByUserIds message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleIdsByUserIds.verify|verify} messages.
         * @param message PbMsgGetRoleIdsByUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRoleIdsByUserIds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRoleIdsByUserIds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRoleIdsByUserIds;

        /**
         * Decodes a PbMsgGetRoleIdsByUserIds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRoleIdsByUserIds;

        /**
         * Verifies a PbMsgGetRoleIdsByUserIds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRoleIdsByUserIds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRoleIdsByUserIds
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRoleIdsByUserIds;

        /**
         * Creates a plain object from a PbMsgGetRoleIdsByUserIds message. Also converts values to other types if specified.
         * @param message PbMsgGetRoleIdsByUserIds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRoleIdsByUserIds, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRoleIdsByUserIds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRoleIdsByUserIds {

        /** MSG enum. */
        enum MSG {
            ID = 5034
        }
    }

    /** Properties of a PbMsgRetRoleIdsByUserIds. */
    interface IPbMsgRetRoleIdsByUserIds {

        /** PbMsgRetRoleIdsByUserIds list */
        list?: (msg.PbMsgRetRoleIdsByUserIds.IRoleInfo[]|null);
    }

    /** Represents a PbMsgRetRoleIdsByUserIds. */
    class PbMsgRetRoleIdsByUserIds implements IPbMsgRetRoleIdsByUserIds {

        /**
         * Constructs a new PbMsgRetRoleIdsByUserIds.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetRoleIdsByUserIds);

        /** PbMsgRetRoleIdsByUserIds list. */
        public list: msg.PbMsgRetRoleIdsByUserIds.IRoleInfo[];

        /**
         * Creates a new PbMsgRetRoleIdsByUserIds instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetRoleIdsByUserIds instance
         */
        public static create(properties?: msg.IPbMsgRetRoleIdsByUserIds): msg.PbMsgRetRoleIdsByUserIds;

        /**
         * Encodes the specified PbMsgRetRoleIdsByUserIds message. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.verify|verify} messages.
         * @param message PbMsgRetRoleIdsByUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetRoleIdsByUserIds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetRoleIdsByUserIds message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.verify|verify} messages.
         * @param message PbMsgRetRoleIdsByUserIds message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetRoleIdsByUserIds, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetRoleIdsByUserIds message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetRoleIdsByUserIds;

        /**
         * Decodes a PbMsgRetRoleIdsByUserIds message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetRoleIdsByUserIds
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetRoleIdsByUserIds;

        /**
         * Verifies a PbMsgRetRoleIdsByUserIds message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetRoleIdsByUserIds message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetRoleIdsByUserIds
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetRoleIdsByUserIds;

        /**
         * Creates a plain object from a PbMsgRetRoleIdsByUserIds message. Also converts values to other types if specified.
         * @param message PbMsgRetRoleIdsByUserIds
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetRoleIdsByUserIds, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetRoleIdsByUserIds to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetRoleIdsByUserIds {

        /** MSG enum. */
        enum MSG {
            ID = 6034
        }

        /** Properties of a RoleInfo. */
        interface IRoleInfo {

            /** RoleInfo roleId */
            roleId: (number|Long);

            /** RoleInfo userId */
            userId: string;
        }

        /** Represents a RoleInfo. */
        class RoleInfo implements IRoleInfo {

            /**
             * Constructs a new RoleInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetRoleIdsByUserIds.IRoleInfo);

            /** RoleInfo roleId. */
            public roleId: (number|Long);

            /** RoleInfo userId. */
            public userId: string;

            /**
             * Creates a new RoleInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoleInfo instance
             */
            public static create(properties?: msg.PbMsgRetRoleIdsByUserIds.IRoleInfo): msg.PbMsgRetRoleIdsByUserIds.RoleInfo;

            /**
             * Encodes the specified RoleInfo message. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.RoleInfo.verify|verify} messages.
             * @param message RoleInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetRoleIdsByUserIds.IRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RoleInfo message, length delimited. Does not implicitly {@link msg.PbMsgRetRoleIdsByUserIds.RoleInfo.verify|verify} messages.
             * @param message RoleInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetRoleIdsByUserIds.IRoleInfo, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RoleInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoleInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetRoleIdsByUserIds.RoleInfo;

            /**
             * Decodes a RoleInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoleInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetRoleIdsByUserIds.RoleInfo;

            /**
             * Verifies a RoleInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoleInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoleInfo
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetRoleIdsByUserIds.RoleInfo;

            /**
             * Creates a plain object from a RoleInfo message. Also converts values to other types if specified.
             * @param message RoleInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetRoleIdsByUserIds.RoleInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoleInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgMailInfo. */
    interface IPbMsgMailInfo {

        /** PbMsgMailInfo mailId */
        mailId: (number|Long);

        /** PbMsgMailInfo subiect */
        subiect: string;

        /** PbMsgMailInfo addresserRoleId */
        addresserRoleId: (number|Long);

        /** PbMsgMailInfo addresser */
        addresser: string;

        /** PbMsgMailInfo content */
        content: string;

        /** PbMsgMailInfo appendixList */
        appendixList?: (msg.PbMsgMailInfo.IPbMsgAppendix[]|null);

        /** PbMsgMailInfo recvFlag */
        recvFlag: number;

        /** PbMsgMailInfo readFlag */
        readFlag: number;

        /** PbMsgMailInfo date */
        date: number;
    }

    /** Represents a PbMsgMailInfo. */
    class PbMsgMailInfo implements IPbMsgMailInfo {

        /**
         * Constructs a new PbMsgMailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgMailInfo);

        /** PbMsgMailInfo mailId. */
        public mailId: (number|Long);

        /** PbMsgMailInfo subiect. */
        public subiect: string;

        /** PbMsgMailInfo addresserRoleId. */
        public addresserRoleId: (number|Long);

        /** PbMsgMailInfo addresser. */
        public addresser: string;

        /** PbMsgMailInfo content. */
        public content: string;

        /** PbMsgMailInfo appendixList. */
        public appendixList: msg.PbMsgMailInfo.IPbMsgAppendix[];

        /** PbMsgMailInfo recvFlag. */
        public recvFlag: number;

        /** PbMsgMailInfo readFlag. */
        public readFlag: number;

        /** PbMsgMailInfo date. */
        public date: number;

        /**
         * Creates a new PbMsgMailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgMailInfo instance
         */
        public static create(properties?: msg.IPbMsgMailInfo): msg.PbMsgMailInfo;

        /**
         * Encodes the specified PbMsgMailInfo message. Does not implicitly {@link msg.PbMsgMailInfo.verify|verify} messages.
         * @param message PbMsgMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgMailInfo message, length delimited. Does not implicitly {@link msg.PbMsgMailInfo.verify|verify} messages.
         * @param message PbMsgMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgMailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgMailInfo;

        /**
         * Decodes a PbMsgMailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgMailInfo;

        /**
         * Verifies a PbMsgMailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgMailInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgMailInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgMailInfo;

        /**
         * Creates a plain object from a PbMsgMailInfo message. Also converts values to other types if specified.
         * @param message PbMsgMailInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgMailInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgMailInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgMailInfo {

        /** MSG enum. */
        enum MSG {
            ID = 701
        }

        /** Properties of a PbMsgAppendix. */
        interface IPbMsgAppendix {

            /** PbMsgAppendix itemId */
            itemId: number;

            /** PbMsgAppendix count */
            count: number;

            /** PbMsgAppendix uId */
            uId: (number|Long);
        }

        /** Represents a PbMsgAppendix. */
        class PbMsgAppendix implements IPbMsgAppendix {

            /**
             * Constructs a new PbMsgAppendix.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgMailInfo.IPbMsgAppendix);

            /** PbMsgAppendix itemId. */
            public itemId: number;

            /** PbMsgAppendix count. */
            public count: number;

            /** PbMsgAppendix uId. */
            public uId: (number|Long);

            /**
             * Creates a new PbMsgAppendix instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PbMsgAppendix instance
             */
            public static create(properties?: msg.PbMsgMailInfo.IPbMsgAppendix): msg.PbMsgMailInfo.PbMsgAppendix;

            /**
             * Encodes the specified PbMsgAppendix message. Does not implicitly {@link msg.PbMsgMailInfo.PbMsgAppendix.verify|verify} messages.
             * @param message PbMsgAppendix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgMailInfo.IPbMsgAppendix, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified PbMsgAppendix message, length delimited. Does not implicitly {@link msg.PbMsgMailInfo.PbMsgAppendix.verify|verify} messages.
             * @param message PbMsgAppendix message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgMailInfo.IPbMsgAppendix, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a PbMsgAppendix message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PbMsgAppendix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgMailInfo.PbMsgAppendix;

            /**
             * Decodes a PbMsgAppendix message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PbMsgAppendix
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgMailInfo.PbMsgAppendix;

            /**
             * Verifies a PbMsgAppendix message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PbMsgAppendix message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PbMsgAppendix
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgMailInfo.PbMsgAppendix;

            /**
             * Creates a plain object from a PbMsgAppendix message. Also converts values to other types if specified.
             * @param message PbMsgAppendix
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgMailInfo.PbMsgAppendix, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PbMsgAppendix to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgUpdateMailCountToClient. */
    interface IPbMsgUpdateMailCountToClient {

        /** PbMsgUpdateMailCountToClient count */
        count: number;

        /** PbMsgUpdateMailCountToClient unreadCount */
        unreadCount: number;
    }

    /** Represents a PbMsgUpdateMailCountToClient. */
    class PbMsgUpdateMailCountToClient implements IPbMsgUpdateMailCountToClient {

        /**
         * Constructs a new PbMsgUpdateMailCountToClient.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateMailCountToClient);

        /** PbMsgUpdateMailCountToClient count. */
        public count: number;

        /** PbMsgUpdateMailCountToClient unreadCount. */
        public unreadCount: number;

        /**
         * Creates a new PbMsgUpdateMailCountToClient instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateMailCountToClient instance
         */
        public static create(properties?: msg.IPbMsgUpdateMailCountToClient): msg.PbMsgUpdateMailCountToClient;

        /**
         * Encodes the specified PbMsgUpdateMailCountToClient message. Does not implicitly {@link msg.PbMsgUpdateMailCountToClient.verify|verify} messages.
         * @param message PbMsgUpdateMailCountToClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateMailCountToClient, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateMailCountToClient message, length delimited. Does not implicitly {@link msg.PbMsgUpdateMailCountToClient.verify|verify} messages.
         * @param message PbMsgUpdateMailCountToClient message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateMailCountToClient, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateMailCountToClient message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateMailCountToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateMailCountToClient;

        /**
         * Decodes a PbMsgUpdateMailCountToClient message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateMailCountToClient
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateMailCountToClient;

        /**
         * Verifies a PbMsgUpdateMailCountToClient message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateMailCountToClient message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateMailCountToClient
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateMailCountToClient;

        /**
         * Creates a plain object from a PbMsgUpdateMailCountToClient message. Also converts values to other types if specified.
         * @param message PbMsgUpdateMailCountToClient
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateMailCountToClient, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateMailCountToClient to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateMailCountToClient {

        /** MSG enum. */
        enum MSG {
            ID = 702
        }
    }

    /** Properties of a PbMsgAbstractMailInfo. */
    interface IPbMsgAbstractMailInfo {

        /** PbMsgAbstractMailInfo mailId */
        mailId: (number|Long);

        /** PbMsgAbstractMailInfo subiect */
        subiect: string;

        /** PbMsgAbstractMailInfo addresser */
        addresser: string;

        /** PbMsgAbstractMailInfo date */
        date: number;

        /** PbMsgAbstractMailInfo recvFlag */
        recvFlag: number;

        /** PbMsgAbstractMailInfo readFlag */
        readFlag: number;
    }

    /** Represents a PbMsgAbstractMailInfo. */
    class PbMsgAbstractMailInfo implements IPbMsgAbstractMailInfo {

        /**
         * Constructs a new PbMsgAbstractMailInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgAbstractMailInfo);

        /** PbMsgAbstractMailInfo mailId. */
        public mailId: (number|Long);

        /** PbMsgAbstractMailInfo subiect. */
        public subiect: string;

        /** PbMsgAbstractMailInfo addresser. */
        public addresser: string;

        /** PbMsgAbstractMailInfo date. */
        public date: number;

        /** PbMsgAbstractMailInfo recvFlag. */
        public recvFlag: number;

        /** PbMsgAbstractMailInfo readFlag. */
        public readFlag: number;

        /**
         * Creates a new PbMsgAbstractMailInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgAbstractMailInfo instance
         */
        public static create(properties?: msg.IPbMsgAbstractMailInfo): msg.PbMsgAbstractMailInfo;

        /**
         * Encodes the specified PbMsgAbstractMailInfo message. Does not implicitly {@link msg.PbMsgAbstractMailInfo.verify|verify} messages.
         * @param message PbMsgAbstractMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgAbstractMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgAbstractMailInfo message, length delimited. Does not implicitly {@link msg.PbMsgAbstractMailInfo.verify|verify} messages.
         * @param message PbMsgAbstractMailInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgAbstractMailInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgAbstractMailInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgAbstractMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgAbstractMailInfo;

        /**
         * Decodes a PbMsgAbstractMailInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgAbstractMailInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgAbstractMailInfo;

        /**
         * Verifies a PbMsgAbstractMailInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgAbstractMailInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgAbstractMailInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgAbstractMailInfo;

        /**
         * Creates a plain object from a PbMsgAbstractMailInfo message. Also converts values to other types if specified.
         * @param message PbMsgAbstractMailInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgAbstractMailInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgAbstractMailInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbMsgGetRoleMailInfoList. */
    interface IPbMsgGetRoleMailInfoList {

        /** PbMsgGetRoleMailInfoList flag */
        flag: number;

        /** PbMsgGetRoleMailInfoList index */
        index: number;
    }

    /** Represents a PbMsgGetRoleMailInfoList. */
    class PbMsgGetRoleMailInfoList implements IPbMsgGetRoleMailInfoList {

        /**
         * Constructs a new PbMsgGetRoleMailInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRoleMailInfoList);

        /** PbMsgGetRoleMailInfoList flag. */
        public flag: number;

        /** PbMsgGetRoleMailInfoList index. */
        public index: number;

        /**
         * Creates a new PbMsgGetRoleMailInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRoleMailInfoList instance
         */
        public static create(properties?: msg.IPbMsgGetRoleMailInfoList): msg.PbMsgGetRoleMailInfoList;

        /**
         * Encodes the specified PbMsgGetRoleMailInfoList message. Does not implicitly {@link msg.PbMsgGetRoleMailInfoList.verify|verify} messages.
         * @param message PbMsgGetRoleMailInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRoleMailInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRoleMailInfoList message, length delimited. Does not implicitly {@link msg.PbMsgGetRoleMailInfoList.verify|verify} messages.
         * @param message PbMsgGetRoleMailInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRoleMailInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRoleMailInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRoleMailInfoList;

        /**
         * Decodes a PbMsgGetRoleMailInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRoleMailInfoList;

        /**
         * Verifies a PbMsgGetRoleMailInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRoleMailInfoList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRoleMailInfoList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRoleMailInfoList;

        /**
         * Creates a plain object from a PbMsgGetRoleMailInfoList message. Also converts values to other types if specified.
         * @param message PbMsgGetRoleMailInfoList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRoleMailInfoList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRoleMailInfoList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRoleMailInfoList {

        /** MSG enum. */
        enum MSG {
            ID = 5001
        }
    }

    /** Properties of a PbMsgRetGetRoleMailInfoList. */
    interface IPbMsgRetGetRoleMailInfoList {

        /** PbMsgRetGetRoleMailInfoList retCode */
        retCode: number;

        /** PbMsgRetGetRoleMailInfoList abstractMailList */
        abstractMailList?: (msg.IPbMsgAbstractMailInfo[]|null);
    }

    /** Represents a PbMsgRetGetRoleMailInfoList. */
    class PbMsgRetGetRoleMailInfoList implements IPbMsgRetGetRoleMailInfoList {

        /**
         * Constructs a new PbMsgRetGetRoleMailInfoList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetGetRoleMailInfoList);

        /** PbMsgRetGetRoleMailInfoList retCode. */
        public retCode: number;

        /** PbMsgRetGetRoleMailInfoList abstractMailList. */
        public abstractMailList: msg.IPbMsgAbstractMailInfo[];

        /**
         * Creates a new PbMsgRetGetRoleMailInfoList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetGetRoleMailInfoList instance
         */
        public static create(properties?: msg.IPbMsgRetGetRoleMailInfoList): msg.PbMsgRetGetRoleMailInfoList;

        /**
         * Encodes the specified PbMsgRetGetRoleMailInfoList message. Does not implicitly {@link msg.PbMsgRetGetRoleMailInfoList.verify|verify} messages.
         * @param message PbMsgRetGetRoleMailInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetGetRoleMailInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetGetRoleMailInfoList message, length delimited. Does not implicitly {@link msg.PbMsgRetGetRoleMailInfoList.verify|verify} messages.
         * @param message PbMsgRetGetRoleMailInfoList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetGetRoleMailInfoList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetGetRoleMailInfoList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetGetRoleMailInfoList;

        /**
         * Decodes a PbMsgRetGetRoleMailInfoList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetGetRoleMailInfoList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetGetRoleMailInfoList;

        /**
         * Verifies a PbMsgRetGetRoleMailInfoList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetGetRoleMailInfoList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetGetRoleMailInfoList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetGetRoleMailInfoList;

        /**
         * Creates a plain object from a PbMsgRetGetRoleMailInfoList message. Also converts values to other types if specified.
         * @param message PbMsgRetGetRoleMailInfoList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetGetRoleMailInfoList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetGetRoleMailInfoList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetGetRoleMailInfoList {

        /** MSG enum. */
        enum MSG {
            ID = 6001
        }
    }

    /** Properties of a PbMsgReadMail. */
    interface IPbMsgReadMail {

        /** PbMsgReadMail mailId */
        mailId: (number|Long);
    }

    /** Represents a PbMsgReadMail. */
    class PbMsgReadMail implements IPbMsgReadMail {

        /**
         * Constructs a new PbMsgReadMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgReadMail);

        /** PbMsgReadMail mailId. */
        public mailId: (number|Long);

        /**
         * Creates a new PbMsgReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgReadMail instance
         */
        public static create(properties?: msg.IPbMsgReadMail): msg.PbMsgReadMail;

        /**
         * Encodes the specified PbMsgReadMail message. Does not implicitly {@link msg.PbMsgReadMail.verify|verify} messages.
         * @param message PbMsgReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgReadMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgReadMail message, length delimited. Does not implicitly {@link msg.PbMsgReadMail.verify|verify} messages.
         * @param message PbMsgReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgReadMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgReadMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgReadMail;

        /**
         * Decodes a PbMsgReadMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgReadMail;

        /**
         * Verifies a PbMsgReadMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgReadMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgReadMail
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgReadMail;

        /**
         * Creates a plain object from a PbMsgReadMail message. Also converts values to other types if specified.
         * @param message PbMsgReadMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgReadMail, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgReadMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgReadMail {

        /** MSG enum. */
        enum MSG {
            ID = 5002
        }
    }

    /** Properties of a PbMsgRetReadMail. */
    interface IPbMsgRetReadMail {

        /** PbMsgRetReadMail retCode */
        retCode: number;

        /** PbMsgRetReadMail mailInfo */
        mailInfo?: (msg.IPbMsgMailInfo|null);
    }

    /** Represents a PbMsgRetReadMail. */
    class PbMsgRetReadMail implements IPbMsgRetReadMail {

        /**
         * Constructs a new PbMsgRetReadMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetReadMail);

        /** PbMsgRetReadMail retCode. */
        public retCode: number;

        /** PbMsgRetReadMail mailInfo. */
        public mailInfo?: (msg.IPbMsgMailInfo|null);

        /**
         * Creates a new PbMsgRetReadMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetReadMail instance
         */
        public static create(properties?: msg.IPbMsgRetReadMail): msg.PbMsgRetReadMail;

        /**
         * Encodes the specified PbMsgRetReadMail message. Does not implicitly {@link msg.PbMsgRetReadMail.verify|verify} messages.
         * @param message PbMsgRetReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetReadMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetReadMail message, length delimited. Does not implicitly {@link msg.PbMsgRetReadMail.verify|verify} messages.
         * @param message PbMsgRetReadMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetReadMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetReadMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetReadMail;

        /**
         * Decodes a PbMsgRetReadMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetReadMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetReadMail;

        /**
         * Verifies a PbMsgRetReadMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetReadMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetReadMail
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetReadMail;

        /**
         * Creates a plain object from a PbMsgRetReadMail message. Also converts values to other types if specified.
         * @param message PbMsgRetReadMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetReadMail, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetReadMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetReadMail {

        /** MSG enum. */
        enum MSG {
            ID = 6002
        }
    }

    /** Properties of a PbMsgRecvMailAppendix. */
    interface IPbMsgRecvMailAppendix {

        /** PbMsgRecvMailAppendix mailId */
        mailId: (number|Long);
    }

    /** Represents a PbMsgRecvMailAppendix. */
    class PbMsgRecvMailAppendix implements IPbMsgRecvMailAppendix {

        /**
         * Constructs a new PbMsgRecvMailAppendix.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRecvMailAppendix);

        /** PbMsgRecvMailAppendix mailId. */
        public mailId: (number|Long);

        /**
         * Creates a new PbMsgRecvMailAppendix instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRecvMailAppendix instance
         */
        public static create(properties?: msg.IPbMsgRecvMailAppendix): msg.PbMsgRecvMailAppendix;

        /**
         * Encodes the specified PbMsgRecvMailAppendix message. Does not implicitly {@link msg.PbMsgRecvMailAppendix.verify|verify} messages.
         * @param message PbMsgRecvMailAppendix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRecvMailAppendix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRecvMailAppendix message, length delimited. Does not implicitly {@link msg.PbMsgRecvMailAppendix.verify|verify} messages.
         * @param message PbMsgRecvMailAppendix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRecvMailAppendix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRecvMailAppendix message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRecvMailAppendix;

        /**
         * Decodes a PbMsgRecvMailAppendix message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRecvMailAppendix;

        /**
         * Verifies a PbMsgRecvMailAppendix message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRecvMailAppendix message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRecvMailAppendix
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRecvMailAppendix;

        /**
         * Creates a plain object from a PbMsgRecvMailAppendix message. Also converts values to other types if specified.
         * @param message PbMsgRecvMailAppendix
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRecvMailAppendix, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRecvMailAppendix to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRecvMailAppendix {

        /** MSG enum. */
        enum MSG {
            ID = 5003
        }
    }

    /** Properties of a PbMsgDelMail. */
    interface IPbMsgDelMail {

        /** PbMsgDelMail mailId */
        mailId: (number|Long);
    }

    /** Represents a PbMsgDelMail. */
    class PbMsgDelMail implements IPbMsgDelMail {

        /**
         * Constructs a new PbMsgDelMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgDelMail);

        /** PbMsgDelMail mailId. */
        public mailId: (number|Long);

        /**
         * Creates a new PbMsgDelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgDelMail instance
         */
        public static create(properties?: msg.IPbMsgDelMail): msg.PbMsgDelMail;

        /**
         * Encodes the specified PbMsgDelMail message. Does not implicitly {@link msg.PbMsgDelMail.verify|verify} messages.
         * @param message PbMsgDelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgDelMail message, length delimited. Does not implicitly {@link msg.PbMsgDelMail.verify|verify} messages.
         * @param message PbMsgDelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgDelMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgDelMail;

        /**
         * Decodes a PbMsgDelMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgDelMail;

        /**
         * Verifies a PbMsgDelMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgDelMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgDelMail
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgDelMail;

        /**
         * Creates a plain object from a PbMsgDelMail message. Also converts values to other types if specified.
         * @param message PbMsgDelMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgDelMail, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgDelMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgDelMail {

        /** MSG enum. */
        enum MSG {
            ID = 5004
        }
    }

    /** Properties of a PbMsgMultiDelMail. */
    interface IPbMsgMultiDelMail {
    }

    /** Represents a PbMsgMultiDelMail. */
    class PbMsgMultiDelMail implements IPbMsgMultiDelMail {

        /**
         * Constructs a new PbMsgMultiDelMail.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgMultiDelMail);

        /**
         * Creates a new PbMsgMultiDelMail instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgMultiDelMail instance
         */
        public static create(properties?: msg.IPbMsgMultiDelMail): msg.PbMsgMultiDelMail;

        /**
         * Encodes the specified PbMsgMultiDelMail message. Does not implicitly {@link msg.PbMsgMultiDelMail.verify|verify} messages.
         * @param message PbMsgMultiDelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgMultiDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgMultiDelMail message, length delimited. Does not implicitly {@link msg.PbMsgMultiDelMail.verify|verify} messages.
         * @param message PbMsgMultiDelMail message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgMultiDelMail, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgMultiDelMail message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgMultiDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgMultiDelMail;

        /**
         * Decodes a PbMsgMultiDelMail message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgMultiDelMail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgMultiDelMail;

        /**
         * Verifies a PbMsgMultiDelMail message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgMultiDelMail message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgMultiDelMail
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgMultiDelMail;

        /**
         * Creates a plain object from a PbMsgMultiDelMail message. Also converts values to other types if specified.
         * @param message PbMsgMultiDelMail
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgMultiDelMail, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgMultiDelMail to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgMultiDelMail {

        /** MSG enum. */
        enum MSG {
            ID = 5005
        }
    }

    /** Properties of a PbMsgMultiRecvMailAppendix. */
    interface IPbMsgMultiRecvMailAppendix {

        /** PbMsgMultiRecvMailAppendix read */
        read: number;
    }

    /** Represents a PbMsgMultiRecvMailAppendix. */
    class PbMsgMultiRecvMailAppendix implements IPbMsgMultiRecvMailAppendix {

        /**
         * Constructs a new PbMsgMultiRecvMailAppendix.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgMultiRecvMailAppendix);

        /** PbMsgMultiRecvMailAppendix read. */
        public read: number;

        /**
         * Creates a new PbMsgMultiRecvMailAppendix instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgMultiRecvMailAppendix instance
         */
        public static create(properties?: msg.IPbMsgMultiRecvMailAppendix): msg.PbMsgMultiRecvMailAppendix;

        /**
         * Encodes the specified PbMsgMultiRecvMailAppendix message. Does not implicitly {@link msg.PbMsgMultiRecvMailAppendix.verify|verify} messages.
         * @param message PbMsgMultiRecvMailAppendix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgMultiRecvMailAppendix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgMultiRecvMailAppendix message, length delimited. Does not implicitly {@link msg.PbMsgMultiRecvMailAppendix.verify|verify} messages.
         * @param message PbMsgMultiRecvMailAppendix message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgMultiRecvMailAppendix, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgMultiRecvMailAppendix message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgMultiRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgMultiRecvMailAppendix;

        /**
         * Decodes a PbMsgMultiRecvMailAppendix message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgMultiRecvMailAppendix
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgMultiRecvMailAppendix;

        /**
         * Verifies a PbMsgMultiRecvMailAppendix message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgMultiRecvMailAppendix message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgMultiRecvMailAppendix
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgMultiRecvMailAppendix;

        /**
         * Creates a plain object from a PbMsgMultiRecvMailAppendix message. Also converts values to other types if specified.
         * @param message PbMsgMultiRecvMailAppendix
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgMultiRecvMailAppendix, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgMultiRecvMailAppendix to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgMultiRecvMailAppendix {

        /** MSG enum. */
        enum MSG {
            ID = 5006
        }
    }

    /** Properties of a PbMsgLoginCheck. */
    interface IPbMsgLoginCheck {

        /** PbMsgLoginCheck account */
        account: string;

        /** PbMsgLoginCheck serverId */
        serverId: number;

        /** PbMsgLoginCheck time */
        time: number;

        /** PbMsgLoginCheck sig */
        sig: string;

        /** PbMsgLoginCheck platid */
        platid?: (number|null);

        /** PbMsgLoginCheck inviter */
        inviter?: (number|Long|null);

        /** PbMsgLoginCheck linktype */
        linktype?: (string|null);
    }

    /** Represents a PbMsgLoginCheck. */
    class PbMsgLoginCheck implements IPbMsgLoginCheck {

        /**
         * Constructs a new PbMsgLoginCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginCheck);

        /** PbMsgLoginCheck account. */
        public account: string;

        /** PbMsgLoginCheck serverId. */
        public serverId: number;

        /** PbMsgLoginCheck time. */
        public time: number;

        /** PbMsgLoginCheck sig. */
        public sig: string;

        /** PbMsgLoginCheck platid. */
        public platid: number;

        /** PbMsgLoginCheck inviter. */
        public inviter: (number|Long);

        /** PbMsgLoginCheck linktype. */
        public linktype: string;

        /**
         * Creates a new PbMsgLoginCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginCheck instance
         */
        public static create(properties?: msg.IPbMsgLoginCheck): msg.PbMsgLoginCheck;

        /**
         * Encodes the specified PbMsgLoginCheck message. Does not implicitly {@link msg.PbMsgLoginCheck.verify|verify} messages.
         * @param message PbMsgLoginCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginCheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginCheck message, length delimited. Does not implicitly {@link msg.PbMsgLoginCheck.verify|verify} messages.
         * @param message PbMsgLoginCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginCheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginCheck;

        /**
         * Decodes a PbMsgLoginCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginCheck;

        /**
         * Verifies a PbMsgLoginCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginCheck
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginCheck;

        /**
         * Creates a plain object from a PbMsgLoginCheck message. Also converts values to other types if specified.
         * @param message PbMsgLoginCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginCheck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginCheck {

        /** MSG enum. */
        enum MSG {
            ID = 5041
        }
    }

    /** Properties of a PbMsgLoginRetCheck. */
    interface IPbMsgLoginRetCheck {

        /** PbMsgLoginRetCheck retCode */
        retCode: number;

        /** PbMsgLoginRetCheck roleId */
        roleId?: (number|Long|null);

        /** PbMsgLoginRetCheck host */
        host?: (string|null);

        /** PbMsgLoginRetCheck port */
        port?: (number|null);

        /** PbMsgLoginRetCheck time */
        time?: (number|null);

        /** PbMsgLoginRetCheck sig */
        sig?: (string|null);

        /** PbMsgLoginRetCheck groupid */
        groupid?: (number|null);

        /** PbMsgLoginRetCheck serverid */
        serverid?: (number|null);

        /** PbMsgLoginRetCheck platserver */
        platserver?: (number|null);
    }

    /** Represents a PbMsgLoginRetCheck. */
    class PbMsgLoginRetCheck implements IPbMsgLoginRetCheck {

        /**
         * Constructs a new PbMsgLoginRetCheck.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginRetCheck);

        /** PbMsgLoginRetCheck retCode. */
        public retCode: number;

        /** PbMsgLoginRetCheck roleId. */
        public roleId: (number|Long);

        /** PbMsgLoginRetCheck host. */
        public host: string;

        /** PbMsgLoginRetCheck port. */
        public port: number;

        /** PbMsgLoginRetCheck time. */
        public time: number;

        /** PbMsgLoginRetCheck sig. */
        public sig: string;

        /** PbMsgLoginRetCheck groupid. */
        public groupid: number;

        /** PbMsgLoginRetCheck serverid. */
        public serverid: number;

        /** PbMsgLoginRetCheck platserver. */
        public platserver: number;

        /**
         * Creates a new PbMsgLoginRetCheck instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginRetCheck instance
         */
        public static create(properties?: msg.IPbMsgLoginRetCheck): msg.PbMsgLoginRetCheck;

        /**
         * Encodes the specified PbMsgLoginRetCheck message. Does not implicitly {@link msg.PbMsgLoginRetCheck.verify|verify} messages.
         * @param message PbMsgLoginRetCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginRetCheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginRetCheck message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetCheck.verify|verify} messages.
         * @param message PbMsgLoginRetCheck message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginRetCheck, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginRetCheck message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginRetCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginRetCheck;

        /**
         * Decodes a PbMsgLoginRetCheck message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginRetCheck
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginRetCheck;

        /**
         * Verifies a PbMsgLoginRetCheck message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginRetCheck message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginRetCheck
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginRetCheck;

        /**
         * Creates a plain object from a PbMsgLoginRetCheck message. Also converts values to other types if specified.
         * @param message PbMsgLoginRetCheck
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginRetCheck, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginRetCheck to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginRetCheck {

        /** MSG enum. */
        enum MSG {
            ID = 6041
        }
    }

    /** Properties of a LoginServerInfo. */
    interface ILoginServerInfo {

        /** LoginServerInfo serverId */
        serverId: number;

        /** LoginServerInfo serverName */
        serverName: string;

        /** LoginServerInfo time */
        time?: (number|null);
    }

    /** Represents a LoginServerInfo. */
    class LoginServerInfo implements ILoginServerInfo {

        /**
         * Constructs a new LoginServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.ILoginServerInfo);

        /** LoginServerInfo serverId. */
        public serverId: number;

        /** LoginServerInfo serverName. */
        public serverName: string;

        /** LoginServerInfo time. */
        public time: number;

        /**
         * Creates a new LoginServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LoginServerInfo instance
         */
        public static create(properties?: msg.ILoginServerInfo): msg.LoginServerInfo;

        /**
         * Encodes the specified LoginServerInfo message. Does not implicitly {@link msg.LoginServerInfo.verify|verify} messages.
         * @param message LoginServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.ILoginServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified LoginServerInfo message, length delimited. Does not implicitly {@link msg.LoginServerInfo.verify|verify} messages.
         * @param message LoginServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.ILoginServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a LoginServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LoginServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.LoginServerInfo;

        /**
         * Decodes a LoginServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LoginServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.LoginServerInfo;

        /**
         * Verifies a LoginServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LoginServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LoginServerInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.LoginServerInfo;

        /**
         * Creates a plain object from a LoginServerInfo message. Also converts values to other types if specified.
         * @param message LoginServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.LoginServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LoginServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbMsgLoginGetServerInfo. */
    interface IPbMsgLoginGetServerInfo {

        /** PbMsgLoginGetServerInfo account */
        account: string;

        /** PbMsgLoginGetServerInfo platid */
        platid: number;
    }

    /** Represents a PbMsgLoginGetServerInfo. */
    class PbMsgLoginGetServerInfo implements IPbMsgLoginGetServerInfo {

        /**
         * Constructs a new PbMsgLoginGetServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginGetServerInfo);

        /** PbMsgLoginGetServerInfo account. */
        public account: string;

        /** PbMsgLoginGetServerInfo platid. */
        public platid: number;

        /**
         * Creates a new PbMsgLoginGetServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginGetServerInfo instance
         */
        public static create(properties?: msg.IPbMsgLoginGetServerInfo): msg.PbMsgLoginGetServerInfo;

        /**
         * Encodes the specified PbMsgLoginGetServerInfo message. Does not implicitly {@link msg.PbMsgLoginGetServerInfo.verify|verify} messages.
         * @param message PbMsgLoginGetServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginGetServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginGetServerInfo message, length delimited. Does not implicitly {@link msg.PbMsgLoginGetServerInfo.verify|verify} messages.
         * @param message PbMsgLoginGetServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginGetServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginGetServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginGetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginGetServerInfo;

        /**
         * Decodes a PbMsgLoginGetServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginGetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginGetServerInfo;

        /**
         * Verifies a PbMsgLoginGetServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginGetServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginGetServerInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginGetServerInfo;

        /**
         * Creates a plain object from a PbMsgLoginGetServerInfo message. Also converts values to other types if specified.
         * @param message PbMsgLoginGetServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginGetServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginGetServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginGetServerInfo {

        /** MSG enum. */
        enum MSG {
            ID = 5042
        }
    }

    /** Properties of a PbMsgLoginRetServerInfo. */
    interface IPbMsgLoginRetServerInfo {

        /** PbMsgLoginRetServerInfo newServer */
        newServer: msg.ILoginServerInfo;

        /** PbMsgLoginRetServerInfo myServer */
        myServer?: (msg.ILoginServerInfo[]|null);

        /** PbMsgLoginRetServerInfo serverSize */
        serverSize: number;

        /** PbMsgLoginRetServerInfo minnewserver */
        minnewserver?: (number|null);
    }

    /** Represents a PbMsgLoginRetServerInfo. */
    class PbMsgLoginRetServerInfo implements IPbMsgLoginRetServerInfo {

        /**
         * Constructs a new PbMsgLoginRetServerInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginRetServerInfo);

        /** PbMsgLoginRetServerInfo newServer. */
        public newServer: msg.ILoginServerInfo;

        /** PbMsgLoginRetServerInfo myServer. */
        public myServer: msg.ILoginServerInfo[];

        /** PbMsgLoginRetServerInfo serverSize. */
        public serverSize: number;

        /** PbMsgLoginRetServerInfo minnewserver. */
        public minnewserver: number;

        /**
         * Creates a new PbMsgLoginRetServerInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginRetServerInfo instance
         */
        public static create(properties?: msg.IPbMsgLoginRetServerInfo): msg.PbMsgLoginRetServerInfo;

        /**
         * Encodes the specified PbMsgLoginRetServerInfo message. Does not implicitly {@link msg.PbMsgLoginRetServerInfo.verify|verify} messages.
         * @param message PbMsgLoginRetServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginRetServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginRetServerInfo message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetServerInfo.verify|verify} messages.
         * @param message PbMsgLoginRetServerInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginRetServerInfo, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginRetServerInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginRetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginRetServerInfo;

        /**
         * Decodes a PbMsgLoginRetServerInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginRetServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginRetServerInfo;

        /**
         * Verifies a PbMsgLoginRetServerInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginRetServerInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginRetServerInfo
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginRetServerInfo;

        /**
         * Creates a plain object from a PbMsgLoginRetServerInfo message. Also converts values to other types if specified.
         * @param message PbMsgLoginRetServerInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginRetServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginRetServerInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginRetServerInfo {

        /** MSG enum. */
        enum MSG {
            ID = 6042
        }
    }

    /** Properties of a PbMsgLoginGetServerList. */
    interface IPbMsgLoginGetServerList {

        /** PbMsgLoginGetServerList platid */
        platid: number;

        /** PbMsgLoginGetServerList beginId */
        beginId: number;

        /** PbMsgLoginGetServerList endId */
        endId: number;
    }

    /** Represents a PbMsgLoginGetServerList. */
    class PbMsgLoginGetServerList implements IPbMsgLoginGetServerList {

        /**
         * Constructs a new PbMsgLoginGetServerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginGetServerList);

        /** PbMsgLoginGetServerList platid. */
        public platid: number;

        /** PbMsgLoginGetServerList beginId. */
        public beginId: number;

        /** PbMsgLoginGetServerList endId. */
        public endId: number;

        /**
         * Creates a new PbMsgLoginGetServerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginGetServerList instance
         */
        public static create(properties?: msg.IPbMsgLoginGetServerList): msg.PbMsgLoginGetServerList;

        /**
         * Encodes the specified PbMsgLoginGetServerList message. Does not implicitly {@link msg.PbMsgLoginGetServerList.verify|verify} messages.
         * @param message PbMsgLoginGetServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginGetServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginGetServerList message, length delimited. Does not implicitly {@link msg.PbMsgLoginGetServerList.verify|verify} messages.
         * @param message PbMsgLoginGetServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginGetServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginGetServerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginGetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginGetServerList;

        /**
         * Decodes a PbMsgLoginGetServerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginGetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginGetServerList;

        /**
         * Verifies a PbMsgLoginGetServerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginGetServerList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginGetServerList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginGetServerList;

        /**
         * Creates a plain object from a PbMsgLoginGetServerList message. Also converts values to other types if specified.
         * @param message PbMsgLoginGetServerList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginGetServerList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginGetServerList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginGetServerList {

        /** MSG enum. */
        enum MSG {
            ID = 5043
        }
    }

    /** Properties of a PbMsgLoginRetServerList. */
    interface IPbMsgLoginRetServerList {

        /** PbMsgLoginRetServerList data */
        data?: (msg.ILoginServerInfo[]|null);
    }

    /** Represents a PbMsgLoginRetServerList. */
    class PbMsgLoginRetServerList implements IPbMsgLoginRetServerList {

        /**
         * Constructs a new PbMsgLoginRetServerList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgLoginRetServerList);

        /** PbMsgLoginRetServerList data. */
        public data: msg.ILoginServerInfo[];

        /**
         * Creates a new PbMsgLoginRetServerList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgLoginRetServerList instance
         */
        public static create(properties?: msg.IPbMsgLoginRetServerList): msg.PbMsgLoginRetServerList;

        /**
         * Encodes the specified PbMsgLoginRetServerList message. Does not implicitly {@link msg.PbMsgLoginRetServerList.verify|verify} messages.
         * @param message PbMsgLoginRetServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgLoginRetServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgLoginRetServerList message, length delimited. Does not implicitly {@link msg.PbMsgLoginRetServerList.verify|verify} messages.
         * @param message PbMsgLoginRetServerList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgLoginRetServerList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgLoginRetServerList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgLoginRetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgLoginRetServerList;

        /**
         * Decodes a PbMsgLoginRetServerList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgLoginRetServerList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgLoginRetServerList;

        /**
         * Verifies a PbMsgLoginRetServerList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgLoginRetServerList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgLoginRetServerList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgLoginRetServerList;

        /**
         * Creates a plain object from a PbMsgLoginRetServerList message. Also converts values to other types if specified.
         * @param message PbMsgLoginRetServerList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgLoginRetServerList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgLoginRetServerList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgLoginRetServerList {

        /** MSG enum. */
        enum MSG {
            ID = 6043
        }
    }

    /** Properties of a PbMsgChatSend. */
    interface IPbMsgChatSend {

        /** PbMsgChatSend channel */
        channel: number;

        /** PbMsgChatSend type */
        type: number;

        /** PbMsgChatSend content */
        content: string;

        /** PbMsgChatSend appendContent */
        appendContent: string;
    }

    /** Represents a PbMsgChatSend. */
    class PbMsgChatSend implements IPbMsgChatSend {

        /**
         * Constructs a new PbMsgChatSend.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgChatSend);

        /** PbMsgChatSend channel. */
        public channel: number;

        /** PbMsgChatSend type. */
        public type: number;

        /** PbMsgChatSend content. */
        public content: string;

        /** PbMsgChatSend appendContent. */
        public appendContent: string;

        /**
         * Creates a new PbMsgChatSend instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgChatSend instance
         */
        public static create(properties?: msg.IPbMsgChatSend): msg.PbMsgChatSend;

        /**
         * Encodes the specified PbMsgChatSend message. Does not implicitly {@link msg.PbMsgChatSend.verify|verify} messages.
         * @param message PbMsgChatSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgChatSend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgChatSend message, length delimited. Does not implicitly {@link msg.PbMsgChatSend.verify|verify} messages.
         * @param message PbMsgChatSend message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgChatSend, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgChatSend message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgChatSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgChatSend;

        /**
         * Decodes a PbMsgChatSend message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgChatSend
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgChatSend;

        /**
         * Verifies a PbMsgChatSend message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgChatSend message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgChatSend
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgChatSend;

        /**
         * Creates a plain object from a PbMsgChatSend message. Also converts values to other types if specified.
         * @param message PbMsgChatSend
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgChatSend, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgChatSend to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgChatSend {

        /** MSG enum. */
        enum MSG {
            ID = 5061
        }
    }

    /** Properties of a PbMsgChatLog. */
    interface IPbMsgChatLog {

        /** PbMsgChatLog channel */
        channel: number;

        /** PbMsgChatLog num */
        num: number;
    }

    /** Represents a PbMsgChatLog. */
    class PbMsgChatLog implements IPbMsgChatLog {

        /**
         * Constructs a new PbMsgChatLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgChatLog);

        /** PbMsgChatLog channel. */
        public channel: number;

        /** PbMsgChatLog num. */
        public num: number;

        /**
         * Creates a new PbMsgChatLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgChatLog instance
         */
        public static create(properties?: msg.IPbMsgChatLog): msg.PbMsgChatLog;

        /**
         * Encodes the specified PbMsgChatLog message. Does not implicitly {@link msg.PbMsgChatLog.verify|verify} messages.
         * @param message PbMsgChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgChatLog message, length delimited. Does not implicitly {@link msg.PbMsgChatLog.verify|verify} messages.
         * @param message PbMsgChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgChatLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgChatLog;

        /**
         * Decodes a PbMsgChatLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgChatLog;

        /**
         * Verifies a PbMsgChatLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgChatLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgChatLog
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgChatLog;

        /**
         * Creates a plain object from a PbMsgChatLog message. Also converts values to other types if specified.
         * @param message PbMsgChatLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgChatLog, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgChatLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgChatLog {

        /** MSG enum. */
        enum MSG {
            ID = 5062
        }
    }

    /** Properties of a PbMsgRetChatLog. */
    interface IPbMsgRetChatLog {

        /** PbMsgRetChatLog data */
        data?: (msg.PbMsgRetChatLog.IChatLog[]|null);
    }

    /** Represents a PbMsgRetChatLog. */
    class PbMsgRetChatLog implements IPbMsgRetChatLog {

        /**
         * Constructs a new PbMsgRetChatLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetChatLog);

        /** PbMsgRetChatLog data. */
        public data: msg.PbMsgRetChatLog.IChatLog[];

        /**
         * Creates a new PbMsgRetChatLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetChatLog instance
         */
        public static create(properties?: msg.IPbMsgRetChatLog): msg.PbMsgRetChatLog;

        /**
         * Encodes the specified PbMsgRetChatLog message. Does not implicitly {@link msg.PbMsgRetChatLog.verify|verify} messages.
         * @param message PbMsgRetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetChatLog message, length delimited. Does not implicitly {@link msg.PbMsgRetChatLog.verify|verify} messages.
         * @param message PbMsgRetChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetChatLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetChatLog;

        /**
         * Decodes a PbMsgRetChatLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetChatLog;

        /**
         * Verifies a PbMsgRetChatLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetChatLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetChatLog
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetChatLog;

        /**
         * Creates a plain object from a PbMsgRetChatLog message. Also converts values to other types if specified.
         * @param message PbMsgRetChatLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetChatLog, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetChatLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetChatLog {

        /** MSG enum. */
        enum MSG {
            ID = 6062
        }

        /** Properties of a ChatLog. */
        interface IChatLog {

            /** ChatLog type */
            type: number;

            /** ChatLog content */
            content: string;

            /** ChatLog appendContent */
            appendContent: string;

            /** ChatLog srcRoleId */
            srcRoleId: (number|Long);

            /** ChatLog srcRoleName */
            srcRoleName: string;
        }

        /** Represents a ChatLog. */
        class ChatLog implements IChatLog {

            /**
             * Constructs a new ChatLog.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetChatLog.IChatLog);

            /** ChatLog type. */
            public type: number;

            /** ChatLog content. */
            public content: string;

            /** ChatLog appendContent. */
            public appendContent: string;

            /** ChatLog srcRoleId. */
            public srcRoleId: (number|Long);

            /** ChatLog srcRoleName. */
            public srcRoleName: string;

            /**
             * Creates a new ChatLog instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ChatLog instance
             */
            public static create(properties?: msg.PbMsgRetChatLog.IChatLog): msg.PbMsgRetChatLog.ChatLog;

            /**
             * Encodes the specified ChatLog message. Does not implicitly {@link msg.PbMsgRetChatLog.ChatLog.verify|verify} messages.
             * @param message ChatLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetChatLog.IChatLog, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified ChatLog message, length delimited. Does not implicitly {@link msg.PbMsgRetChatLog.ChatLog.verify|verify} messages.
             * @param message ChatLog message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetChatLog.IChatLog, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a ChatLog message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ChatLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetChatLog.ChatLog;

            /**
             * Decodes a ChatLog message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ChatLog
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetChatLog.ChatLog;

            /**
             * Verifies a ChatLog message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ChatLog message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ChatLog
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetChatLog.ChatLog;

            /**
             * Creates a plain object from a ChatLog message. Also converts values to other types if specified.
             * @param message ChatLog
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetChatLog.ChatLog, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ChatLog to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a PbMsgUpdateChatMessage. */
    interface IPbMsgUpdateChatMessage {

        /** PbMsgUpdateChatMessage channel */
        channel: number;

        /** PbMsgUpdateChatMessage type */
        type: number;

        /** PbMsgUpdateChatMessage content */
        content: string;

        /** PbMsgUpdateChatMessage appendContent */
        appendContent: string;

        /** PbMsgUpdateChatMessage srcRoleId */
        srcRoleId: (number|Long);

        /** PbMsgUpdateChatMessage srcRoleName */
        srcRoleName: string;
    }

    /** Represents a PbMsgUpdateChatMessage. */
    class PbMsgUpdateChatMessage implements IPbMsgUpdateChatMessage {

        /**
         * Constructs a new PbMsgUpdateChatMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateChatMessage);

        /** PbMsgUpdateChatMessage channel. */
        public channel: number;

        /** PbMsgUpdateChatMessage type. */
        public type: number;

        /** PbMsgUpdateChatMessage content. */
        public content: string;

        /** PbMsgUpdateChatMessage appendContent. */
        public appendContent: string;

        /** PbMsgUpdateChatMessage srcRoleId. */
        public srcRoleId: (number|Long);

        /** PbMsgUpdateChatMessage srcRoleName. */
        public srcRoleName: string;

        /**
         * Creates a new PbMsgUpdateChatMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateChatMessage instance
         */
        public static create(properties?: msg.IPbMsgUpdateChatMessage): msg.PbMsgUpdateChatMessage;

        /**
         * Encodes the specified PbMsgUpdateChatMessage message. Does not implicitly {@link msg.PbMsgUpdateChatMessage.verify|verify} messages.
         * @param message PbMsgUpdateChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateChatMessage message, length delimited. Does not implicitly {@link msg.PbMsgUpdateChatMessage.verify|verify} messages.
         * @param message PbMsgUpdateChatMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateChatMessage, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateChatMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateChatMessage;

        /**
         * Decodes a PbMsgUpdateChatMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateChatMessage;

        /**
         * Verifies a PbMsgUpdateChatMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateChatMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateChatMessage
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateChatMessage;

        /**
         * Creates a plain object from a PbMsgUpdateChatMessage message. Also converts values to other types if specified.
         * @param message PbMsgUpdateChatMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateChatMessage, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateChatMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateChatMessage {

        /** MSG enum. */
        enum MSG {
            ID = 721
        }
    }

    /** Properties of a PbMsgUpdateChatRetcode. */
    interface IPbMsgUpdateChatRetcode {

        /** PbMsgUpdateChatRetcode channel */
        channel: number;

        /** PbMsgUpdateChatRetcode retcode */
        retcode: number;

        /** PbMsgUpdateChatRetcode content */
        content?: (string[]|null);
    }

    /** Represents a PbMsgUpdateChatRetcode. */
    class PbMsgUpdateChatRetcode implements IPbMsgUpdateChatRetcode {

        /**
         * Constructs a new PbMsgUpdateChatRetcode.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateChatRetcode);

        /** PbMsgUpdateChatRetcode channel. */
        public channel: number;

        /** PbMsgUpdateChatRetcode retcode. */
        public retcode: number;

        /** PbMsgUpdateChatRetcode content. */
        public content: string[];

        /**
         * Creates a new PbMsgUpdateChatRetcode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateChatRetcode instance
         */
        public static create(properties?: msg.IPbMsgUpdateChatRetcode): msg.PbMsgUpdateChatRetcode;

        /**
         * Encodes the specified PbMsgUpdateChatRetcode message. Does not implicitly {@link msg.PbMsgUpdateChatRetcode.verify|verify} messages.
         * @param message PbMsgUpdateChatRetcode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateChatRetcode, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateChatRetcode message, length delimited. Does not implicitly {@link msg.PbMsgUpdateChatRetcode.verify|verify} messages.
         * @param message PbMsgUpdateChatRetcode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateChatRetcode, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateChatRetcode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateChatRetcode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateChatRetcode;

        /**
         * Decodes a PbMsgUpdateChatRetcode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateChatRetcode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateChatRetcode;

        /**
         * Verifies a PbMsgUpdateChatRetcode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateChatRetcode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateChatRetcode
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateChatRetcode;

        /**
         * Creates a plain object from a PbMsgUpdateChatRetcode message. Also converts values to other types if specified.
         * @param message PbMsgUpdateChatRetcode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateChatRetcode, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateChatRetcode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateChatRetcode {

        /** MSG enum. */
        enum MSG {
            ID = 722
        }
    }

    /** Properties of a PbMsgCleanChatLog. */
    interface IPbMsgCleanChatLog {

        /** PbMsgCleanChatLog roleId */
        roleId: (number|Long);
    }

    /** Represents a PbMsgCleanChatLog. */
    class PbMsgCleanChatLog implements IPbMsgCleanChatLog {

        /**
         * Constructs a new PbMsgCleanChatLog.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgCleanChatLog);

        /** PbMsgCleanChatLog roleId. */
        public roleId: (number|Long);

        /**
         * Creates a new PbMsgCleanChatLog instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgCleanChatLog instance
         */
        public static create(properties?: msg.IPbMsgCleanChatLog): msg.PbMsgCleanChatLog;

        /**
         * Encodes the specified PbMsgCleanChatLog message. Does not implicitly {@link msg.PbMsgCleanChatLog.verify|verify} messages.
         * @param message PbMsgCleanChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgCleanChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgCleanChatLog message, length delimited. Does not implicitly {@link msg.PbMsgCleanChatLog.verify|verify} messages.
         * @param message PbMsgCleanChatLog message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgCleanChatLog, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgCleanChatLog message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgCleanChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgCleanChatLog;

        /**
         * Decodes a PbMsgCleanChatLog message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgCleanChatLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgCleanChatLog;

        /**
         * Verifies a PbMsgCleanChatLog message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgCleanChatLog message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgCleanChatLog
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgCleanChatLog;

        /**
         * Creates a plain object from a PbMsgCleanChatLog message. Also converts values to other types if specified.
         * @param message PbMsgCleanChatLog
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgCleanChatLog, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgCleanChatLog to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgCleanChatLog {

        /** MSG enum. */
        enum MSG {
            ID = 723
        }
    }

    /** Properties of a PbMsgHeartBeat. */
    interface IPbMsgHeartBeat {

        /** PbMsgHeartBeat placeHolder */
        placeHolder: number;
    }

    /** Represents a PbMsgHeartBeat. */
    class PbMsgHeartBeat implements IPbMsgHeartBeat {

        /**
         * Constructs a new PbMsgHeartBeat.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgHeartBeat);

        /** PbMsgHeartBeat placeHolder. */
        public placeHolder: number;

        /**
         * Creates a new PbMsgHeartBeat instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgHeartBeat instance
         */
        public static create(properties?: msg.IPbMsgHeartBeat): msg.PbMsgHeartBeat;

        /**
         * Encodes the specified PbMsgHeartBeat message. Does not implicitly {@link msg.PbMsgHeartBeat.verify|verify} messages.
         * @param message PbMsgHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgHeartBeat message, length delimited. Does not implicitly {@link msg.PbMsgHeartBeat.verify|verify} messages.
         * @param message PbMsgHeartBeat message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgHeartBeat, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgHeartBeat message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgHeartBeat;

        /**
         * Decodes a PbMsgHeartBeat message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgHeartBeat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgHeartBeat;

        /**
         * Verifies a PbMsgHeartBeat message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgHeartBeat message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgHeartBeat
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgHeartBeat;

        /**
         * Creates a plain object from a PbMsgHeartBeat message. Also converts values to other types if specified.
         * @param message PbMsgHeartBeat
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgHeartBeat, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgHeartBeat to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgHeartBeat {

        /** MSG enum. */
        enum MSG {
            ID = 5000
        }
    }

    /** Properties of a RankingData. */
    interface IRankingData {

        /** RankingData roleId */
        roleId: (number|Long);

        /** RankingData name */
        name: string;

        /** RankingData data */
        data: (number|Long);

        /** RankingData additional */
        additional?: (number[]|null);
    }

    /** Represents a RankingData. */
    class RankingData implements IRankingData {

        /**
         * Constructs a new RankingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IRankingData);

        /** RankingData roleId. */
        public roleId: (number|Long);

        /** RankingData name. */
        public name: string;

        /** RankingData data. */
        public data: (number|Long);

        /** RankingData additional. */
        public additional: number[];

        /**
         * Creates a new RankingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RankingData instance
         */
        public static create(properties?: msg.IRankingData): msg.RankingData;

        /**
         * Encodes the specified RankingData message. Does not implicitly {@link msg.RankingData.verify|verify} messages.
         * @param message RankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified RankingData message, length delimited. Does not implicitly {@link msg.RankingData.verify|verify} messages.
         * @param message RankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a RankingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.RankingData;

        /**
         * Decodes a RankingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.RankingData;

        /**
         * Verifies a RankingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RankingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RankingData
         */
        public static fromObject(object: { [k: string]: any }): msg.RankingData;

        /**
         * Creates a plain object from a RankingData message. Also converts values to other types if specified.
         * @param message RankingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.RankingData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RankingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PbMsgUpdateRankingData. */
    interface IPbMsgUpdateRankingData {

        /** PbMsgUpdateRankingData type */
        type: number;

        /** PbMsgUpdateRankingData bIndex */
        bIndex: number;

        /** PbMsgUpdateRankingData data */
        data?: (msg.IRankingData[]|null);

        /** PbMsgUpdateRankingData nextpage */
        nextpage: boolean;
    }

    /** Represents a PbMsgUpdateRankingData. */
    class PbMsgUpdateRankingData implements IPbMsgUpdateRankingData {

        /**
         * Constructs a new PbMsgUpdateRankingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateRankingData);

        /** PbMsgUpdateRankingData type. */
        public type: number;

        /** PbMsgUpdateRankingData bIndex. */
        public bIndex: number;

        /** PbMsgUpdateRankingData data. */
        public data: msg.IRankingData[];

        /** PbMsgUpdateRankingData nextpage. */
        public nextpage: boolean;

        /**
         * Creates a new PbMsgUpdateRankingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateRankingData instance
         */
        public static create(properties?: msg.IPbMsgUpdateRankingData): msg.PbMsgUpdateRankingData;

        /**
         * Encodes the specified PbMsgUpdateRankingData message. Does not implicitly {@link msg.PbMsgUpdateRankingData.verify|verify} messages.
         * @param message PbMsgUpdateRankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateRankingData message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRankingData.verify|verify} messages.
         * @param message PbMsgUpdateRankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateRankingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateRankingData;

        /**
         * Decodes a PbMsgUpdateRankingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateRankingData;

        /**
         * Verifies a PbMsgUpdateRankingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateRankingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateRankingData
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateRankingData;

        /**
         * Creates a plain object from a PbMsgUpdateRankingData message. Also converts values to other types if specified.
         * @param message PbMsgUpdateRankingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateRankingData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateRankingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateRankingData {

        /** MSG enum. */
        enum MSG {
            ID = 711
        }
    }

    /** Properties of a PbMsgUpdateRoleRankingLevel. */
    interface IPbMsgUpdateRoleRankingLevel {

        /** PbMsgUpdateRoleRankingLevel type */
        type: number;

        /** PbMsgUpdateRoleRankingLevel rnkLevel */
        rnkLevel: number;
    }

    /** Represents a PbMsgUpdateRoleRankingLevel. */
    class PbMsgUpdateRoleRankingLevel implements IPbMsgUpdateRoleRankingLevel {

        /**
         * Constructs a new PbMsgUpdateRoleRankingLevel.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateRoleRankingLevel);

        /** PbMsgUpdateRoleRankingLevel type. */
        public type: number;

        /** PbMsgUpdateRoleRankingLevel rnkLevel. */
        public rnkLevel: number;

        /**
         * Creates a new PbMsgUpdateRoleRankingLevel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateRoleRankingLevel instance
         */
        public static create(properties?: msg.IPbMsgUpdateRoleRankingLevel): msg.PbMsgUpdateRoleRankingLevel;

        /**
         * Encodes the specified PbMsgUpdateRoleRankingLevel message. Does not implicitly {@link msg.PbMsgUpdateRoleRankingLevel.verify|verify} messages.
         * @param message PbMsgUpdateRoleRankingLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateRoleRankingLevel, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateRoleRankingLevel message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleRankingLevel.verify|verify} messages.
         * @param message PbMsgUpdateRoleRankingLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateRoleRankingLevel, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateRoleRankingLevel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateRoleRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateRoleRankingLevel;

        /**
         * Decodes a PbMsgUpdateRoleRankingLevel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateRoleRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateRoleRankingLevel;

        /**
         * Verifies a PbMsgUpdateRoleRankingLevel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateRoleRankingLevel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateRoleRankingLevel
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateRoleRankingLevel;

        /**
         * Creates a plain object from a PbMsgUpdateRoleRankingLevel message. Also converts values to other types if specified.
         * @param message PbMsgUpdateRoleRankingLevel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateRoleRankingLevel, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateRoleRankingLevel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateRoleRankingLevel {

        /** MSG enum. */
        enum MSG {
            ID = 712
        }
    }

    /** Properties of a PbMsgUpdateRoleMRankingLevel. */
    interface IPbMsgUpdateRoleMRankingLevel {

        /** PbMsgUpdateRoleMRankingLevel data */
        data?: (msg.IPbMsgUpdateRoleRankingLevel[]|null);
    }

    /** Represents a PbMsgUpdateRoleMRankingLevel. */
    class PbMsgUpdateRoleMRankingLevel implements IPbMsgUpdateRoleMRankingLevel {

        /**
         * Constructs a new PbMsgUpdateRoleMRankingLevel.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgUpdateRoleMRankingLevel);

        /** PbMsgUpdateRoleMRankingLevel data. */
        public data: msg.IPbMsgUpdateRoleRankingLevel[];

        /**
         * Creates a new PbMsgUpdateRoleMRankingLevel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgUpdateRoleMRankingLevel instance
         */
        public static create(properties?: msg.IPbMsgUpdateRoleMRankingLevel): msg.PbMsgUpdateRoleMRankingLevel;

        /**
         * Encodes the specified PbMsgUpdateRoleMRankingLevel message. Does not implicitly {@link msg.PbMsgUpdateRoleMRankingLevel.verify|verify} messages.
         * @param message PbMsgUpdateRoleMRankingLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgUpdateRoleMRankingLevel, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgUpdateRoleMRankingLevel message, length delimited. Does not implicitly {@link msg.PbMsgUpdateRoleMRankingLevel.verify|verify} messages.
         * @param message PbMsgUpdateRoleMRankingLevel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgUpdateRoleMRankingLevel, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgUpdateRoleMRankingLevel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgUpdateRoleMRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgUpdateRoleMRankingLevel;

        /**
         * Decodes a PbMsgUpdateRoleMRankingLevel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgUpdateRoleMRankingLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgUpdateRoleMRankingLevel;

        /**
         * Verifies a PbMsgUpdateRoleMRankingLevel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgUpdateRoleMRankingLevel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgUpdateRoleMRankingLevel
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgUpdateRoleMRankingLevel;

        /**
         * Creates a plain object from a PbMsgUpdateRoleMRankingLevel message. Also converts values to other types if specified.
         * @param message PbMsgUpdateRoleMRankingLevel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgUpdateRoleMRankingLevel, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgUpdateRoleMRankingLevel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgUpdateRoleMRankingLevel {

        /** MSG enum. */
        enum MSG {
            ID = 713
        }
    }

    /** Properties of a PbMsgGetRankingData. */
    interface IPbMsgGetRankingData {

        /** PbMsgGetRankingData type */
        type: number;

        /** PbMsgGetRankingData bIndex */
        bIndex: number;

        /** PbMsgGetRankingData num */
        num: number;
    }

    /** Represents a PbMsgGetRankingData. */
    class PbMsgGetRankingData implements IPbMsgGetRankingData {

        /**
         * Constructs a new PbMsgGetRankingData.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRankingData);

        /** PbMsgGetRankingData type. */
        public type: number;

        /** PbMsgGetRankingData bIndex. */
        public bIndex: number;

        /** PbMsgGetRankingData num. */
        public num: number;

        /**
         * Creates a new PbMsgGetRankingData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRankingData instance
         */
        public static create(properties?: msg.IPbMsgGetRankingData): msg.PbMsgGetRankingData;

        /**
         * Encodes the specified PbMsgGetRankingData message. Does not implicitly {@link msg.PbMsgGetRankingData.verify|verify} messages.
         * @param message PbMsgGetRankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRankingData message, length delimited. Does not implicitly {@link msg.PbMsgGetRankingData.verify|verify} messages.
         * @param message PbMsgGetRankingData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRankingData, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRankingData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRankingData;

        /**
         * Decodes a PbMsgGetRankingData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRankingData;

        /**
         * Verifies a PbMsgGetRankingData message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRankingData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRankingData
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRankingData;

        /**
         * Creates a plain object from a PbMsgGetRankingData message. Also converts values to other types if specified.
         * @param message PbMsgGetRankingData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRankingData, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRankingData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRankingData {

        /** MSG enum. */
        enum MSG {
            ID = 5021
        }
    }

    /** Properties of a PbMsgGetRankingDataByRankList. */
    interface IPbMsgGetRankingDataByRankList {

        /** PbMsgGetRankingDataByRankList type */
        type: number;

        /** PbMsgGetRankingDataByRankList ranklist */
        ranklist?: (number[]|null);
    }

    /** Represents a PbMsgGetRankingDataByRankList. */
    class PbMsgGetRankingDataByRankList implements IPbMsgGetRankingDataByRankList {

        /**
         * Constructs a new PbMsgGetRankingDataByRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgGetRankingDataByRankList);

        /** PbMsgGetRankingDataByRankList type. */
        public type: number;

        /** PbMsgGetRankingDataByRankList ranklist. */
        public ranklist: number[];

        /**
         * Creates a new PbMsgGetRankingDataByRankList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgGetRankingDataByRankList instance
         */
        public static create(properties?: msg.IPbMsgGetRankingDataByRankList): msg.PbMsgGetRankingDataByRankList;

        /**
         * Encodes the specified PbMsgGetRankingDataByRankList message. Does not implicitly {@link msg.PbMsgGetRankingDataByRankList.verify|verify} messages.
         * @param message PbMsgGetRankingDataByRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgGetRankingDataByRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgGetRankingDataByRankList message, length delimited. Does not implicitly {@link msg.PbMsgGetRankingDataByRankList.verify|verify} messages.
         * @param message PbMsgGetRankingDataByRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgGetRankingDataByRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgGetRankingDataByRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgGetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgGetRankingDataByRankList;

        /**
         * Decodes a PbMsgGetRankingDataByRankList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgGetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgGetRankingDataByRankList;

        /**
         * Verifies a PbMsgGetRankingDataByRankList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgGetRankingDataByRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgGetRankingDataByRankList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgGetRankingDataByRankList;

        /**
         * Creates a plain object from a PbMsgGetRankingDataByRankList message. Also converts values to other types if specified.
         * @param message PbMsgGetRankingDataByRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgGetRankingDataByRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgGetRankingDataByRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgGetRankingDataByRankList {

        /** MSG enum. */
        enum MSG {
            ID = 5023
        }
    }

    /** Properties of a PbMsgRetRankingDataByRankList. */
    interface IPbMsgRetRankingDataByRankList {

        /** PbMsgRetRankingDataByRankList retCode */
        retCode: number;

        /** PbMsgRetRankingDataByRankList data */
        data?: (msg.PbMsgRetRankingDataByRankList.IRankRole[]|null);
    }

    /** Represents a PbMsgRetRankingDataByRankList. */
    class PbMsgRetRankingDataByRankList implements IPbMsgRetRankingDataByRankList {

        /**
         * Constructs a new PbMsgRetRankingDataByRankList.
         * @param [properties] Properties to set
         */
        constructor(properties?: msg.IPbMsgRetRankingDataByRankList);

        /** PbMsgRetRankingDataByRankList retCode. */
        public retCode: number;

        /** PbMsgRetRankingDataByRankList data. */
        public data: msg.PbMsgRetRankingDataByRankList.IRankRole[];

        /**
         * Creates a new PbMsgRetRankingDataByRankList instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PbMsgRetRankingDataByRankList instance
         */
        public static create(properties?: msg.IPbMsgRetRankingDataByRankList): msg.PbMsgRetRankingDataByRankList;

        /**
         * Encodes the specified PbMsgRetRankingDataByRankList message. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.verify|verify} messages.
         * @param message PbMsgRetRankingDataByRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: msg.IPbMsgRetRankingDataByRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Encodes the specified PbMsgRetRankingDataByRankList message, length delimited. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.verify|verify} messages.
         * @param message PbMsgRetRankingDataByRankList message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: msg.IPbMsgRetRankingDataByRankList, writer?: protobuf.Writer): protobuf.Writer;

        /**
         * Decodes a PbMsgRetRankingDataByRankList message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PbMsgRetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetRankingDataByRankList;

        /**
         * Decodes a PbMsgRetRankingDataByRankList message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PbMsgRetRankingDataByRankList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetRankingDataByRankList;

        /**
         * Verifies a PbMsgRetRankingDataByRankList message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PbMsgRetRankingDataByRankList message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PbMsgRetRankingDataByRankList
         */
        public static fromObject(object: { [k: string]: any }): msg.PbMsgRetRankingDataByRankList;

        /**
         * Creates a plain object from a PbMsgRetRankingDataByRankList message. Also converts values to other types if specified.
         * @param message PbMsgRetRankingDataByRankList
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: msg.PbMsgRetRankingDataByRankList, options?: protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PbMsgRetRankingDataByRankList to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PbMsgRetRankingDataByRankList {

        /** MSG enum. */
        enum MSG {
            ID = 6023
        }

        /** Properties of a RankRole. */
        interface IRankRole {

            /** RankRole roleId */
            roleId: (number|Long);

            /** RankRole rank */
            rank: number;
        }

        /** Represents a RankRole. */
        class RankRole implements IRankRole {

            /**
             * Constructs a new RankRole.
             * @param [properties] Properties to set
             */
            constructor(properties?: msg.PbMsgRetRankingDataByRankList.IRankRole);

            /** RankRole roleId. */
            public roleId: (number|Long);

            /** RankRole rank. */
            public rank: number;

            /**
             * Creates a new RankRole instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RankRole instance
             */
            public static create(properties?: msg.PbMsgRetRankingDataByRankList.IRankRole): msg.PbMsgRetRankingDataByRankList.RankRole;

            /**
             * Encodes the specified RankRole message. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.RankRole.verify|verify} messages.
             * @param message RankRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: msg.PbMsgRetRankingDataByRankList.IRankRole, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Encodes the specified RankRole message, length delimited. Does not implicitly {@link msg.PbMsgRetRankingDataByRankList.RankRole.verify|verify} messages.
             * @param message RankRole message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: msg.PbMsgRetRankingDataByRankList.IRankRole, writer?: protobuf.Writer): protobuf.Writer;

            /**
             * Decodes a RankRole message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RankRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): msg.PbMsgRetRankingDataByRankList.RankRole;

            /**
             * Decodes a RankRole message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RankRole
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): msg.PbMsgRetRankingDataByRankList.RankRole;

            /**
             * Verifies a RankRole message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RankRole message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RankRole
             */
            public static fromObject(object: { [k: string]: any }): msg.PbMsgRetRankingDataByRankList.RankRole;

            /**
             * Creates a plain object from a RankRole message. Also converts values to other types if specified.
             * @param message RankRole
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: msg.PbMsgRetRankingDataByRankList.RankRole, options?: protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RankRole to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}
