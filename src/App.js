import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [park, setPark] = useState("Select an option")
  const [password, setPassword] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [gender, setGender] = useState("male")
  const [like, setLike] = useState("Select an option")
  const [username, setUsername] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [passwordError, setpasswordError] = useState("")
  const [phoneNumberError, setphoneNumberError] = useState("")
  const [genderError, setgenderError] = useState("")
  const [likeError,setlikeError] = useState("")
  const [parkError, setparkError] = useState("")
  const [emptyError,setEmptyerror] = useState("")
  const resetErrorDefault =()=>{
    setnameError("")
    setpasswordError("")
    setphoneNumberError("")
    setlikeError("")
    setemailError("")
    setparkError("")
    setgenderError("")
    setEmptyerror("")
  }
  const validate =()=>{
    if(
      name === "" || email === "" || park === "" || like=== "" || phonenumber==="" || gender === ""
    ){
         setEmptyerror("All fields are mondatory")
         setUsername("")
         return false
     }
     if(!name.match(/^[A-Za-z0-9- ]+$/)){
          setnameError("Name is not Alphanumertic")
          setUsername("")
          return false
     }
     if (!email.includes("@")){
      setemailError("Email must contain @")
      setUsername("")
      return false;
     }
     if(!park.match(/friends|family|social|facebook|other/i)){
      setparkError("Please select an option")
      setUsername("")
      return false
     }
     if(!gender.match(/male|female|other/i)){
      setgenderError("Please identify as male,female or other")
      setUsername("")
      return false
     }
     if(!phonenumber.match(/^[0-9]+$/)){
      setphoneNumberError("Phone number must contain only numbers")
      setUsername("")
      return false;
     }
     if(password.length < 6){
      setpasswordError("Password must contain atleast 6 letters")
      setUsername("")
      return false;
     }
     
     if(!like.match(/love|like|its ok|not really/i)){
      setlikeError("Please select an option")
      setUsername("")
      return false
     }
     
  }
 const handleSubmit =(e)=>{
  e.preventDefault()
  resetErrorDefault()
  const isValid = validate()
  if (isValid){
    setName("")
    setEmail("")
    setPark("")
    setLike("")
    setPassword("")
    setGender("")
    
    resetErrorDefault()
    
  }
  setUsername(email.substr(0,email.indexOf("@")))
 }

  return (
    <div className="App">
     

<header>
  <div className="text-box">

    <h1 id="title">WELLCOME TO SOUTH PARK!</h1>
      <p id="description">FILL THIS FORM FOR REGISTRATION</p>
  </div>
</header>
       <form onSubmit={handleSubmit}>
        <div className="labels">
       
          <label id="name-label" for="name">* Full Name</label></div>
        <div class="input-tab">
          <input className="input-field" type="text" id="name"  placeholder="Enter your name" value={name} onChange = {(e)=>{setName(e.target.value)}} />
          <h5>{nameError}</h5>
          </div>

         <div class="labels">
          <label id="email-label" for="email">* Email</label></div>
        <div class="input-tab">
          <input className="input-field" type="email" id="email" placeholder="email@email.com" value={email} onChange = {(e)=>{setEmail(e.target.value)}}/>
          <h5>{emailError}</h5>
          </div>
          <div class="labels">
          <label id="number-label" >* Phone No.</label>
          </div>
          <div class="input-tab">
          <input class="input-field" type="text" placeholder='Phone Number' value={phonenumber} onChange = {(e)=>{setPhonenumber(e.target.value)}}/>
          <h5>{phoneNumberError}</h5>
          </div>
          <div class="labels">
          <label id="number-label" >* Enter Password</label>
          </div>
          <div class="input-tab">
          <input class="input-field" type="password" placeholder='Password' value={password} onChange = {(e)=>{setPassword(e.target.value)}}/>
          <h5>{passwordError}</h5>
          </div>

        
         
          
          <div className='labels'>
          <label for="dropdown">* Select Gender</label></div>
          <div class="input-tab">
          <select id='dropdown'  value={gender} onChange = {(e)=>{setGender(e.target.value)}}>
          <option value="select gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <h5>{genderError}</h5>
          </div>
          <div class="labels">
          <label for="comments">Enter your Address</label></div>
        <div class="input-tab">
          <textarea class="input-field" id="comments" name="comments" rows="5" cols="40" placeholder="Your Address..."></textarea>
          </div>
          <br></br>

          
         <div class="labels">
          <label for="dropdown">* How do you know about South Park</label></div>
        <div class="input-tab">
          <select id="dropdown" value={park} onChange = {(e)=>{setPark(e.target.value)}}>
            <option disabled value selected>Select an option</option>
            <option value="friends">Friends</option>
            <option value="family">Family</option>
            <option value="social">Social Media</option>
            <option value="facebook">Facebook</option>
            <option value="other">Other</option>
          </select>
          <h5>{parkError}</h5>
          </div>
        
        <div class="labels">
          <label>* How much do you like South Park?</label></div>
          <div className='input-tab'>
          <select id="dropdown" value={like} onChange = {(e)=>{setLike(e.target.value)}}>
            <option disabled value selected>Select an option</option>
            <option value="love">I love it!</option>
            <option value="like">I like it</option>
            <option value="its ok">It's ok</option>
            <option value="not really">Not really</option>
            
          </select>
          <h5>{likeError}</h5>
          </div>

        
        
        
        
        <div class="labels">
          <label>Who do you watch South Park with? <br></br>(Check all that apply):</label>
          </div>
        <div class="input-tab">
          <input type="checkbox" name="alone" value="alone"/>Alone<br></br>
          <input type="checkbox" name="friends" value="fr"/>Friends<br></br>
          <input type="checkbox" name="family" value="fam"/>Family<br></br>
          <input type="checkbox" name="partner" value="fam"/>Partner<br></br>
          <input type="checkbox" name="other" value="other"/>Other<br></br>
        </div>        
        
        <br></br>
          <br></br>
          <h5>{emptyError}</h5>
        
        <div class="btn" >
          <button id="submit" type="submit" value="Submit" >Submit</button>
        </div>
        </form>
        <div>
         
          <h2>your username</h2>
        <h2>{username ? " " + username : ""}</h2>
      </div>
        
        
        
    
    



    </div>
  );
}



export default App;