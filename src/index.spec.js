import {expect} from 'chai';
import fixturesFactory, {READERS} from '@natlibfi/fixura';
import {MarcRecord} from '@natlibfi/marc-record';
import {yourFunction, yourFunction2} from './TODO';

describe('index', () => {
  const {getFixture} = fixturesFactory({
    root: [__dirname, '..', 'test-fixtures'],
    reader: READERS.JSON
  });

  it('It should just work', () => {
    const recordData = getFixture('01', 'record.json');
    const record = new MarcRecord(recordData);
    const expectedResults = getFixture('01', 'expectedResults.json');
    const result = yourFunction(record, undefined);

    expect(result).to.eql(expectedResults);
  });

  it('It should return results with a custom separator', () => {
        // foo
        const recordData = getFixture('02', 'record.json');
        const record = new MarcRecord(recordData);
        const expectedResults = getFixture('02', 'expectedResults.json');
        const result = yourFunction2(record, ";");

        expect(result).to.eql(expectedResults);
  });
});
