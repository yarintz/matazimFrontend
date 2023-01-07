import React from "react"
var URL =""
if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    URL = 'http://127.0.0.1:8000';
if(window.location.hostname === "matazim-frontend.web.app")
    URL = 'https://yarintz.pythonanywhere.com';

const BASE_URL = 'https://yarintz.pythonanywhere.com';
const LOCAL_URL = 'http://127.0.0.1:8000';
export class API extends React.Component{
/*
static DisplayUser(body){ 
        console.log(body)
        return fetch(`${LOCAL_URL}/main/users/21/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
        }).then( resp => resp.json())
        }
       */
       /*
static DisplayUserInfo(token, id, data){
    return fetch(`${LOCAL_URL}/main/users/${id}/`),{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
        },
        body: JSON.stringify( data )
    }).then( resp => resp.json())  
}*/
// static getUserDetails(id){

//     return fetch(`${LOCAL_URL}/main/users/${id}`,{
//         method: 'GET',
//         headers: {  
//             'Content-Type':'application/json',
           
//         }
//     }).then( resp => resp.json())
//     //.then( res => props.UpdateUser(res))
//     //.catch( error => console.log(error))
// } 
// static getUserDetails(token){

//     return fetch(`${BASE_URL}/main/userProfile/1/getUserDetails/`,{
//         method: 'POST',
//         headers: {  
//             'Content-Type':'application/json',
//             'Authorization': `Token ${token}` 
//         }
//     })
//      .then( resp => resp.json())
// } 

static getUserDetails(token){
    return fetch(`${URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
     .then( resp => resp.json())
} 
// static getUserDetails(token){

//     return fetch(`${LOCAL_URL}/main/userProfile/1/getUserDetails/`,{
//         method: 'POST',
//         headers: {  
//             'Content-Type':'application/json',
//             'Authorization': `Token ${token}` 
//         }
//     })
//      .then( resp => resp.json())
// }

//samir
// static UpdateUserDetails(token){

//     return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`,{
//         method: 'POST',
//         headers: {  
//             'Content-Type':'application/json',
//             'Authorization': `Token ${token}` 
//         }
//     })
//     //.then(resp => console.log(resp))
//      .then( resp => resp.json())
//     //.then( res => props.UpdateUser(res))
//     //.catch( error => console.log(error))
// }  
static loginUser(body){ 
    return fetch(`${URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }
// static loginUser(body){ 
//     return fetch(`${LOCAL_URL}/auth/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( body )
//     }).then( resp => resp.json())
//     }

static registerUser(body){ 
    console.log(body)
        return fetch(`${URL}/main/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
            }).then( resp => resp.json())
        }
// static registerUser(body){ 
//     console.log(body)
//     return fetch(`${LOCAL_URL}/main/users/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify( body )
//     }).then( resp => resp.json())
//     }
        // static registerUserProfile(username){ 
        //     return fetch(`${LOCAL_URL}/main/userProfile/1/createUserProfile/`, {
        //         method: 'POST',
        //         headers: {
                
        //           'Content-Type': 'application/json',
        //           //'Authorization': `Token ${token}` 
        //              },
        //              body: JSON.stringify({'username' : username})  
                        
        //         })
        //           .then( resp => resp.json())
                
        //        } 
// static registerUserProfile(username, firstName, lastName){ 
//     return fetch(`${LOCAL_URL}/main/userProfile/1/createUserProfile/`, {
//         method: 'POST',
//         headers: {        
//             'Content-Type': 'application/json',
//             //'Authorization': `Token ${token}` 
//                 },
//                 body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )                 
//         })
//             .then( resp => resp.json())        
//         }   
static registerUserProfile(username, firstName, lastName){ 
    return fetch(`${URL}/main/userProfile/1/createUserProfile/`, {
        method: 'POST',
        headers: {        
            'Content-Type': 'application/json',
            //'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )                 
        })
            .then( resp => resp.json())        
        }   
static displayCourses(){ 
        return fetch(`${URL}/main/courses/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
        }).then( resp => resp.json())
        } 
// static displayCourses(){ 
//     return fetch(`${LOCAL_URL}/main/courses/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//     }).then( resp => resp.json())
//     }            
static getLessons(){ 
        return fetch(`${URL}/admin/main/course/1/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
        })
        .then( resp => resp.json())       
        } 
// static getLessons(){ 
//     return fetch(`${LOCAL_URL}/admin/main/course/1/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//     })
//     .then( resp => resp.json())       
//     }   
static getNextLesson(num){ 
    return fetch(`${URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    })
    .then( resp => resp.json())
}
// static getNextLesson(num){ 
//     return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//     })
//     .then( resp => resp.json())
// }
static getPreviousLesson(num){ 
    return fetch(`${URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
}
// static getPreviousLesson(num){ 
//     return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },                       
//     })
//     .then( resp => resp.json())
// }
static getCurrentCourse(numOfCourse){ 
    console.log("inside displayCourses fun")
    return fetch(`${URL}/main/courses/${numOfCourse}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
        //body: JSON.stringify( body )
    }).then( resp => resp.json())
    // .then( resp => console.log(resp))
    }   

// static getCurrentCourse(numOfCourse){ 
//     console.log("inside displayCourses fun")
//     return fetch(`${LOCAL_URL}/main/courses/${numOfCourse}/`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//         //body: JSON.stringify( body )
//     }).then( resp => resp.json())
//     // .then( resp => console.log(resp))
//     }

static getCourses(num){ 
    return fetch(`${URL}/main/courses/${num}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    }  

// static getCourses(num){ 
//     return fetch(`${LOCAL_URL}/main/courses/${num}`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json'
//             },
//     }).then( resp => resp.json())
//     } 


// static getUserLessons(){                      
//         return fetch(`${LOCAL_URL}/main/userLessons/`, {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//                 },
//         }).then( resp => resp.json())
//         }
static getUserLessons(){                      
    return fetch(`${URL}/main/userLessons/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    }    
// static getUserNotes(token, data){                           
//     return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${token}` 
//                 },
//                 body: JSON.stringify({'lesson' : data})                
//         })
//             .then( resp => resp.json())
//         }  
static getUserNotes(token, data){                           
    return fetch(`${URL}/main/userLessons/1/getUserLessons/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})                
        })
            .then( resp => resp.json())
        }  
// static getUserAnswersById(userId, lessonID){                     
// return fetch(`${LOCAL_URL}/main/userLessons/1/getUserAnswers/`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({'userId' : userId, 'lessonId' : lessonID})  

//     })
//         .then( resp => resp.json())

//     }
static getUserAnswersById(userId, lessonID){                     
    return fetch(`${URL}/main/userLessons/1/getUserAnswers/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({'userId' : userId, 'lessonId' : lessonID})  
    
        })
            .then( resp => resp.json())
    
        }
// static updateUserNotes(token, uploadData, numOfLesson){ 
//     return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
//     method: 'POST',
//     headers: {
//         'Authorization': `Token ${token}` 
//             },
//     body: uploadData  
            
//     })
//     }  
static updateUserNotes(token, uploadData, numOfLesson){ 
    return fetch(`${URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
    method: 'POST',
    headers: {
        'Authorization': `Token ${token}` 
            },
    body: uploadData  
            
    })
    }  

// static getUserAnswer(token, data){                        
//     return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${token}` 
//                 },
//                 body: JSON.stringify({'lesson' : data})  
//         })
//             .then( resp => resp.json())
//     }
static getUserAnswer(token, data){                        
    return fetch(`${URL}/main/userLessons/1/getUserLessons/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})  
        })
            .then( resp => resp.json())
    }    
//    static updateUserAnswer(token, answer,link, image, numOfLesson){                             
//     return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
//         method: 'POST',
//         //format: 'multipart',
//         headers: {
//         //   'Accept': 'application/json, text/plain',
//         //   'Content-Type': 'application/json',
//           'Authorization': `Token ${token}` 
//              },
//             //  body: JSON.stringify({'answer' : answer, 'link' : link, 'image' : image})  
//             // body: JSON.stringify({'answer' : answer, 'link' : link}), 'image' : image
//             body: {'answer' : answer, 'link' : link, 'image' : image}
//         })
//           //.then( resp => resp.json())
//        }

// static updateUserAnswer(token, uploadData, numOfLesson){                             
//     return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
//         method: 'POST',
//         //format: 'multipart',
//         headers: {
//         //   'Accept': 'application/json, text/plain',
//         //   'Content-Type': 'application/json',
//             'Authorization': `Token ${token}` 
//                 },
//             //  body: JSON.stringify({'answer' : answer, 'link' : link, 'image' : image})  
//             // body: JSON.stringify({'answer' : answer, 'link' : link}), 'image' : image
//             body: uploadData
//         })
//             //.then( resp => resp.json())
//         }
static updateUserAnswer(token, uploadData, numOfLesson){                             
    return fetch(`${URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
        method: 'POST',
        //format: 'multipart',
        headers: {
        //   'Accept': 'application/json, text/plain',
        //   'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
            //  body: JSON.stringify({'answer' : answer, 'link' : link, 'image' : image})  
            // body: JSON.stringify({'answer' : answer, 'link' : link}), 'image' : image
            body: uploadData
        })
            //.then( resp => resp.json())
        }
                                
// static getUserLastLesson(token, numOfCourse){                                                       
//     return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/getUserCourses/`, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': `Token ${token}` 
//                 },
//         })
//             .then( resp => resp.json())

//     }
static getUserLastLesson(token, numOfCourse){                                                       
    return fetch(`${URL}/main/userCourses/${numOfCourse}/getUserCourses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
        })
            .then( resp => resp.json())

    }  
// static getAllUserCoursesByToken(token){                                                        
// return fetch(`${LOCAL_URL}/main/userCourses/1/getAllUserCourses/`, {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${token}` 
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllUserCoursesByToken(token){                                                        
    return fetch(`${URL}/main/userCourses/1/getAllUserCourses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllUserCourses(){                                                        
// return fetch(`${LOCAL_URL}/main/userCourses/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'                                                
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllUserCourses(){                                                        
    return fetch(`${URL}/main/userCourses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllCourses(){                                                        
// return fetch(`${LOCAL_URL}/main/courses/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'                                                
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllCourses(){                                                        
    return fetch(`${URL}/main/courses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllClasses(){                                                        
// return fetch(`${LOCAL_URL}/main/class/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'                                                
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllClasses(){                                                        
    return fetch(`${URL}/main/class/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllSchools(){                                                        
// return fetch(`${LOCAL_URL}/main/school/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'                                                
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getSchool(schoolId){                                                                                  
    return fetch(`${URL}/main/school/${schoolId}/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
static getAllSchools(){                                                        
    return fetch(`${URL}/main/school/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllPlans(){                                                        
// return fetch(`${LOCAL_URL}/main/plan/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'                                                
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllPlans(){                                                        
    return fetch(`${URL}/main/plan/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
//    static getAllUserCourses(token){                                                       
//     return fetch(`${BASE_URL}/main/userCourses/1/getAllUserCourses/`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Token ${token}` 
//              },                         
//         })                                    
//           .then( resp => resp.json())                                       
//        }  
// static getAllCoursesByUserId(id){  
// console.log("id is: " ,id)                                                     
// return fetch(`${LOCAL_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',                                                     
//             },                         
//     }).then( resp => resp.json())
//         //.then( resp => console.log("in API ", resp))                                       
//     }
static getAllCoursesByUserId(id){  
    console.log("id is: " ,id)                                                     
    return fetch(`${URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',                                                     
                },                         
        }).then( resp => resp.json())
            //.then( resp => console.log("in API ", resp))                                       
        }
//    static getAllCoursesByUserId(id){ 
//     console.log("im here in base")                                                      
//     return fetch(`${BASE_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',                                                       
//              },                         
//         })                                    
//           .then( resp => resp.json())                                       
//        }  

// static updateUserCourse(token, data, numOfCourse){                             
// return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/addUserCourses/`, {
//     method: 'POST',
//     headers: {
    
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${token}` 
//             },
//             body: JSON.stringify({'lesson' : data})  
            
//     })
//         .then( resp => resp.json())
//     }
static updateUserCourse(token, data, numOfCourse){                             
    return fetch(`${URL}/main/userCourses/${numOfCourse}/addUserCourses/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})  
                
        })
            .then( resp => resp.json())
        }
// static getClassStudentsByID(classId){                                                                                  
//     return fetch(`${LOCAL_URL}/main/class/${classId}/getClassStudents/`, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },                                           
//     })
//     .then( resp => resp.json())                                                                                                                               
//     }
static getClass(classId){                                                                                  
    return fetch(`${URL}/main/class/${classId}/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  

static getClassStudentsByID(classId){                                                                                  
    return fetch(`${URL}/main/class/${classId}/getClassStudents/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
// static getClassTeacherssByID(classId){                                                                                  
// return fetch(`${LOCAL_URL}/main/class/${classId}/getClassTeachers/`, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },                                           
// })
// .then( resp => resp.json())                                                                                                                               
// }
static getClassTeachersByID(classId){                                                                                  
    return fetch(`${URL}/main/class/${classId}/getClassTeachers/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
// static getClassMatatzesByID(classId){                                                                                  
// return fetch(`${LOCAL_URL}/main/class/${classId}/getClassMatatzes/`, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },                                           
// })
// .then( resp => resp.json())                                                                                                                               
// }
static getClassMatatzesByID(classId){                                                                                  
    return fetch(`${URL}/main/class/${classId}/getClassMatatzes/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }   
// static getClassCoordinatorsByID(classId){                                                                                  
// return fetch(`${LOCAL_URL}/main/class/${classId}/getClassCoordinators/`, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },                                           
// })
// .then( resp => resp.json())                                                                                                                               
// }
static getClassCoordinatorsByID(classId){                                                                                  
    return fetch(`${URL}/main/class/${classId}/getClassCoordinators/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }   
// static getUserProfileById(id){                                     
// return fetch(`${LOCAL_URL}/main/userProfile/${id}/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json'
//         },                       
// })
// .then( resp => resp.json())
// }

// get the user object by the userProfile id
static getUserProfileById(id){                                     
    return fetch(`${URL}/main/userProfile/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }

// get the user profile object by the user id in users table (not userProfile table)
static getUserProfileByUserId(id){                                     
    return fetch(`${URL}/main/userProfile/${id}/getUserProfileByUserId/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
// static getUserByUsername(username){  
//     console.log("im here");                                                                                
//     return fetch(`${LOCAL_URL}/main/userProfile/1/getUserByUsername/`, {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             }, 
//             body: JSON.stringify({'username' : username})
                                        
//     })
//     .then( resp => resp.json())  
// //   .then( resp => resp.json()) 
// }
static getUserByUsername(username){  
    console.log("im here");                                                                                
    return fetch(`${URL}/main/userProfile/1/getUserByUsername/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({'username' : username})
                                        
    })
    .then( resp => resp.json())  
//   .then( resp => resp.json()) 
}
// static addStudentToClass(classId, username){                             
//     return fetch(`${LOCAL_URL}/main/class/${classId}/addUserToClass/`, {
//         method: 'POST',
//         headers: {
        
//             'Content-Type': 'application/json',
//         //   'Authorization': `Token ${token}` 
//                 },
//                 body: JSON.stringify({'student' : username})  
                
//         })
//             .then( resp => resp.json())
//         }
static addStudentToClass(classId, username){                             
    return fetch(`${URL}/main/class/${classId}/addUserToClass/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'student' : username})  
                
        })
            .then( resp => resp.json())
        }
// static removeStudentFromClass(classId, username){ 
// console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");                            
// return fetch(`${LOCAL_URL}/main/class/${classId}/removeUserFromClass/`, {
//     method: 'POST',
//     headers: {
    
//         'Content-Type': 'application/json',
//     //   'Authorization': `Token ${token}` 
//             },
//             body: JSON.stringify({'student' : username})  
            
//     })
//         .then( resp => resp.json())
//     }
static removeStudentFromClass(classId, username){ 
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");                            
    return fetch(`${URL}/main/class/${classId}/removeUserFromClass/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'student' : username})  
                
        })
            .then( resp => resp.json())
        }

// static updateUserDetails(token, firstName, lastName, aboutMe, hobbies, myGoal ){ 
// return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`, {
//     method: 'POST',
//     headers: {
    
//         'Content-Type': 'application/json',
//         'Authorization': `Token ${token}` 
//         },
//         body: JSON.stringify({'firstName' : firstName, 'lastName' : lastName,'aboutMe' : aboutMe,
//         'hobbies' : hobbies,'myGoal' : myGoal,
//     })  
            
//     })
//         .then( resp => resp.json())
//     } 
static updateUserDetails(token, firstName, lastName, aboutMe, hobbies, myGoal ){ 
    return fetch(`${URL}/main/userProfile/1/UpdateUserDetails/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
            },
            body: JSON.stringify({'firstName' : firstName, 'lastName' : lastName,'aboutMe' : aboutMe,
            'hobbies' : hobbies,'myGoal' : myGoal,
        })  
                
        })
            .then( resp => resp.json())
        }   
// static getStudentsMatatz(studentId){                                                                                  
// return fetch(`${LOCAL_URL}/main/group/${studentId}/getStudentsMatatz/`, {
//         method: 'POST',
//         headers: {
//         'Content-Type': 'application/json'
//         },                                           
// })
// .then( resp => resp.json())                                                                                                                               
// }
static getStudentsMatatz(studentId){                                                                                  
    return fetch(`${URL}/main/group/${studentId}/getStudentsMatatz/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
// static getAllUsers(){                                                        
// return fetch(`${LOCAL_URL}/main/users/`, {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json', 
//             },                         
//     })                                    
//         .then( resp => resp.json())                                       
//     }
static getAllUsers(){                                                        
    return fetch(`${URL}/main/users/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
// static getAllTeachers(){                                                        
//     return fetch(`${LOCAL_URL}/main/userProfile/1/getAllTeachers`, {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//                 },                         
//         })                                    
//             .then( resp => resp.json())                                       
//         }
static getAllTeachers(){                                                        
    return fetch(`${URL}/main/userProfile/1/getAllTeachers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static AddClass(className,school, token, typeOfUser){
    return fetch(`${URL}/main/class/1/addClass/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Token ${token}`
        },
        
        body: JSON.stringify({'className' : className, 'school' : school, 'typeOfUser' : typeOfUser, })
    }).then( resp => resp.json())
}
static AddNewSchool(schoolName,contact, contactPhone, comments){
    return fetch(`${URL}/main/school/1/addSchool/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            
        },
        
        body: JSON.stringify({'schoolName' : schoolName, 'contact' : contact, 'contactPhone' : contactPhone, 'comments' : comments })
    }).then( resp => resp.json())
}

static forgetPassword(email){
    return fetch(`${URL}/main/forgetPassword/1/forgot_password/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',        
        },
        body: JSON.stringify({'email' : email})
    }).then( resp => resp.json())
}
static changePassword(newPassword, user){
    return fetch(`${URL}/main/forgetPassword/1/change_password/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',        
        },
        body: JSON.stringify({'password' : newPassword, 'user' : user})
    }).then( resp => resp.json())
}     
static getFrontalLesson(numOflesson){                                                        
    return fetch(`${URL}/main/frontalLesson/${numOflesson}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllFrontalLessons(){                                                        
    return fetch(`${URL}/main/frontalLesson/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getCourseById(courseID){                                                        
    return fetch(`${URL}/main/frontalCourse/${courseID}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }

static updateLessonPresentation(uploadData, numOfLesson){                             
    return fetch(`${URL}/main/frontalLesson/${numOfLesson}/updateLessonPresentation/`, {
        method: 'POST',
            body: uploadData
        })
        }         
static getFronalCoursesByClass(classId){                             
    return fetch(`${URL}/main/classFrontalCourses/${classId}/getFrontalCourseByClass/`, {
        method: 'POST',
        })
        .then( resp => resp.json())
        }  
static addUserFrontalLesson(exercise,project,lessonId, token){
    return fetch(`${URL}/main/userFrontalLessons/${lessonId}/addUserFrontalLessons/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Token ${token}`
        },
        
        body: JSON.stringify({'exercise' : exercise, 'project' : project, })
    }).then( resp => resp.json())
}
static getUserFrontalLessonsByLesson(lesson){
    return fetch(`${URL}/main/userFrontalLessons/${lesson}/getUserFrontalLessonsByLesson/`,{
        method: 'POST',      
    }).then( resp => resp.json())
}
static updateExerciseGrade(exercise, id){
    return fetch(`${URL}/main/userFrontalLessons/${id}/updateUserGrade/`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({'exercise' : exercise})

         
    }) 

}
static updateProjectGrade(project, id){
    return fetch(`${URL}/main/userFrontalLessons/${id}/updateUserGrade/`,{
        method: 'POST',
        body: JSON.stringify({'project' : project}),
        headers: {
            'Content-Type': 'application/json',
          }
    })
}  
static addFeedback(feedback,lessonID,classID,  token){
    return fetch(`${URL}/main/frontalLessonFeedback/${lessonID}/addFeedback/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
            'Authorization': `Token ${token}`
        },
        
        body: JSON.stringify({'class' : classID, 'feedback' : feedback, })
    }).then( resp => resp.json())
}
static getAllFeedbacks(lessonID,classID){
    return fetch(`${URL}/main/frontalLessonFeedback/${lessonID}/getAllFeedbacks/`,{
        method: 'POST',
        headers: {
            'Content-Type':'application/json',
        },      
        body: JSON.stringify({'class' : classID,})
    }).then( resp => resp.json())
}
static getAllProjects(){                                     
    return fetch(`${URL}/main/project/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
//get specific prject
static getProject(id){                                     
    return fetch(`${URL}/main/project/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
static getProjectImages(projectId){                                     
    return fetch(`${URL}/main/postImages/${projectId}/getProjectImages/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
static addNewProject(token, name, briefDescription, description, link ){ 
    return fetch(`${URL}/main/project/1/createProject/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
            },
            body: JSON.stringify({'title' : name, 'briefDescription' : briefDescription,'description' : description,
            'link' : link,
        })         
        })
            .then( resp => resp.json())
        }
static addNewProjectImage(projectid, uploadData){ 
    return fetch(`${URL}/main/postImages/${projectid}/addProjectImage/`, {
        method: 'POST',
        headers: {       
            },
            body: uploadData       
        })
            .then( resp => resp.json())
        }
static getAllApprovedProjects(){                                     
    return fetch(`${URL}/main/project/1/getAprrovedProject/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
static getNotApprovedProjects(){                                     
    return fetch(`${URL}/main/project/1/getNotAprrovedProject/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
static getallUnApprovedProjectOfUser(token){                                     
    return fetch(`${URL}/main/project/1/getallUnApprovedProjectOfUser/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
            },                       
    })
    .then( resp => resp.json())
    }
    
static ApproveProject(projectId){ 
    return fetch(`${URL}/main/project/${projectId}/ApproveProject/`, {
        method: 'POST',             
        })
            .then( resp => resp.json())
        }
static HideProject(projectId){ 
    return fetch(`${URL}/main/project/${projectId}/HideProject/`, {
        method: 'POST',             
        })
            .then( resp => resp.json())
        }
static DeleteProject(projectId){ 
    return fetch(`${URL}/main/project/${projectId}/`, {
        method: 'DELETE',             
        })
            .then( resp => resp.json())
        }
static updateProject(id, title, briefDescription, link, description){ 
    return fetch(`${URL}/main/project/${id}/UpdateProject/`, {
        method: 'POST',
        headers: {        
            'Content-Type': 'application/json',
                },
                body: JSON.stringify({'title' : title, 'briefDescription' : briefDescription,'link' : link, 'description' : description} )                 
        })
            .then( resp => resp.json())        
        }   
    }