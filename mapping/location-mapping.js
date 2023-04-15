export function provinceMapping(provinces) {
    const result = provinces.map((p)=>{
        const province = {
            id: p.provinceID,
            text: p.provinceName
        }
        return province
    })
    return result
}