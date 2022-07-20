module.exports = {
  // 省级（省份、直辖市、自治区）
  provinces: require('../dist/provinces.json'),
  // 地级（城市）
  cities: require('../dist/cities.json'),
  // 县级（区县）
  areas: require('../dist/areas.json'),
  // 乡级（乡镇、街道）
  streets: require('../dist/streets.json'),
  // 乡级（乡镇、街道）
  villages: require('../dist/villages.json'),
  // “省份、城市” 二级联动数据
  pc: require('../dist/pc.json'),
  // “省份、城市” 二级联动数据（带编码）
  pcC: require('../dist/pc-code.json'),
  // “省份、城市、区县” 三级联动数据
  pca: require('../dist/pca.json'),
  // “省份、城市、区县” 三级联动数据（带编码）
  pcaC: require('../dist/pca-code.json'),
  // “省份、城市、区县、乡镇” 四级联动数据
  pcas: require('../dist/pcas.json'),
  // “省份、城市、区县、乡镇” 四级联动数据（带编码）
  pcasC: require('../dist/pcas-code.json')
}
