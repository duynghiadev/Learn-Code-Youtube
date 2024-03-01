const giaphaHoTran = {
  root: {
    name: 'Ông tổ',
    children: ['ong-ba', 'ba-bac'],
    parentId: ''
  },
  'ong-ba': {
    name: 'Ông Bá',
    children: ['bac-bay', 'di-sau'],
    parentId: 'root' // con ông root
  },
  'bac-bay': {
    name: 'Bác Bảy',
    children: ['anh-nam', 'chi-huong'],
    parentId: 'ong-ba' // con ông root
  },
  'di-sau': {
    name: 'Dì Sáu',
    children: [],
    parentId: 'ong-ba'
  },
  'anh-nam': {
    name: 'Anh Nam',
    children: [],
    parentId: 'bac-bay'
  },
  'chi-huong': {
    name: 'Chị Hương',
    children: [],
    parentId: 'bac-bay'
  }
}

giaphaHoTran['di-tu'] = {
  name: 'Dì Tư',
  children: [],
  parentId: 'ong-ba'
}

giaphaHoTran['ong-ba'].children.push('di-tu')

giaphaHoTran['ong-ba'].children.map((id) => {
  console.log(`id: ${id}`)
  console.log(`Ông Bá: ${id}`, giaphaHoTran[id])
  console.log('--------------------------------')
})
