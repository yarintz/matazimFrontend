import React from "react"
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

    return fetch(`${BASE_URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
     .then( resp => resp.json())
} 
static getUserDetails(token){

    return fetch(`${LOCAL_URL}/main/userProfile/1/getUserDetails/`,{
        method: 'POST',
        headers: {  
            'Content-Type':'application/json',
            'Authorization': `Token ${token}` 
        }
    })
     .then( resp => resp.json())
}

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
    return fetch(`${BASE_URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
        }).then( resp => resp.json())
    }
static loginUser(body){ 
    return fetch(`${LOCAL_URL}/auth/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
    }).then( resp => resp.json())
    }

static registerUser(body){ 
    console.log(body)
        return fetch(`${BASE_URL}/main/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( body )
            }).then( resp => resp.json())
        }
static registerUser(body){ 
    console.log(body)
    return fetch(`${LOCAL_URL}/main/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( body )
    }).then( resp => resp.json())
    }
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
static registerUserProfile(username, firstName, lastName){ 
    return fetch(`${LOCAL_URL}/main/userProfile/1/createUserProfile/`, {
        method: 'POST',
        headers: {        
            'Content-Type': 'application/json',
            //'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'username' : username, 'firstName' : firstName,'lastName' : lastName} )                 
        })
            .then( resp => resp.json())        
        }   
static registerUserProfile(username, firstName, lastName){ 
    return fetch(`${BASE_URL}/main/userProfile/1/createUserProfile/`, {
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
        return fetch(`${BASE_URL}/main/courses/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
        }).then( resp => resp.json())
        } 
static displayCourses(){ 
    return fetch(`${LOCAL_URL}/main/courses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    }            
static getLessons(){ 
        return fetch(`${BASE_URL}/admin/main/course/1/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
        })
        .then( resp => resp.json())       
        } 
static getLessons(){ 
    return fetch(`${LOCAL_URL}/admin/main/course/1/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    })
    .then( resp => resp.json())       
    }   
static getNextLesson(num){ 
    return fetch(`${BASE_URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    })
    .then( resp => resp.json())
}
static getNextLesson(num){ 
    return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    })
    .then( resp => resp.json())
}
static getPreviousLesson(num){ 
    return fetch(`${BASE_URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
}
static getPreviousLesson(num){ 
    return fetch(`${LOCAL_URL}/main/lessons/${num}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
}
static getCurrentCourse(numOfCourse){ 
    console.log("inside displayCourses fun")
    return fetch(`${BASE_URL}/main/courses/${numOfCourse}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
        //body: JSON.stringify( body )
    }).then( resp => resp.json())
    // .then( resp => console.log(resp))
    }   

static getCurrentCourse(numOfCourse){ 
    console.log("inside displayCourses fun")
    return fetch(`${LOCAL_URL}/main/courses/${numOfCourse}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
        //body: JSON.stringify( body )
    }).then( resp => resp.json())
    // .then( resp => console.log(resp))
    }

static getCourses(num){ 
    return fetch(`${BASE_URL}/main/courses/${num}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    }  

static getCourses(num){ 
    return fetch(`${LOCAL_URL}/main/courses/${num}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    } 


static getUserLessons(){                      
        return fetch(`${LOCAL_URL}/main/userLessons/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                },
        }).then( resp => resp.json())
        }
static getUserLessons(){                      
    return fetch(`${BASE_URL}/main/userLessons/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },
    }).then( resp => resp.json())
    }    
static getUserNotes(token, data){                           
    return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})                
        })
            .then( resp => resp.json())
        }  
static getUserNotes(token, data){                           
    return fetch(`${BASE_URL}/main/userLessons/1/getUserLessons/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})                
        })
            .then( resp => resp.json())
        }  
static getUserAnswersById(userId, lessonID){                     
return fetch(`${LOCAL_URL}/main/userLessons/1/getUserAnswers/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
            },
            body: JSON.stringify({'userId' : userId, 'lessonId' : lessonID})  

    })
        .then( resp => resp.json())

    }
static getUserAnswersById(userId, lessonID){                     
    return fetch(`${BASE_URL}/main/userLessons/1/getUserAnswers/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
                },
                body: JSON.stringify({'userId' : userId, 'lessonId' : lessonID})  
    
        })
            .then( resp => resp.json())
    
        }
static updateUserNotes(token, uploadData, numOfLesson){ 
    return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
    method: 'POST',
    headers: {
        'Authorization': `Token ${token}` 
            },
    body: uploadData  
            
    })
    }  
static updateUserNotes(token, uploadData, numOfLesson){ 
    return fetch(`${BASE_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
    method: 'POST',
    headers: {
        'Authorization': `Token ${token}` 
            },
    body: uploadData  
            
    })
    }  

