import { BigNumber } from 'bignumber.js';
import keccak256 from 'keccak256';

export function newHash(hash: string) {
  let tried = 1
  while(1) {
    const nounce = new BigNumber(tried, 16);
    const oldBigNumber = new BigNumber(hash, 16)
    const newhash = '0x' + keccak256(Buffer.from(oldBigNumber.plus(nounce).toString(16), 'hex')).toString('hex')
    if (oldBigNumber.gt(new BigNumber(newhash))) {
      return {nounce, newhash}
    }
    tried ++
  }
  throw Error('failed to get new hash, try again')
}
