

flag = localStorage.getItem('flag')
if(flag!=1){
    location.href = '/'
}
else{localStorage.setItem('flag', 0)}

const song = new Audio('music/main.mp3')
const sections = document.querySelectorAll('section')
const picture_par = document.querySelector('#three>.library')
const pictures = document.querySelectorAll('#three>.library>.pic')

const msg = document.querySelector('#three>.msg')
const msg_overlay = document.querySelector('#three>.msg_ovl')
const t1 = document.querySelector('.t1')
const t2 = document.querySelector('.t2')
const t3 = document.querySelector('.t3')
const t3p1 = document.querySelectorAll('.t3>p')[0]
const t3p2 = document.querySelectorAll('.t3>p')[1]
const t4 = document.querySelector('.t4')
const t4p1 = document.querySelectorAll('.t4>p')[0]
const t4p2 = document.querySelectorAll('.t4>p')[1]
const t4p3 = document.querySelectorAll('.t4>p')[2]
const t4p4 = document.querySelectorAll('.t4>p')[3]
const t5 = document.querySelector('.t5')
const t5p1 = document.querySelectorAll('.t5>p')[0]
const t5p2 = document.querySelectorAll('.t5>p')[1]
const t6 = document.querySelector('.t6')
const t6p = document.querySelectorAll('.t6>p')
const t7 = document.querySelector('.t7')
const t7p = document.querySelectorAll('.t7>p')
const t8 = document.querySelector('.t8')
const t8p = document.querySelectorAll('.t8>p')
const t9 = document.querySelector('.t9')
const t9p1 = document.querySelectorAll('.t9>p')[0]
const t9p2 = document.querySelectorAll('.t9>p')[1]
const t9p3 = document.querySelectorAll('.t9>p')[2]
const t9p4 = document.querySelectorAll('.t9>p')[3]
const t10 = document.querySelector('.t10')
const t10p = document.querySelectorAll('.t10>p')
const t11 = document.querySelector('.t11')
const t11p = document.querySelectorAll('.t11>p')
const t12 = document.querySelector('.t12')
const t12p1 = document.querySelectorAll('.t12>p')[0]
const t12p2 = document.querySelectorAll('.t12>p')[1]
const t12p3 = document.querySelectorAll('.t12>p')[2]
const logo = document.querySelector('.logo>img')

function setZ_indices(){
    for(let i=0;i<sections.length;i++){
        sections[i].style.zIndex = `${100-i}`
    }
}
setZ_indices()

