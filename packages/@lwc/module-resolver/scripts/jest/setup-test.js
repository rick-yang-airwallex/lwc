/*
 * Copyright (c) 2018, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */

const { toThrowErrorWithType } = require('./matchers/to-throw-error-with-type');
const { toThrowErrorWithCode } = require('./matchers/to-throw-error-with-code');

expect.extend({
    toThrowErrorWithType,
    toThrowErrorWithCode,
});
