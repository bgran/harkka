import {expect} from 'chai';
import fixturesFactory, {READERS} from '@natlibfi/fixura';
import {MarcRecord} from '@natlibfi/marc-record';
import TODO from './TODO';

function yourFunction(rec) {
    let rv = [];
    var foo = rec.fields;
    foo.forEach(function(entry) {
        console.log(entry);
    });

    console.log("foo: " + rec.fields);
    for(const element of foo) {
        console.log("element -> " + element["tag"]);
        let subf = element["subfields"];
        if (subf === undefined) {
            console.log("subf kalaaa");
            continue;
        }
        for(const e2 of subf) {
            console.log("pushin " + e2["value"]);
            rv.push(e2["code"]+":"+e2["value"]);
        }
    }
    return rv;
}

describe('index', () => {
  const {getFixture} = fixturesFactory({
    root: [__dirname, '..', 'test-fixtures'],
    reader: READERS.JSON
  });

  it('It should just work', () => {
    const recordData = getFixture('01', 'record.json');
    const record = new MarcRecord(recordData);
    const expectedResults = getFixture('01', 'expectedResults.json');
    const result = yourFunction(record);

    expect(result).to.eql(expectedResults);
  });

  it('It should return results with a custom separator', () => {
        // foo
        const recordData = getFixture('02', 'record.json');
        const record = new MarcRecord(recordData);
        const expectedResults = getFixture('02', 'expectedResults.json');
        const result = yourFunction2(rec);

        expect(result).to.eql(expectedResults);
  });
});
