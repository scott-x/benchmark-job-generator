var xlsx = require('node-xlsx');
var fs = require('fs');
var path = require('path')

var data = [
  {
    "name": "任务单",
    "data": [
      [
        "任     务     单"
      ],
      [
        "Imported by  \nImported for             \nWarning PDP ",
        "Job #:C1901B1_MTY",
        null,
        "此单若加急，请在备注处注明",
        null,
        null,
        null,
        "客户信息"
      ],
      [
        "系列/国家",
        "HW/China",
        null,
        "业务制稿人: Timmy",
        null,
        null,
        null,
        "Dockte Number:00032_2018_BM"
      ],
      [
        "日期",
        "修改出处",
        null,
        "做稿人",
        "审核",
        "审核\n分数",
        "备注",
        "Job #: C1901B1_MTY"
      ],
      [
        "01/16/2019",
        "新case，见做稿",
        null,
        null,
        null,
        null,
        null,
        "Program: HALLOWEEN"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Supplier: DANDEE INTERNATIONAL LIMITED"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Buyer: May Cheung(D18) "
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Artwork due date: 03/14/2019"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Packout date: "
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Shipdate: 06/27/2019"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "In-store date: "
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Status:  for approval"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "联系人: MTY/PG.TRACY <pg.tracy@mtygz.com>"
      ],
      [],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "档案明细：PDQ[01 02 03 04 05]，［］相同刀模, 02(3U):表示02档案有3个UPC"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "颜色明细:"
      ],
      [],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "制稿人: "
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "开始日期:xx/xx/2012"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "完成日期:xx/xx/2012"
      ],
      [],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "项目说明"
      ],
      [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "完稿"
      ],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      []
    ]
  },
  {
    "name": "Detail List",
    "data": []
  }
]


// 写xlsx
var buffer = xlsx.build(data);
fs.writeFile('./bin/C1901B1_MTY_DetailList_W.xls', buffer, function (err)
{
    if (err)
        throw err;
    console.log('Write to xls has finished');
    
// 读xlsx
    var obj = xlsx.parse(path.resolve(__dirname,'C1901B1_MTY_DetailList_W.xls'));
    console.log(JSON.stringify(obj,null,2));
    console.log(obj)
}
);