function hideSect(e,x){
    sections[e].style.opacity = '0'
    sections[e].style.pointerEvents = 'none'
    setTimeout(() => {       
        sections[x].style.opacity = '1'
        sections[x].style.pointerEvents = 'auto'
        if(x==2){
            shuffle()
            pictures.forEach(e => {
                e.style.animationPlayState = 'running'
            });
            setTimeout(() => {
                msg_overlay.style.opacity = '1'
                song.play()
                setTimeout(() => {
                    t1.style.opacity = 1
                    setTimeout(() => {
                        t1.style.opacity = 0
                        setTimeout(() => {
                            t2.style.opacity = 1
                            setTimeout(() => {
                                t2.style.opacity = 0
                                setTimeout(() => {
                                    t3.style.opacity = 1
                                    t3p1.style.opacity = 1
                                    setTimeout(() => {
                                        t3p2.style.opacity = 1
                                        setTimeout(() => {
                                            t3.style.opacity = 0
                                            setTimeout(() => {
                                                t4.style.opacity = 1
                                                t4p1.style.opacity = 1
                                                setTimeout(() => {
                                                    t4p2.style.opacity = 1
                                                    setTimeout(() => {
                                                        t4p3.style.opacity = 1
                                                        setTimeout(() => {
                                                            t4p4.style.opacity = 1
                                                            setTimeout(() => {
                                                                t4.style.opacity = 0
                                                                setTimeout(() => {
                                                                    t5.style.opacity = 1
                                                                    t5p1.style.opacity = 1
                                                                    setTimeout(() => {
                                                                        t5p2.style.opacity = 1
                                                                        setTimeout(() => {
                                                                            t5.style.opacity = 0
                                                                            setTimeout(() => {
                                                                                t6.style.opacity = 1
                                                                                let del = 0
                                                                                for(let i=1;i<=t6p.length;i++){
                                                                                    del = i*2500
                                                                                    setTimeout(() => {
                                                                                        t6p[i-1].style.opacity =1
                                                                                    }, del);
                                                                                }
                                                                                setTimeout(() => {
                                                                                    t6.style.opacity = 0
                                                                                    setTimeout(() => {
                                                                                        t7.style.opacity = 1
                                                                                        let del2 = 0
                                                                                        for(let i=1;i<=t7p.length;i++){
                                                                                            del2 = i*2500
                                                                                            setTimeout(() => {
                                                                                                t7p[i-1].style.opacity =1
                                                                                            }, del2);
                                                                                        }
                                                                                        setTimeout(() => {
                                                                                            t7.style.opacity = 0
                                                                                            setTimeout(() => {
                                                                                                t8.style.opacity = 1
                                                                                                let del2 = 0
                                                                                                for(let i=1;i<=t8p.length;i++){
                                                                                                    del3 = i*2500
                                                                                                    setTimeout(() => {
                                                                                                        t8p[i-1].style.opacity =1
                                                                                                    }, del3);
                                                                                                }
                                                                                                setTimeout(() => {
                                                                                                    t8.style.opacity = 0
                                                                                                    setTimeout(() => {
                                                                                                        t9.style.opacity = 1
                                                                                                        t9p1.style.opacity = 1
                                                                                                        setTimeout(() => {
                                                                                                            t9p2.style.opacity = 1
                                                                                                            setTimeout(() => {
                                                                                                                t9p3.style.opacity = 1
                                                                                                                setTimeout(() => {
                                                                                                                    t9p4.style.opacity = 1
                                                                                                                        setTimeout(() => {
                                                                                                                            t9.style.opacity = 0
                                                                                                                            setTimeout(() => {
                                                                                                                                t10.style.opacity = 1
                                                                                                                                let del4
                                                                                                                                for(let i=1;i<=t10p.length;i++){
                                                                                                                                    del4 = i*2500
                                                                                                                                    setTimeout(() => {
                                                                                                                                        t10p[i-1].style.opacity =1
                                                                                                                                    }, del4);
                                                                                                                                }
                                                                                                                                setTimeout(() => {
                                                                                                                                    t10.style.opacity = 0
                                                                                                                                    setTimeout(() => {
                                                                                                                                        t11.style.opacity = 1
                                                                                                                                        t11p[0].style.opacity = 1
                                                                                                                                        setTimeout(() => {
                                                                                                                                            t11p[1].style.opacity = 1
                                                                                                                                            setTimeout(() => {
                                                                                                                                                t11p[2].style.opacity = 1
                                                                                                                                                setTimeout(() => {
                                                                                                                                                    t11.style.opacity = 0
                                                                                                                                                    setTimeout(() => {
                                                                                                                                                        t12.style.opacity = 1
                                                                                                                                                        t12p1.style.opacity = 1
                                                                                                                                                        setTimeout(() => {
                                                                                                                                                            t12p2.style.opacity = 1
                                                                                                                                                            setTimeout(() => {
                                                                                                                                                                t12p3.style.opacity = 1
                                                                                                                                                                setTimeout(() => {
                                                                                                                                                                    t12.style.opacity = 0
                                                                                                                                                                    setTimeout(() => {
                                                                                                                                                                        logo.style.opacity = 1
                                                                                                                                                                        logo.style.filter = 'brightness(1.2)'
                                                                                                                                                                    }, 2000);
                                                                                                                                                                }, 7000);
                                                                                                                                                            }, 2000);
                                                                                                                                                        }, 4000);
                                                                                                                                                    }, 2000);
                                                                                                                                                }, 2000);
                                                                                                                                            }, 2000);
                                                                                                                                        }, 2000);
                                                                                                                                    }, 2000);
                                                                                                                                }, del4+3000);
                                                                                                                            }, 2000);
                                                                                                                        }, 3000);
                                                                                                                }, 3000);
                                                                                                            }, 3000);
                                                                                                        }, 3000);
                                                                                                    }, 2000);
                                                                                                }, del3+3000);
                                                                                            }, 2000);
                                                                                        }, del2+3000);
                                                                                    }, 4000);
                                                                                }, del+3000);
                                                                            }, 2000);
                                                                        }, 4500);
                                                                    }, 2000);
                                                                }, 2000);
                                                            }, 4000);
                                                        }, 3000);
                                                    }, 3000);
                                                }, 2000);
                                            }, 2000);
                                        }, 2000);
                                    }, 2000);
                                },2000);
                            }, 2000);
                        }, 2000);
                    }, 2000);
                }, 1000);
            }, 15000);
        }
    }, 2000);
    return x
}

function shuffle(){
    for(let i=0;i<60;i++){
        let r = (Math.random())
        pictures[i].style.backgroundImage = `url('images/${i+1}.jpg')`
        pictures[i].style.animationDelay = r*10+'s'
    }
}

window.onload = ()=>{
    vis = hideSect(0,0)
    setTimeout(() => {
        hideSect(0,1)
        setTimeout(() => {
            hideSect(1,2)
        }, 7000);
    }, 7000);
}



