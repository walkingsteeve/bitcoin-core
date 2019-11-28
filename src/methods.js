/* eslint-disable no-inline-comments */

/**
 * Module dependencies.
 */

import { map, set } from 'lodash';

/**
 * Export available rpc methods.
 */

export default {
  getInfo: {
    category: 'control',
    version: '>=1.5'
  },

  getNewAddress: {
    category: 'wallet',
    features: {
    },
    version: '>=1.5'
  },

  listReceivedByAddress: {
    category: 'wallet',
    features: {
    },
    version: '>=1.5'
  },

  listTransactions: {
    category: 'wallet',
    features: {
    },
    version: '>=1.5'
  },
    
  sendToAddress: {
    category: 'wallet',
    features: {
    },
    version: '>=1.5'
  }
};
