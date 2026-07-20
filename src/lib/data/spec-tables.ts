export interface SpecRow {
  itemCode: string;
  itemName: string;
}

export interface SpecTable {
  id: string;
  tabLabel: string;
  heading: string;
  rows: SpecRow[];
}

function series(prefix: string, values: string[]): SpecRow[] {
  return values.map((v) => ({
    itemCode: `${prefix}${v}`,
    itemName: `${prefix}-${v}`,
  }));
}

export const specTablesByProduct: Record<string, SpecTable[]> = {
  "tyre-coupling": [
    {
      id: "ph",
      tabLabel: "PH Table",
      heading: "PH Models",
      rows: series("PH", [
        "96",
        "106",
        "116",
        "126",
        "140",
        "160",
        "178",
        "218",
        "250",
        "272S",
        "275H",
        "292S",
        "292H",
        "316S",
        "316H",
        "342S",
        "342H",
        "390S",
        "390H",
        "450S",
        "450H",
      ]).map((r) => ({
        itemCode: r.itemCode,
        itemName: r.itemName.replace(/-(\d+)([SH])$/, "-$1($2)"),
      })),
    },
    {
      id: "tc",
      tabLabel: "TC Table",
      heading: "TC Models",
      rows: series("TC", ["6", "7", "8", "9", "10", "11", "13", "14", "15", "16", "17", "19", "21", "22", "23", "24", "25"]),
    },
    {
      id: "px",
      tabLabel: "PX Table",
      heading: "PX Models",
      rows: series("PX", ["40", "45", "50", "60", "70", "80", "85", "90", "100", "110", "120", "140", "160", "180"]),
    },
  ],

  "pin-bush-coupling": [
    {
      id: "rb",
      tabLabel: "RB Table",
      heading: "RB Models",
      rows: series("RB", ["116", "125", "144", "162", "178", "198", "228", "252", "285", "320", "360", "400", "450", "500"]),
    },
    {
      id: "bc",
      tabLabel: "BC Table",
      heading: "BC Models",
      rows: [
        { itemCode: "BC1", itemName: "BC-1" },
        { itemCode: "BC2", itemName: "BC-2" },
        { itemCode: "BC2A", itemName: "BC-2(A)" },
        { itemCode: "BC3", itemName: "BC-3" },
        { itemCode: "BC4", itemName: "BC-4" },
        { itemCode: "BC4A", itemName: "BC-4(A)" },
        { itemCode: "BC5", itemName: "BC-5" },
        { itemCode: "BC6", itemName: "BC-6" },
        { itemCode: "BC6A", itemName: "BC-6(A)" },
        { itemCode: "BC7", itemName: "BC-7" },
        { itemCode: "BC7A", itemName: "BC-7(A)" },
        { itemCode: "BC8", itemName: "BC-8" },
        { itemCode: "BC8A", itemName: "BC-8(A)" },
        { itemCode: "BC8B", itemName: "BC-8(B)" },
        { itemCode: "BC9", itemName: "BC-9" },
        { itemCode: "BC9A", itemName: "BC-9(A)" },
        { itemCode: "BC10", itemName: "BC-10" },
        { itemCode: "BC10A", itemName: "BC-10(A)" },
        { itemCode: "BC10B", itemName: "BC-10(B)" },
        { itemCode: "BC11", itemName: "BC-11" },
      ],
    },
  ],

  "spacer-coupling": [
    {
      id: "rrs",
      tabLabel: "RRS Table",
      heading: "RRS Models",
      rows: [
        "95A", "95B", "95C",
        "100A", "100B", "100C",
        "110A", "110B", "110C",
        "150A", "150B", "150C",
        "190A", "190B", "190C",
        "225A", "225B", "225C",
      ].map((v) => ({ itemCode: `RRS${v}`, itemName: `RRS-${v}` })),
    },
  ],

  "star-coupling": [
    {
      id: "rrl",
      tabLabel: "RRL",
      heading: "RRL Models",
      rows: [
        "95A", "95B", "95C",
        "100A", "100B", "100C",
        "110A", "110B", "110C",
        "150A", "150B", "150C",
        "190A", "190B", "190C",
        "225A", "225B", "225C",
      ].map((v) => ({ itemCode: `RRL${v}`, itemName: `RRL-${v}` })),
    },
    {
      id: "swq",
      tabLabel: "SWQ",
      heading: "SWQ Models",
      rows: [
        "226A", "226B", "226C",
        "276A", "276B", "276C",
        "280A", "280B", "280C",
        "295A", "295B", "295C",
        "2955A", "2955B", "2955C",
        "300A", "300B", "300C",
        "350A", "350B", "350C",
      ].map((v) => ({ itemCode: `SWQ${v}`, itemName: `SWQ-${v}` })),
    },
    {
      id: "sw",
      tabLabel: "SW",
      heading: "SW Models",
      rows: series("SW", ["95", "100", "110", "150", "190", "225", "226", "276", "280", "295"]),
    },
    {
      id: "l",
      tabLabel: "L",
      heading: "L Models",
      rows: series("L", ["50", "70", "75", "95", "100", "110", "150", "190", "225", "226", "276", "280", "295", "2955", "300", "350"]),
    },
  ],
};
