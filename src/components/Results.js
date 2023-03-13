import React,{useEffect, useState}from 'react'
import { useLocation } from 'react-router-dom';
import {Loading} from './Loading';

import { useResultContext } from '../contexts/ResultContextProvider';
export const Results = () => {
    const {result,getResults,isLoading,searchTerm,err,setSearchTerm} = useResultContext();
    const location = useLocation();
    // API CALL
    // useEffect(()=>{
    //     getResults("how to draw better drawings");
    //     console.log(location.pathname,result);
    // },[]);
        
    
        console.log(result);
          if(isLoading)return <Loading/>
          else 
            return(
                <div className="flex flex-wrap justify-between space-y-6 sm:px-56">
                    {(result.length>0)?result.map(({url,title,snippet,domain,position},index)=>
                    {
                        return(<div key={index} className="md:w-2/5 w-full">
                            <a href={url} target="_blank" rel="noreferrer" >
                                <p className="text-sm">
                                </p>
                                <p>Result: {position}</p>
                                <p>Domain: {domain}</p>
                                <p className="text-lg hover:underline dark:text-blue-300 text-blue-700">
                                    {title}
                                    <br/>
                                   
                                    <span>desc is: {snippet.slice(0,40)}</span>
                                    <br/>
                                    
                                </p>


                            </a>
                        </div>)
                    }):(
                      <>
                      <h1>Error Occured is {err}</h1>
                      </>
                      )
                    }
                </div>
            )

};

// Demo result
    
    // const result=[
    //     {
    //       "title": "How to Make a Website From Scratch: A Beginner's Guide",
    //       "url": "https://www.hostinger.com/tutorials/how-to-make-a-website",
    //       "desc": "Learn how to build a website that brings traffic and converts. Actionable steps, checklists, in-depth resources, and expert tips included. How Long Does It Take to Create a Website? How Do I Create a Website for Free?"
    //     },
    //     {
    //       "title": "Website Builder — Create a Website in Minutes — Squarespace",
    //       "url": "https://www.squarespace.com/",
    //       "desc": "Create a customizable website or online store with an all-in-one solution from Squarespace. Choose a website template and start your free trial today. ‎ How to Make a Website · ‎ Pricing · ‎ Website Overview · ‎ Popular Website Templates"
    //     },
    //     {
    //       "title": "10 Key Steps To Building A Great Small Business Website",
    //       "url": "https://www.forbes.com/sites/allbusiness/2019/05/25/small-business-website-tips/",
    //       "desc": "May 25, 2019 — 1. Obtain a good domain name · 2. Purchase secure, scalable website hosting with good tech support · 3. Prominently display a clear description of ... ‎ 1. Obtain A Good Domain Name · ‎ 2. Purchase Secure, Scalable... · ‎ 3. Prominently Display A..."
    //     },
    //     {
    //       "title": "How to Create a Website From Scratch (Step-By-Step ...",
    //       "url": "https://bootcamp.berkeley.edu/blog/how-to-create-website-from-scratch-guide/",
    //       "desc": "How to Create a Website From Scratch in 10 Steps · 1. Hone and Align Relevant Skills · 2. Establish a Goal · 3. Choose a Hosting Provider · 4. Choose a Domain Name. Where can I learn how to build a website from scratch? Do I have to know coding to create a website?"
    //     },
    //     {
    //       "title": "How To Build a Website: A Complete Guide to ... - Digital.com",
    //       "url": "https://digital.com/how-to-create-a-website/",
    //       "desc": "8 steps · 30 min · Materials: Web Hosting, Domain Registrar, Website Builder, Computer 1. Creating a website could take as little as a day, or it could take months. How long it takes to create a website depends on your experience, goals, and how you build your website. Before you build a website, you need to decide what you want your website to do. You can use a website to inform, educate, sell, entertain, or gather data. Starting with your goal can help you choose the best website builder for your purpose. For example, if you want to sell products, choose an e-commerce platform or a website builder with e-commerce features. 2. A domain name is the URL or website address that users type into a browser to visit your website. For example, our domain name is digital.com. It’s important to register a domain name that represents you or your business because it will be a big part of your branding. There are already so many websites on the internet that you may not be able to secure your preferred domain name, but that’s OK. Be flexible and choose a .org or .net, or you can add dashes, if necessary. Remember that you’ll have to be very specific when telling people how to reach your website. 3. You’ll need a hosting service for your website whether you plan to use WordPress or a website builder. A web host server is where your domain name will reside — it’s where you’ll “park” your domain name. Many hosts include one-click installs of WordPress, and several include proprietary site builders."
    //     },
    //     {
    //       "title": "How to Create a Website in 9 Simple Steps - QuickSprout",
    //       "url": "https://www.quicksprout.com/how-to-create-a-website/",
    //       "desc": "7 steps · 1 hr, 30 min · Materials: Domain Name, Web Hosting, WordPress Theme ... 1. Choosing a domain is one of the most important decisions you can make for your site. 2. A website needs just two things to “live”: A domain name and a web host. You just came up with your domain name. Now it’s time to put it to use with a good web host. 3. Now that you have your domain and web host, it’s time to choose your website builder (CMS). We recommend that you use WordPress to build your website."
    //     },
    //     {
    //       "title": "Get started on a website with Google",
    //       "url": "https://support.google.com/business/answer/7032839?hl=en",
    //       "desc": "Create your website · Go to your Business Profile. Learn how to find your profile. · Select Edit profile and then Business information. Tip: On your desktop, ..."
    //     }
    //   ];
