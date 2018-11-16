import axios from '@/api/index.js'
// 查询
export const getXiangMuLeiXing = () => {
    console.log("1111",axios)
    return axios.request({
      url: '/erpnew/projecttype/treelist',
      method: 'post'
    })
  }


