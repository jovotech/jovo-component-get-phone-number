import { ComponentConfig } from 'jovo-framework';

interface GetPhoneNumberConfig extends ComponentConfig {
    numberOfFails: number;
}

const config: GetPhoneNumberConfig = {
    intentMap: {
        'AMAZON.StopIntent': 'END'
    },
    numberOfFails: 3
};

export {GetPhoneNumberConfig, config as Config};