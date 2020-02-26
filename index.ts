import { ComponentPlugin, Handler } from 'jovo-framework';

import { Config, GetPhoneNumberConfig } from './src/config';
import { phoneNumberHandler } from './src/handler';

export class GetPhoneNumber extends ComponentPlugin {
    config: GetPhoneNumberConfig = Config;
    pathToI18n = './src/i18n/';
    name = 'jovo-component-get-phone-number';
    handler: Handler = {
        [this.name!]: phoneNumberHandler
    };

    constructor(config?: GetPhoneNumberConfig) {
        super(config);
    }
}