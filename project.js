const form = document.querySelector('form')
// const height = parseInt(document.querySelector('#height').value) => FALSE => this usecase will give you empty values


form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML= `Please Enter Valid Height ${height}`
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML= `Please Enter Valid Weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height) / 10000)).toFixed(2)
        //show the result

        if(bmi < 18.6){
            result.innerHTML = `Your bmi is <span>${bmi}</span> => Under Weight`
        }
        else if(18.6 <= bmi && bmi <= 24.9){
            result.innerHTML = `Your bmi is <span>${bmi}</span> => Normal Weight`
        }
        else if(bmi > 24.9){
            result.innerHTML = `Your bmi is <span>${bmi}</span> => Over Weight`
        }
    }
})