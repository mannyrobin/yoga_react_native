import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://studio.weedoo.ru/api/',
   
});

export const authAPI = {
    getPhone(phone) {
        console.log(phone)
        return instance.post(`signup/1?phone=${phone}`)
            .then(response => {
                return response.data;
          
            })
     
    },
      getPhone(phone) {
        console.log(phone)
        return instance.post(`signup/1?phone=${phone}`)
            .then(response => {
                return response.data;
          
            });
    
    },
      authCode(code, phone) {
        console.log(code,phone ,'authcodeprops')
        return instance.post(`signup/2?phone=${phone}&code=${code}`)
            .then(response => {
          
                return response.data;
          
            });
    },
  
}
export const studioAPI = {
    getStudio(token) {
        console.log(token ,'tokenapi')
        return instance.get(`studios?token=${token}`)
            .then(response => {
                return response.data;
          
            });
    },
      getSingleStudio(token,id) {
        
        return instance.get(`studio_info/${id}?token=${token}`)
            .then(response => {
                return response.data;
          
            });
    },
  
}