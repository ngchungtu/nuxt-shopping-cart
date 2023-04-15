import * as lc_types from '../module-types/localtion'
import {getProvince} from '../modules/location'
import {provinceMapping} from '../../mapping/location-mapping'

export default {
    state:()=>({
        provinces:[],
    }),
    getters:{
        [lc_types.PROVINCES](state){
            return state.provinces
        }
    },
    mutations:{
        [lc_types.SET_PROVINCES](state, payload){
            return (state.provinces = payload)
        }
    },
    actions:{
        [lc_types.FETCH_DATA_PROVINCES]({commit}){
            return new Promise((resolve, reject) =>{
                getProvince()
                .then((response) =>{
                    const data = response.data
                    if(data?.error == false){
                        commit(lc_types.SET_DISTRICTS, provinceMapping(data?.object))
                        resolve()
                    }else{
                        reject()
                    }
                })
                .catch(()=>{
                    reject()
                })
            })
        }
    }
}