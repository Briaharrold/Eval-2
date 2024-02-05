let a = document.getElementById('aBtn');
let b = document.getElementById('bBtn');
let c = document.getElementById('cBtn');
let d = document.getElementById('dBtn');
let e = document.getElementById('eBtn');
let f = document.getElementById('fBtn');
let g = document.getElementById('gBtn');
let h = document.getElementById('hBtn');
let i = document.getElementById('iBtn');
let j = document.getElementById('jBtn');
let k = document.getElementById('kBtn');
let l = document.getElementById('lBtn');
let m = document.getElementById('mBtn');
let n = document.getElementById('nBtn');
let o = document.getElementById('oBtn');
let p = document.getElementById('pBtn');
let q = document.getElementById('qBtn');
let r = document.getElementById('rBtn');
let s = document.getElementById('sBtn');
let t = document.getElementById('tBtn');
let u = document.getElementById('uBtn');
let v = document.getElementById('vBtn');
let w = document.getElementById('wBtn');
let x = document.getElementById('xBtn');
let y = document.getElementById('yBtn');
let z = document.getElementById('zBtn');
let studentName = document.getElementById('studentName');

const StudentApi =  async()=> {
const promise = await fetch('../data/students.json');
const data = await promise.json();
const studentData = data.People;
return studentData;
}
a.addEventListener('click', async ()=>{
const people = await StudentApi();
console.log(people);
const firstLet = people.filter(name => {
    return name.firstName.startsWith('A'); 
  });

if(firstLet.length  == 0){
    studentName.textContent = 'No Student';
}else{
    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
    studentName.textContent = names;
}

});
b.addEventListener('click', async ()=>{
    const people = await StudentApi();
    console.log(people);
    const firstLet = people.filter(name => {
        return name.firstName.startsWith('B'); 
      });
    
    if(firstLet.length  == 0){
        studentName.textContent = 'No Student';
    }else{
        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
        studentName.textContent = names;
    }
    
    });
