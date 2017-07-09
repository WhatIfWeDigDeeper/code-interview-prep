import chai from 'chai';
import { head, tail, range, replicate, take, skip } from '../util';

const expect = chai.expect;

describe('util', () => {
  describe('head', () => {
    it('single member array should return single', () => {
      expect(head(['a'])).equals('a');
    });
    it('empty array should return empty array', () => {
      expect(head([]).length).equals(0);
    });
  });
  describe('tail', () => {
    it('tail should return rest of array', () => {
      expect(tail([1, 2, 3, 4])).to.have.ordered.members([2, 3, 4]);
    });
    it('empty array should return empty array', () => {
      expect(tail([]).length).equals(0);
    });
  });
  describe('range', () => {
    it('range should default to start at 1 and return range of numbers from 1 to end', () => {
      expect(range(4)).to.have.ordered.members([1, 2, 3, 4]);
    });
    it('can specify min and max', () => {
      expect(range(4, 2)).to.have.ordered.members([2, 3, 4, 5]);
    });
    it('0 should return empty array', () => {
      expect(range(0).length).equals(0);
    });
  });
  describe('replicate', () => {
    it('replicate should replicate value n times', () => {
      expect(replicate('a', 3)).to.have.ordered.members(['a', 'a', 'a']);
    });
  });
  describe('take', () => {
    it('take should grab first n entries', () => {
      expect(take(3, [1, 2, 3, 4])).to.have.ordered.members([1, 2, 3]);
    });
    it('take return [] when greater than length', () => {
      expect(take(5, [1, 2, 3, 4]).length).equals(0);
    });
  });
  describe('skip', () => {
    it('skip should grab last n entries', () => {
      expect(skip(2, [1, 2, 3, 4])).to.have.ordered.members([3, 4]);
    });
    it('skip return [] when greater than length', () => {
      expect(skip(5, [1, 2, 3, 4]).length).equals(0);
    });
  });
});
