import * as hw from "./hw3";

const a1 : hw.NaryTree<number> =
    hw.mkNaryLeaf();

const a2 =
    hw.mkNaryNode(
        2,
        []
    );

const a3 =
    hw.mkNaryNode(
        2,
        [
            hw.mkNaryNode(4, [])
        ]
    );

const a4 =
  hw.mkNaryNode(
      1,
      [
          hw.mkNaryNode(1, []),
          hw.mkNaryNode(1, [])
      ]
  );

const a5 =
  hw.mkNaryNode(
    3,
    [
        hw.mkNaryNode(
            4,
            [
                hw.mkNaryNode(5, []),
                hw.mkNaryNode(6, []),
                hw.mkNaryNode(
                    7, 
                    [
                        hw.mkNaryNode(8, [hw.mkNaryNode(9, [])]),
                    ]),
            ]
        )
    ]
  );

const ontr4 =
    hw.mkNaryNode(
        1,
        [
            hw.mkNaryNode(2, []),
            hw.mkNaryNode(3, [])
        ]
    );

export const ontr5 =
    hw.mkNaryNode(
        1,
        [
            hw.mkNaryNode(
                2,
                [
                    hw.mkNaryNode(3, []),
                    hw.mkNaryNode(4, []),
                    hw.mkNaryNode(
                        5, 
                        [
                            hw.mkNaryNode(6, [hw.mkNaryNode(7, [])]),
                        ]),
                ]
            )
        ]
    );

describe('mapNaryTree:', () => {
  // mapNaryTree(ntr1, (x) => x + 1)
  // mapNaryTree(ntr2, (x) => x + 1)
  // mapNaryTree(ntr3, (x) => 2*x)
  // mapNaryTree(ntr4, (x) => 1)
  // mapNaryTree(ntr5, (x) => x + 2)
  test('ntr1: ', () => {
    expect(hw.mapNaryTree(hw.ntr1, (x) => x + 1)).toEqual(a1);
  });

  test('ntr2: ', () => {
    expect(hw.mapNaryTree(hw.ntr2, (x) => x + 1)).toEqual(a2);
  });

  test('ntr3: ', () => {
    expect(hw.mapNaryTree(hw.ntr3, (x) => 2*x)).toEqual(a3);
  });

  test('ntr4: ', () => {
    expect(hw.mapNaryTree(hw.ntr4, (x) => 1)).toEqual(a4);
  });

  test('ntr5: ', () => {
    expect(hw.mapNaryTree(hw.ntr5, (x) => x + 2)).toEqual(a5);
  });

  test('ntr4 = ontr4: ', () => {
    expect(hw.ntr4).toEqual(ontr4);
  });

  test('ntr5 = ontr5: ', () => {
    expect(hw.ntr5).toEqual(ontr5);
  });

});

describe('heightNaryTree', () => {

  test('ntr1', () => {
    expect(hw.heightNaryTree(hw.ntr1)).toBe(0);
  });

  test('ntr2', () => {
    expect(hw.heightNaryTree(hw.ntr2)).toBe(1);
  });

  test('ntr3', () => {
    expect(hw.heightNaryTree(hw.ntr3)).toBe(2);
  });

  test('ntr4', () => {
    expect(hw.heightNaryTree(hw.ntr4)).toBe(2);
  });

  test('ntr5', () => {
    expect(hw.heightNaryTree(hw.ntr5)).toBe(5);
  });

  test('ntr4 = ontr4: ', () => {
    expect(hw.ntr4).toEqual(ontr4);
  });

  test('ntr5 = ontr5: ', () => {
    expect(hw.ntr5).toEqual(ontr5);
  });
});