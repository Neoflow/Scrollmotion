import {Scrollmotion} from "./Scrollmotion";
import {options as defaultOptions} from "./default/options";

const factory = (items = '.sm-item', customOptions?: { [key: string]: unknown }): Scrollmotion => {

    const options = Object.assign({}, defaultOptions, customOptions) as Options;

    return new Scrollmotion(items, options);
};

export default factory;