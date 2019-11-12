//create a contact page using git hub profile 


import Link from 'next/link';
import Layout from '../components/Layout';
import axios from 'axios'
const ContactUs = (props)=>{
    // async function getInitialProps(){
    //   let response = await axios.get('https://api.github.com/users/niravkpatel28');
    //   return ({user:response.data});
    // }

   

    return (
      <Layout>
        <div>
          <h2> Contact Us page </h2>
          <p> User Name : {props.user.login}</p>
          <img 
            src={props.user.avatar_url}
            alt="User Image" 
            width='100px' height='100px'/>
        </div>
      </Layout>
    );
}

ContactUs.getInitialProps= async()=>{
  let response = await axios.get('https://api.github.com/users/niravkpatel28');
  return ({user:response.data});
}

export default ContactUs;