c.addEventListener('click', async ()=>{
        const people = await StudentApi();
        console.log(people);
        const firstLet = people.filter(name => {
            return name.firstName.startsWith('C'); 
          });
        
        if(firstLet.length  == 0){
            studentName.textContent = 'No Student';
        }else{
            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
            studentName.textContent = names;
        }
        
        });

        d.addEventListener('click', async ()=>{
            const people = await StudentApi();
            console.log(people);
            const firstLet = people.filter(name => {
                return name.firstName.startsWith('D'); 
              });
            
            if(firstLet.length  == 0){
                studentName.textContent = 'No Student';
            }else{
                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                studentName.textContent = names;
            }
            
            });
            e.addEventListener('click', async ()=>{
                const people = await StudentApi();
                console.log(people);
                const firstLet = people.filter(name => {
                    return name.firstName.startsWith('E'); 
                  });
                
                if(firstLet.length  == 0){
                    studentName.textContent = 'No Student';
                }else{
                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                    studentName.textContent = names;
                }
                
                });
                f.addEventListener('click', async ()=>{
                    const people = await StudentApi();
                    console.log(people);
                    const firstLet = people.filter(name => {
                        return name.firstName.startsWith('F'); 
                      });
                    
                    if(firstLet.length  == 0){
                        studentName.textContent = 'No Student';
                    }else{
                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                        studentName.textContent = names;
                    }
                    
                    });
                    g.addEventListener('click', async ()=>{
                        const people = await StudentApi();
                        console.log(people);
                        const firstLet = people.filter(name => {
                            return name.firstName.startsWith('G'); 
                          });
                        
                        if(firstLet.length  == 0){
                            studentName.textContent = 'No Student';
                        }else{
                            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                            studentName.textContent = names;
                        }
                        
                        });
                        h.addEventListener('click', async ()=>{
                            const people = await StudentApi();
                            console.log(people);
                            const firstLet = people.filter(name => {
                                return name.firstName.startsWith('H'); 
                              });
                            
                            if(firstLet.length  == 0){
                                studentName.textContent = 'No Student';
                            }else{
                                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                studentName.textContent = names;
                            }
                            
                            });

                            i.addEventListener('click', async ()=>{
                                const people = await StudentApi();
                                console.log(people);
                                const firstLet = people.filter(name => {
                                    return name.firstName.startsWith('I'); 
                                  });
                                
                                if(firstLet.length  == 0){
                                    studentName.textContent = 'No Student';
                                }else{
                                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                    studentName.textContent = names;
                                }
                                
                                });

                                j.addEventListener('click', async ()=>{
                                    const people = await StudentApi();
                                    console.log(people);
                                    const firstLet = people.filter(name => {
                                        return name.firstName.startsWith('J'); 
                                      });
                                    
                                    if(firstLet.length  == 0){
                                        studentName.textContent = 'No Student';
                                    }else{
                                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                        studentName.textContent = names;
                                    }
                                    
                                    });

                                    k.addEventListener('click', async ()=>{
                                        const people = await StudentApi();
                                        console.log(people);
                                        const firstLet = people.filter(name => {
                                            return name.firstName.startsWith('K'); 
                                          });
                                        
                                        if(firstLet.length  == 0){
                                            studentName.textContent = 'No Student';
                                        }else{
                                            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                            studentName.textContent = names;
                                        }
                                        
                                        });

                                        l.addEventListener('click', async ()=>{
                                            const people = await StudentApi();
                                            console.log(people);
                                            const firstLet = people.filter(name => {
                                                return name.firstName.startsWith('L'); 
                                              });
                                            
                                            if(firstLet.length  == 0){
                                                studentName.textContent = 'No Student';
                                            }else{
                                                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                studentName.textContent = names;
                                            }
                                            
                                            });

                                            m.addEventListener('click', async ()=>{
                                                const people = await StudentApi();
                                                console.log(people);
                                                const firstLet = people.filter(name => {
                                                    return name.firstName.startsWith('M'); 
                                                  });
                                                
                                                if(firstLet.length  == 0){
                                                    studentName.textContent = 'No Student';
                                                }else{
                                                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                    studentName.textContent = names;
                                                }
                                                
                                                });

                                                n.addEventListener('click', async ()=>{
                                                    const people = await StudentApi();
                                                    console.log(people);
                                                    const firstLet = people.filter(name => {
                                                        return name.firstName.startsWith('N'); 
                                                      });
                                                    
                                                    if(firstLet.length  == 0){
                                                        studentName.textContent = 'No Student';
                                                    }else{
                                                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                        studentName.textContent = names;
                                                    }
                                                    
                                                    });

                                                    o.addEventListener('click', async ()=>{
                                                        const people = await StudentApi();
                                                        console.log(people);
                                                        const firstLet = people.filter(name => {
                                                            return name.firstName.startsWith('O'); 
                                                          });
                                                        
                                                        if(firstLet.length  == 0){
                                                            studentName.textContent = 'No Student';
                                                        }else{
                                                            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                            studentName.textContent = names;
                                                        }
                                                        
                                                        });

                                                        p.addEventListener('click', async ()=>{
                                                            const people = await StudentApi();
                                                            console.log(people);
                                                            const firstLet = people.filter(name => {
                                                                return name.firstName.startsWith('P'); 
                                                              });
                                                            
                                                            if(firstLet.length  == 0){
                                                                studentName.textContent = 'No Student';
                                                            }else{
                                                                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                studentName.textContent = names;
                                                            }
                                                            
                                                            });

                                                            q.addEventListener('click', async ()=>{
                                                                const people = await StudentApi();
                                                                console.log(people);
                                                                const firstLet = people.filter(name => {
                                                                    return name.firstName.startsWith('Q'); 
                                                                  });
                                                                
                                                                if(firstLet.length  == 0){
                                                                    studentName.textContent = 'No Student';
                                                                }else{
                                                                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                    studentName.textContent = names;
                                                                }
                                                                
                                                                });


                                                                r.addEventListener('click', async ()=>{
                                                                    const people = await StudentApi();
                                                                    console.log(people);
                                                                    const firstLet = people.filter(name => {
                                                                        return name.firstName.startsWith('R'); 
                                                                      });
                                                                    
                                                                    if(firstLet.length  == 0){
                                                                        studentName.textContent = 'No Student';
                                                                    }else{
                                                                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                        studentName.textContent = names;
                                                                    }
                                                                    
                                                                    });

                                                                    s.addEventListener('click', async ()=>{
                                                                        const people = await StudentApi();
                                                                        console.log(people);
                                                                        const firstLet = people.filter(name => {
                                                                            return name.firstName.startsWith('S'); 
                                                                          });
                                                                        
                                                                        if(firstLet.length  == 0){
                                                                            studentName.textContent = 'No Student';
                                                                        }else{
                                                                            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                            studentName.textContent = names;
                                                                        }
                                                                        
                                                                        });

                                                                        t.addEventListener('click', async ()=>{
                                                                            const people = await StudentApi();
                                                                            console.log(people);
                                                                            const firstLet = people.filter(name => {
                                                                                return name.firstName.startsWith('T'); 
                                                                              });
                                                                            
                                                                            if(firstLet.length  == 0){
                                                                                studentName.textContent = 'No Student';
                                                                            }else{
                                                                                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                studentName.textContent = names;
                                                                            }
                                                                            
                                                                            });


                                                                            u.addEventListener('click', async ()=>{
                                                                                const people = await StudentApi();
                                                                                console.log(people);
                                                                                const firstLet = people.filter(name => {
                                                                                    return name.firstName.startsWith('U'); 
                                                                                  });
                                                                                
                                                                                if(firstLet.length  == 0){
                                                                                    studentName.textContent = 'No Student';
                                                                                }else{
                                                                                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                    studentName.textContent = names;
                                                                                }
                                                                                
                                                                                });

                                                                                v.addEventListener('click', async ()=>{
                                                                                    const people = await StudentApi();
                                                                                    console.log(people);
                                                                                    const firstLet = people.filter(name => {
                                                                                        return name.firstName.startsWith('V'); 
                                                                                      });
                                                                                    
                                                                                    if(firstLet.length  == 0){
                                                                                        studentName.textContent = 'No Student';
                                                                                    }else{
                                                                                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                        studentName.textContent = names;
                                                                                    }
                                                                                    
                                                                                    });

                                                                                    w.addEventListener('click', async ()=>{
                                                                                        const people = await StudentApi();
                                                                                        console.log(people);
                                                                                        const firstLet = people.filter(name => {
                                                                                            return name.firstName.startsWith('W'); 
                                                                                          });
                                                                                        
                                                                                        if(firstLet.length  == 0){
                                                                                            studentName.textContent = 'No Student';
                                                                                        }else{
                                                                                            const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                            studentName.textContent = names;
                                                                                        }
                                                                                        
                                                                                        });

                                                                                        x.addEventListener('click', async ()=>{
                                                                                            const people = await StudentApi();
                                                                                            console.log(people);
                                                                                            const firstLet = people.filter(name => {
                                                                                                return name.firstName.startsWith('X'); 
                                                                                              });
                                                                                            
                                                                                            if(firstLet.length  == 0){
                                                                                                studentName.textContent = 'No Student';
                                                                                            }else{
                                                                                                const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                                studentName.textContent = names;
                                                                                            }
                                                                                            
                                                                                            });

                                                                                            y.addEventListener('click', async ()=>{
                                                                                                const people = await StudentApi();
                                                                                                console.log(people);
                                                                                                const firstLet = people.filter(name => {
                                                                                                    return name.firstName.startsWith('Y'); 
                                                                                                  });
                                                                                                
                                                                                                if(firstLet.length  == 0){
                                                                                                    studentName.textContent = 'No Student';
                                                                                                }else{
                                                                                                    const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                                    studentName.textContent = names;
                                                                                                }
                                                                                                
                                                                                                });

                                                                                                z.addEventListener('click', async ()=>{
                                                                                                    const people = await StudentApi();
                                                                                                    console.log(people);
                                                                                                    const firstLet = people.filter(name => {
                                                                                                        return name.firstName.startsWith('Z'); 
                                                                                                      });
                                                                                                    
                                                                                                    if(firstLet.length  == 0){
                                                                                                        studentName.textContent = 'No Student';
                                                                                                    }else{
                                                                                                        const names = firstLet.map(name=> name.firstName + ' ' + name.lastName).join(', ');
                                                                                                        studentName.textContent = names;
                                                                                                    }
                                                                                                    
                                                                                                    });
        
    