static getUserAnswer(token, data){                        
    return fetch(`${LOCAL_URL}/main/userLessons/1/getUserLessons/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})  
        })
            .then( resp => resp.json())
    }
static getUserAnswer(token, data){                        
    return fetch(`${BASE_URL}/main/userLessons/1/getUserLessons/`, {
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

static updateUserAnswer(token, uploadData, numOfLesson){                             
    return fetch(`${LOCAL_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
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
static updateUserAnswer(token, uploadData, numOfLesson){                             
    return fetch(`${BASE_URL}/main/userLessons/${numOfLesson}/addUserLessons/`, {
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
                                
static getUserLastLesson(token, numOfCourse){                                                       
    return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/getUserCourses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
        })
            .then( resp => resp.json())

    }
static getUserLastLesson(token, numOfCourse){                                                       
    return fetch(`${BASE_URL}/main/userCourses/${numOfCourse}/getUserCourses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
        })
            .then( resp => resp.json())

    }  
static getAllUserCoursesByToken(token){                                                        
return fetch(`${LOCAL_URL}/main/userCourses/1/getAllUserCourses/`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` 
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllUserCoursesByToken(token){                                                        
    return fetch(`${BASE_URL}/main/userCourses/1/getAllUserCourses/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllUserCourses(){                                                        
return fetch(`${LOCAL_URL}/main/userCourses/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'                                                
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllUserCourses(){                                                        
    return fetch(`${BASE_URL}/main/userCourses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllCourses(){                                                        
return fetch(`${LOCAL_URL}/main/courses/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'                                                
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllCourses(){                                                        
    return fetch(`${BASE_URL}/main/courses/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllClasses(){                                                        
return fetch(`${LOCAL_URL}/main/class/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'                                                
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllClasses(){                                                        
    return fetch(`${BASE_URL}/main/class/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllSchools(){                                                        
return fetch(`${LOCAL_URL}/main/school/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'                                                
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllSchools(){                                                        
    return fetch(`${BASE_URL}/main/school/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'                                                
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllPlans(){                                                        
return fetch(`${LOCAL_URL}/main/plan/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'                                                
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllPlans(){                                                        
    return fetch(`${BASE_URL}/main/plan/`, {
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
static getAllCoursesByUserId(id){  
console.log("id is: " ,id)                                                     
return fetch(`${LOCAL_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',                                                     
            },                         
    }).then( resp => resp.json())
        //.then( resp => console.log("in API ", resp))                                       
    }
static getAllCoursesByUserId(id){  
    console.log("id is: " ,id)                                                     
    return fetch(`${BASE_URL}/main/userCourses/${id}/getAllCoursesByUserId/`, {
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

static updateUserCourse(token, data, numOfCourse){                             
return fetch(`${LOCAL_URL}/main/userCourses/${numOfCourse}/addUserCourses/`, {
    method: 'POST',
    headers: {
    
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}` 
            },
            body: JSON.stringify({'lesson' : data})  
            
    })
        .then( resp => resp.json())
    }
static updateUserCourse(token, data, numOfCourse){                             
    return fetch(`${BASE_URL}/main/userCourses/${numOfCourse}/addUserCourses/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'lesson' : data})  
                
        })
            .then( resp => resp.json())
        }
static getClassStudentsByID(classId){                                                                                  
    return fetch(`${LOCAL_URL}/main/class/${classId}/getClassStudents/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }
static getClassStudentsByID(classId){                                                                                  
    return fetch(`${BASE_URL}/main/class/${classId}/getClassStudents/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
static getClassTeacherssByID(classId){                                                                                  
return fetch(`${LOCAL_URL}/main/class/${classId}/getClassTeachers/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },                                           
})
.then( resp => resp.json())                                                                                                                               
}
static getClassTeacherssByID(classId){                                                                                  
    return fetch(`${BASE_URL}/main/class/${classId}/getClassTeachers/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
static getClassMatatzesByID(classId){                                                                                  
return fetch(`${LOCAL_URL}/main/class/${classId}/getClassMatatzes/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },                                           
})
.then( resp => resp.json())                                                                                                                               
}
static getClassMatatzesByID(classId){                                                                                  
    return fetch(`${BASE_URL}/main/class/${classId}/getClassMatatzes/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }   
static getClassCoordinatorsByID(classId){                                                                                  
return fetch(`${LOCAL_URL}/main/class/${classId}/getClassCoordinators/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },                                           
})
.then( resp => resp.json())                                                                                                                               
}
static getClassCoordinatorsByID(classId){                                                                                  
    return fetch(`${BASE_URL}/main/class/${classId}/getClassCoordinators/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }   
static getUserProfileById(id){                                     
return fetch(`${LOCAL_URL}/main/userProfile/${id}/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
        },                       
})
.then( resp => resp.json())
}
static getUserProfileById(id){                                     
    return fetch(`${BASE_URL}/main/userProfile/${id}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
            },                       
    })
    .then( resp => resp.json())
    }
static getUserByUsername(username){  
    console.log("im here");                                                                                
    return fetch(`${LOCAL_URL}/main/userProfile/1/getUserByUsername/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({'username' : username})
                                        
    })
    .then( resp => resp.json())  
//   .then( resp => resp.json()) 
}
static getUserByUsername(username){  
    console.log("im here");                                                                                
    return fetch(`${BASE_URL}/main/userProfile/1/getUserByUsername/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            }, 
            body: JSON.stringify({'username' : username})
                                        
    })
    .then( resp => resp.json())  
//   .then( resp => resp.json()) 
}
static addStudentToClass(classId, username){                             
    return fetch(`${LOCAL_URL}/main/class/${classId}/addUserToClass/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'student' : username})  
                
        })
            .then( resp => resp.json())
        }
static addStudentToClass(classId, username){                             
    return fetch(`${BASE_URL}/main/class/${classId}/addUserToClass/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'student' : username})  
                
        })
            .then( resp => resp.json())
        }
static removeStudentFromClass(classId, username){ 
console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");                            
return fetch(`${LOCAL_URL}/main/class/${classId}/removeUserFromClass/`, {
    method: 'POST',
    headers: {
    
        'Content-Type': 'application/json',
    //   'Authorization': `Token ${token}` 
            },
            body: JSON.stringify({'student' : username})  
            
    })
        .then( resp => resp.json())
    }
static removeStudentFromClass(classId, username){ 
    console.log("qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq");                            
    return fetch(`${BASE_URL}/main/class/${classId}/removeUserFromClass/`, {
        method: 'POST',
        headers: {
        
            'Content-Type': 'application/json',
        //   'Authorization': `Token ${token}` 
                },
                body: JSON.stringify({'student' : username})  
                
        })
            .then( resp => resp.json())
        }

static updateUserDetails(token, firstName, lastName, aboutMe, hobbies, myGoal ){ 
return fetch(`${LOCAL_URL}/main/userProfile/1/UpdateUserDetails/`, {
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
static updateUserDetails(token, firstName, lastName, aboutMe, hobbies, myGoal ){ 
    return fetch(`${BASE_URL}/main/userProfile/1/UpdateUserDetails/`, {
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
static getStudentsMatatz(studentId){                                                                                  
return fetch(`${LOCAL_URL}/main/group/${studentId}/getStudentsMatatz/`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },                                           
})
.then( resp => resp.json())                                                                                                                               
}
static getStudentsMatatz(studentId){                                                                                  
    return fetch(`${BASE_URL}/main/group/${studentId}/getStudentsMatatz/`, {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },                                           
    })
    .then( resp => resp.json())                                                                                                                               
    }  
static getAllUsers(){                                                        
return fetch(`${LOCAL_URL}/main/users/`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json', 
            },                         
    })                                    
        .then( resp => resp.json())                                       
    }
static getAllUsers(){                                                        
    return fetch(`${BASE_URL}/main/users/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json', 
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllTeachers(){                                                        
    return fetch(`${LOCAL_URL}/main/userProfile/1/getAllTeachers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }
static getAllTeachers(){                                                        
    return fetch(`${BASE_URL}/main/userProfile/1/getAllTeachers`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
                },                         
        })                                    
            .then( resp => resp.json())                                       
        }               
//    static removeStudentFromClass(classId, username){                             
//     return fetch(`${BASE}/main/class/${classId}/removeUserFromClass/`, {
//         method: 'POST',
//         headers: {
        
//           'Content-Type': 'application/json',
//         //   'Authorization': `Token ${token}` 
//              },
//              body: JSON.stringify({'student' : username})  
                
//         })
//           .then( resp => resp.json())
//        }
}