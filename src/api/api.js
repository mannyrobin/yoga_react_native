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
export const profileAPI = {
    getUserInfo(token) {
         console.log(token ,'tokenapiprof')
        return instance.get(`profile?token=${token}`)
            .then(response => {
                return response.data;
          
            });
    },
 
      updateUserInfo(token,name,email,phone) {
       
        return instance.post(`profile_update?token=${token}&name=${name}&email=${email}&phone=${phone}&avatar`)
            .then(response => {
                return response.data;
          
            });
    },
}

export const reviewAPI = {
    getReview(token,id) {
         console.log(token ,'tokenreview')
        return instance.get(`reviews/${id}?token=${token}`)
            .then(response => {
                return response.data;
          
            });
    },
 
      addReview(token,rating, text,id) {
       console.log(token,rating, text,id ,'addreview')
        return instance.post(`send_review/${id}?token=${token}&rating=${rating}&text=${text};)`)
            .then(response => {
                return response.data;
          
            });
    },
}

export const bonusAPI = {
    getBonus(token,amount) {
         console.log(token ,'tokenreview')
        return instance.get(`bonus/deposit?token=${token}&amount=${amount}&comment=`)
            .then(response => {
                return response.data;
          
            });
    },
 
      addReview(token,rating, text,id) {
       console.log(token,rating, text,id ,'addreview')
        return instance.post(`bonus/deposit?token=${token}&amount=${amount}&comment=`)
            .then(response => {
                return response.data;
          
            });
    },
}


















