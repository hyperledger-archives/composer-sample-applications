/*
 * IBM Confidential
 * OCO Source Materials
 * IBM Concerto - Blockchain Solution Framework
 * Copyright IBM Corp. 2016
 * The source code for this program is not published or otherwise
 * divested of its trade secrets, irrespective of what has
 * been deposited with the U.S. Copyright Office.
 */

'use strict';

/*eslint-disable no-unused-vars*/

const chai = require('chai');
const should = chai.should();
chai.use(require('chai-as-promised'));
chai.use(require('chai-things'));
const sinon = require('sinon');
require('sinon-as-promised');

describe('Default', () => {

    describe('#sample test', () => {
        it('should pass', () => {
            true.should.not.be.null;
        });
    });
});

/*eslint-enable no-unused-vars*/
