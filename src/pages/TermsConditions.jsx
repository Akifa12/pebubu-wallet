
import { BsWallet2 } from "react-icons/bs";
import { NavLink } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function TermsConditions() {
    return (<div className="w-full flex flex-col items-center ">
 <div className="inner-pages-wrppaer absolute z-0 bg-left-[calc(50%+316px)_top_0] bg-no-repeat rounded-b-[50px] text-white mb-[99px] pt-[30px] w-full min-h-[600px] ">
 <div className="z-[5] container text-gray-900 font-medium about-wrapper inner-pages">
          <Header />
          </div>
          </div>
        <div className="container text-gray-900 font-medium ">
  
            {/* <div className="w-full flex justify-between items-center " >
                <NavLink className="text-3xl py-10 font-bold flex  text-blue-600  " to="/" ><BsWallet2 className='w-[40px] h-[40px] text-blue-600 mr-4 ' />PEBUBU<span className='text-blue-600 ml-2'>Wallet</span></NavLink>
                <div className="flex gap-3 h-[40px]" >
                    <NavLink to="/login" className="px-4 py-2  font-medium text-blue-600 ">Login</NavLink>
                    <NavLink to="/signup" className="px-4 py-2 border border-blue-600 rounded font-medium text-blue-600 ">Sign Up</NavLink>                       
                </div>
            </div> */}
                    <div className="ineer_about">
            <div className="flex flex-col gap-4 ">
                <h1 className="text-[32px] leading-[40px] font-bold ">Terms of Use</h1>
                <p className="text-gray-700 text-[12px] leading-[16px] font-medium ">Last Updated: 5 August 2021</p>
            </div>
            <div className="mt-10 font-medium text-gray-800 flex flex-col gap-8 ">
                <p>PLEASE READ THESE TERMS OF USE ("TERMS") CAREFULLY. BY CLICKING TO ACCEPT, OR BY ACCESSING OR USING OUR SERVICES (AS DEFINED HEREIN), YOU AGREE TO BE BOUND BY THESE TERMS OF USE IN THEIR ENTIRETY AND ALL TERMS INCORPORATED BY REFERENCE INCLUDING BUT NOT LIMITED TO <a href={`${window.location.origin}/staking-terms`} rel="noreferrer" className="text-blue-400 " target="_blank"  >staking-terms</a>
                </p>
                <p>You may register a user account, access and use our Services as an individual or on behalf of a corporation, partnership, limited liability company, or business entity of any kind (collectively, “Entity”) except where the individual or Entity is located in the Cayman Islands or the United States of America or the United Kingdom or Singapore or the British Virgin Islands.
                </p>
                <p>YOU MAY NOT USE OUR SERVICES IF YOU ARE A UNITED STATES, UNITED KINGDOM, CAYMAN ISLANDS, SINGAPORE OR BRITISH VIRGIN ISLANDS RESIDENT OR IF YOU ARE LOCATED IN THE UNITED STATES, THE UNITED KINGDOM, THE CAYMAN ISLANDS, SINGAPORE OR THE BRITISH VIRGIN ISLANDS.</p>
                <p>If you are using our Services on behalf of an Entity, (a) all references to “you” or “user” throughout these Terms will include that Entity, (b) you confirm that you are authorized to accept these Terms on that Entity′s behalf, and (c) in the event you or the Entity violates these Terms, that Entity agrees to be jointly and severally liable to us. Please note that there may be specific terms or conditions applicable to entities detailed herein.</p>
                <p>THE ARBITRATION CLAUSE IN SECTION 22 GOVERNS RESOLUTION OF CERTAIN DISPUTES.</p>
            </div>
            <div className="mt-10 flex flex-col gap-14 ">
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">1. Scope</h2>
                    <p>These are the Terms of Use of PEBUBU Limited, which is referred to in these Terms as “PEBUBU”, “we” or “us”. PEBUBU is a company incorporated under the laws of Costa Rica. These Terms apply to any access and use of our web-based app known as PEBUBU Wallet, and any of our services related to or utilizing the PEBUBU Wallet, which we refer to in these Terms, collectively, as our “Services”. These Terms govern both individuals and entities that access and/or use the Services even if such individual or Entity does not register a user account.
                    </p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">2. Modification of Terms</h2>
                    <p>We may make changes to these Terms, including when there are changes in our Services, technology, regulation and for other reasons. If we do, we will provide you notice of such changes by posting the updated Terms on our website and changing the “Last Updated” date above. You should therefore refer to and read these Terms from time to time. Any amended Terms will become effective no earlier than fourteen (14) days after they are posted and prospective use of the Services after such changes become effective, except that changes addressing new functions of the PEBUBU Services or changes made for legal reasons will be effective immediately. Your continued use of the Services following the effective date of such changes will constitute your acceptance of such changes from time to time. If you do not agree to any amended Terms, you must discontinue using the Services.
                    </p>
                </section>
                <section >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">3. Eligibility and Agreement</h2>
                    <div className="flex flex-col gap-8" >
                    <p>
                        <b>3.1. General Requirements:</b>
                        The Services are intended solely for users who are 18 or older and who satisfy the criteria described in these Terms. You represent and warrant that you: (a) are of legal age to form a binding contact (at least 18 years old); (b) have not previously been suspended or removed from using our Services; and (c) have full power and authority to agree to these Terms.
                    </p>
                    <p>
                        <b>3.2. Restricted Locations:</b>
                        You may not use the Services if you are located in, or a citizen or resident of any state, country, territory or other jurisdiction where your use of the Services would be illegal or otherwise violate any applicable law. You represent and warrant that you are not a citizen or resident of any such jurisdiction and that you will not use any Services while located in any such jurisdiction. You also may not use the Services if you are located in, or a citizen or resident of, any other jurisdiction where PEBUBU has determined, at its discretion, to prohibit use of the Services. PEBUBU may implement controls to restrict access to the Services from any jurisdiction prohibited pursuant to these Terms. You agree to comply with these Terms even if PEBUBU′s methods to prevent use of the Services are not effective or can be bypassed.
                    </p>
                    <p>
                        <b>3.3.</b>
                        If you do not agree to be legally bound by these Terms, you must not use our Services. If you use our Services, you agree to do so in compliance with these Terms and with applicable laws and regulations.
                    </p>
                    </div>
                </section>
                <section>
                    <h2 className="text-[18px] leading-[24px] font-bold ">4. PEBUBU Account</h2>
                    <div  className="flex flex-col gap-8 mt-2" >
                    <p>
                        <b>4.1. Account:</b>
                        You are obligated to register for an account to access some or all of our Services (“PEBUBU Wallet Account”). To create or maintain your PEBUBU Wallet Account, or enable functions on your PEBUBU Wallet Account, you will be required to provide PEBUBU with certain information and documentation, including, as applicable, the information and documentation associated with identity verification and other screening procedures. You will: (a) create a unique password; (b) provide complete and accurate information in Latin characters; (c) promptly update any information you have provided so that the information is complete and accurate at all times; (d) maintain the security of your PEBUBU Wallet Account by protecting your password from unauthorized access or use; (e) promptly notify PEBUBU if you discover or suspect any unauthorized access or use of your PEBUBU Wallet Account or any security breaches related to your PEBUBU Wallet Account; and (f) be responsible for all activities that occur under your PEBUBU Wallet Account, and accept all risks of any authorized or unauthorized access to your PEBUBU Wallet Account. PEBUBU may refuse to permit you to register a PEBUBU Wallet Account or limit the number of PEBUBU Wallet Accounts that an individual or Entity may establish at its sole discretion.
                    </p>
                    <p>
                        <b>4.2. Entities:</b>
                        Unless your PEBUBU Wallet Account is opened on behalf of an Entity, you will use the Services and your PEBUBU Wallet Account only for your own account and not on behalf of, or for the account of, any third party. If your PEBUBU Wallet Account is opened on behalf of an Entity, you will use the Services and your PEBUBU Wallet Account solely for the account of the specified Entity. If you use any Services on behalf of an Entity, you agree to these Terms on behalf of yourself and any such Entity, and you represent and warrant that you have the authority to bind the Entity to these Terms and that both you and the Entity will be jointly and severally liable under these Terms for any violation of these Terms or any other act or omissions by the Entity or by you.
                    </p>
                    <p>
                        <b>4.3. Responsibility for Account Activities:</b>
                        You will be bound by, and hereby authorize PEBUBU to accept and rely on, any agreements, instructions, orders, authorizations and any other actions made, provided or taken by anyone who has accessed or used your PEBUBU Wallet Account regardless of whether the access is authorized or unauthorized. Upon receipt of written notice from you that the security of your PEBUBU Wallet Account has been compromised, PEBUBU will take reasonable steps to protect your PEBUBU Wallet Account, including, for example, to cease to allow actions initiated using any compromised PEBUBU Wallet Account passwords. But, the first sentence of this Section 4.3 will continue to apply to any other PEBUBU Wallet Account password, and any suitable password issued to replace the compromised PEBUBU Wallet Account password.
                    </p>
                    </div>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">5. Suspended Accounts</h2>
                    <p>PEBUBU reserves the right in its sole discretion to temporarily or permanently suspend PEBUBU Wallet Accounts. This account blocking or suspension may be a consequence of, among other things, inconsistent information regarding your identity (which are reasonable on the sole discretion of PEBUBU), suspected fraudulent activity, opening multiple accounts, a pending compliance review, the request of a third party, the request and/or order of an authority, governmental body, regulator, justice Entity, police, etc., which in the sole discretion of PEBUBU are reasonable.
                    </p>
                    <p>YOU UNDERSTAND AND AGREE THAT YOU MAY NOT BE ABLE TO ACCESS FUNDS IF YOUR VERAWALLET ACCOUNT IS SUSPENDED OR IS OTHERWISE LIMITED, AS DETAILED IN THIS SECTION 5.
                    </p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">6. Identity Verification</h2>
                    <p>PEBUBU may, in its discretion, require identity verification and other screening procedures with respect to you or transactions associated with your PEBUBU Wallet Account. These verification and screening procedures may include, without limitation, checking the information you provide against any list issued by any governmental or international authority prohibiting or limiting business activities or transactions with any persons. You may be required to provide PEBUBU with certain personal information, including, but not limited to, your name, residence address, telephone number, email address, date of birth, taxpayer identification number, government identification number, photograph of your government-issued ID or other photographic proof of your identity, ID must be in Latin Characters or will not be accepted, information regarding your business, and information regarding your bank account. You hereby authorize PEBUBU, directly or through a third party, to make any inquiries PEBUBU considers necessary to verify your identity or protect against fraud, including but not limited to: (a) query identity information contained in public reports (e.g., your name, residence address, past residence addresses, or date of birth); (b) query account information associated with your linked bank account (e.g., name or account balance); and (c) take action PEBUBU reasonably deems necessary based on the results of such inquiries and reports. You further authorize all third parties to which such inquiries or requests may be directed to fully respond to such inquiries or requests. PEBUBU will have no liability or responsibility for any permanent or temporary inability to access or use any Services, including your inability to interact with service providers through the Site, as a result of any identity verification or other screening procedures.</p>
                </section>
                <section  >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">7. Recovery Policy</h2>
                    <div className="flex flex-col gap-8" >
                    <p>
                        <b>Deposit recovery policy</b>
                    </p>
                    <ul className="flex flex-col gap-3" >
                        <li className="py-2">PEBUBU′s deposit recovery policy is that we will NOT attempt to recover any deposits that were made:
                        </li>
                        <li className="flex gap-2 items-center "><GoDotFill />To an incorrect receiving wallet address
                        </li>
                        <li className="flex gap-2 items-center "><GoDotFill />In an incorrect currency
                        </li>
                        <li className="flex gap-2 items-center "><GoDotFill />With an incorrect or missing MEMO
                        </li>
                    </ul>
                    <p>
                        <b>Withdrawal recovery policy</b>
                    </p>
                    <ul className="flex flex-col gap-3" >
                        <li className="py-2">PEBUBU′s withdrawal recovery policy is that we will NOT attempt to recover any withdrawals that were made:
                        </li>
                        <li className="flex gap-2 items-center "><GoDotFill />To an incorrect receiving wallet address</li>
                        <li className="flex gap-2 items-center "><GoDotFill />To a wallet address that doesn′t support PEBUBU token / PEBUBUB token</li>
                        <li className="flex gap-2 items-center "><GoDotFill />With an incorrect or missing MEMO</li>
                    </ul>
                    </div>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">8. Our Privacy Policy</h2>
                    <p>
                        Please refer to our Privacy Policy located at <a href={`${window.location.origin}/privacy`} rel="noreferrer" target="_blank"  className="text-blue-600 " >privacy</a>. Our Privacy Policy describes how we collect, use, and share your personal information.
                    </p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">9. Risk Disclosures; Assumption of Risks; Release of PEBUBU</h2>
                    <ul className="flex flex-col gap-3 ">
                        <li className="py-2">Receiving, storing and transferring PEBUBU (or any PEBUBU Token), and use of other Services provided by PEBUBU, involves significant risks and potential for financial losses, including without limitation the following:</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]" />The features, functions, characteristics, operation, use and other properties of PEBUBU and the software, networks, protocols, systems, and other technology (including, if applicable, any blockchain) (“Underlying Technology”) used to administer, create, issue, transfer, cancel, use or transact in PEBUBU may be complex, technical or difficult to understand or evaluate.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU and its Underlying Technology may be vulnerable to attacks on the security, integrity or operation of PEBUBU or its Underlying Technology (“Attacks”), including Attacks using computing power sufficient to overwhelm the normal operation of a blockchain or other Underlying Technology.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU or Underlying Technology may change or otherwise cease to operate as expected due to a change made to the Underlying Technology, a change made using features or functions built into the Underlying Technology or a change resulting from an Attack.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU may be cancelled, lost or double spent, or otherwise lose all or most of their value, due to forks, rollbacks, Attacks, or failure of PEBUBU to operate as intended.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU may decrease in value or lose all of its value due to various factors including discovery of wrongful conduct, market manipulation, changes to PEBUBU properties or perceived value of PEBUBU properties, Attacks, suspension or cessation of support for PEBUBU by PEBUBU or other exchanges or service providers, and other factors outside the control of PEBUBU.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU may decrease in value or lose all of its value due to legislative or regulatory activity, or other government action. Government regulation of PEBUBU and other cryptocurrencies is unsettled and rapidly evolving.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />PEBUBU may be lost if sent to the wrong address (for example but without limitation, if the address is improperly formatted, contains errors, or is intended to be used for a different type of cryptocurrency).</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />The risks described in this Section 9 may result in loss of PEBUBU, decrease in or loss of all value for PEBUBU, inability to access or transfer PEBUBU, inability to trade PEBUBU, inability to receive financial benefits available to other PEBUBU holders, and other financial losses to you. You hereby assume, and agree that PEBUBU will have no responsibility or liability for, such risks. You hereby irrevocably waive, release and discharge all claims, whether known or unknown to you, against PEBUBU and its shareholders, members, directors, officers, employees, agents and representatives related to any of the risks set forth herein.</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />You represent and warrant that you have the knowledge, experience, understanding, professional advice and information to make your own evaluation of the merits and risks of PEBUBU. You accept the risk of receiving, storing and transferring PEBUBU through the Services, and are responsible for conducting your own independent analysis of the risks specific to PEBUBU and the Services.</li>
                    </ul>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">10. User Content</h2>
                    <div  className="flex flex-col gap-3 ">
                    <p>Our Services may allow you and other users to create, post, store and share content, including messages, text, photos, videos, software and other materials (collectively, “User Content”). Except for the license you grant below, you retain all rights in and to your User Content, as between you and PEBUBU.</p>
                    <p>You grant PEBUBU a perpetual, irrevocable, nonexclusive, royalty-free, worldwide, fully paid, and sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, publicly perform and display your User Content and any name, username or likeness provided in connection with your User Content in all media formats and channels now known or later developed without compensation to you.</p>
                    <p>When you post or otherwise share User Content on or through our Services, you understand that your User Content and any associated information (such as your username or profile photo) may be visible to others.</p>
                    <p>You may not create, post, store or share any User Content that violates these Terms or for which you do not have all the rights necessary to grant us the license described above. You represent and warrant that your User Content, and our use of such content as permitted by these Terms, will not violate any rights of or cause injury to any person or entity. Although we have no obligation to screen, edit or monitor User Content, we may delete or remove User Content at any time and for any reason with or without notice.</p>
                    </div>
                </section>
                <section >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">11. General Service Terms</h2>
                    <div  className="flex flex-col gap-8" >
                    <p><b>11.1. Support for PEBUBU Only:</b> The only cryptocurrency supported by PEBUBU is PEBUBU. If you want to store, transfer and/or use any cryptocurrency other than PEBUBU, you cannot do it through the PEBUBU Services. If you send or transfer to your PEBUBU Wallet any cryptocurrency that is not PEBUBU, PEBUBU shall not be responsible for receiving or storing it in any way and you may lose any right in connection to such cryptocurrency or value without any right or claim to PEBUBU.</p>
                    <p>
                        <b>11.2. The PEBUBU Services:</b>
                        PEBUBU provides a way to store, use, and manage PEBUBU, using our wallet service, which we call PEBUBU Wallet.</p><p>To deposit or withdraw funds from your PEBUBU Wallet, simply click on the appropriate button after logging in.</p><p>When depositing to or withdrawing your PEBUBU Wallet you are solely responsible for ensuring the accuracy of the wallet information included in your transfer of PEBUBU. You shall be solely responsible for all costs, losses, damages and liabilities arising from your failure to comply with the provisions of this section. PEBUBU reserves the right to delay or not process deposit or withdrawing requests for any reason, and where required by governmental, regulatory or law enforcement requirements. PEBUBU is not liable for any act, omission, mistake, default, delay, negligence, misconduct or insolvency of any third party, including any entity or person.</p>
                    <p>
                        <b>11.2.1. Processing Fees:</b>
                        Processing fees for withdrawals are displayed on the confirmation screen</p>
                    <p>
                        <b>11.3. Continuity of Services:</b>
                        Our Services may evolve over time. This means we may make changes, replace, or discontinue (temporarily or permanently) our Services at any time for any reason with or without notice. In this case, you may be prevented from accessing or using our Services. If, in our sole discretion, we decide to permanently discontinue our Services, we will provide you with notice via our website.</p>
                    <p>
                        <b>11.4. PEBUBU Transactions:</b>
                        PEBUBU cannot and does not guarantee the value of PEBUBU. You acknowledge and agree that the value of PEBUBU is highly volatile and that buying, selling, and holding PEBUBU involves a high degree of risk. Once a transaction request has been submitted to the PEBUBU network via the Services, the PEBUBU network will automatically complete or reject the request and you will not be able to cancel or otherwise modify your transaction request. You acknowledge and agree that PEBUBU is not responsible for any errors or omissions that you make in connection with any PEBUBU transaction initiated via the Services.</p>
                    <p>
                        <b>11.5. Custody of PEBUBU:</b>
                        PEBUBU is a custodian of any PEBUBU transferred to a PEBUBU Wallet. PEBUBU does not obtain any legal or beneficial right, title or interest in your PEBUBU that you store in your PEBUBU Wallet.</p>
                    <ul className="flex flex-col gap-3">
                        <li ><b>11.6. Unacceptable Use or Conduct:</b> You will not:</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />violate any law, regulation, contract, intellectual property or other third-party right, or commit a tort while using the Services;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other users from fully enjoying the Services, or that could damage, disable, overburden, or impair the functioning of the Services in any manner;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />use the Services to pay for, support, or otherwise engage in any illegal gambling activities, fraud, money-laundering, or terrorist activities, or other illegal activities;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />use any robot, spider, crawler, scraper, or other automated means or interface not provided by PEBUBU to access the Services or to extract data;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />use or attempt to use another user′s PEBUBU Wallet Account without authorization;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />attempt to circumvent any content filtering techniques PEBUBU employs, or attempt to access any service or area of the Services that you are not authorized to access;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />introduce to the Services any malware, virus, trojan worms, logic bombs, or other harmful material;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />develop any third-party applications that interact with our Services without our prior written consent, or unless otherwise agreed;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />provide false, inaccurate, or misleading information;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />post content or communications that are, in our sole discretion, libellous, defamatory, profane, obscene, pornographic, sexually explicit, indecent, lewd, vulgar, suggestive, harassing, hateful, threatening, offensive, discriminatory, bigoted, abusive, inflammatory, fraudulent, deceptive or otherwise objectionable;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />post content containing unsolicited promotions, political campaigning, or commercial messages (SPAM) or any chain messages or user content designed to deceive or trick the user of the Service;</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />post content containing private information of any third-party including, but not limited to, addresses, phone numbers, email addresses, Social Security numbers and credit card numbers; or</li>
                        <li className="flex gap-2 items-center "><GoDotFill className="min-w-[18px]"  />encourage or induce any third party to engage in any of the activities prohibited under this Section 11.</li>
                    </ul>
                    <p>If you are blocked by PEBUBU from accessing the PEBUBU Services (including by blocking your IP address), you agree not to implement any measures to circumvent such blocking (e.g., by masking your IP address or using a proxy IP address). Use of our Services in connection with any transaction involving illegal products or services is prohibited. PEBUBU reserves the right to temporarily or permanently suspend your PEBUBU Wallet Account or otherwise restrict your use of the PEBUBU Services if any violation of this Section 11 occurs.</p>
                    <p>
                        <b>11.7. Authorized Uses of Our Services:</b>
                        You are permitted to use our Services, only as we have authorized. You are responsible for ensuring that the information in your PEBUBU Wallet Account profile is current and correct, including, as applicable, your Entity business address, your Entity business phone number, your email address, and mobile phone number. You are also responsible for maintaining adequate security, control and confidentiality of your PEBUBU Wallet Account information, including any personal identification numbers (PINs), passwords, API keys or other codes associated with your PEBUBU Wallet Account and any activity occurring within that PEBUBU Wallet Account. If you are an Entity, you are responsible for ensuring that only authorized persons use the Services on your behalf, and you agree that each such authorized person must register and obtain individual PEBUBU Wallet Account access credentials through PEBUBU′s website. The loss or compromise of this PEBUBU Wallet Account information may result in unauthorized access of your PEBUBU Wallet Account, which may result in loss or theft of any PEBUBU held in your PEBUBU Wallet Account. If you believe your PEBUBU Wallet Account has been compromised, need to report a security incident, experience any operational problems, or have a security concern, please contact us describing the issue at hand as thoroughly as possible including the date, type of problem and part of the PEBUBU  site or PEBUBU  Services where you experienced that problem. You are responsible for (i) immediately notifying us of any unauthorized use of your password or PEBUBU Wallet Account or any other breach of security, and (ii) ensuring that you exit from your PEBUBU Wallet Account at the end of each session when accessing the PEBUBU  Services. We have no responsibility for any loss that you suffer as a result of failing to comply with this Section 11 or your failure to follow or act on any notices or alerts that we may send to you.
                    </p>
                    <p>
                        <b>11.8. Using SMS/Text:</b>
                        To use the PEBUBU Services, whether as an individual account holder or a person authorized on behalf of an Entity account holder, you must provide a valid mobile phone number. This number is used as part of the authentication process. As part of using the PEBUBU Services, you are agreeing to receive SMS/text messages from us. Please note that while we do not charge you for SMS/text messages, your mobile carrier′s standard messaging rates will apply. Failure to provide a valid mobile phone number may result in restriction of your use of the PEBUBU Services. If PEBUBU suspects that your mobile number is invalid or that you are using a VOIP service to circumvent the requirement to provide a valid mobile phone number, PEBUBU may suspend or otherwise restrict your use of the PEBUBU Services.
                    </p>
                    <p>
                        <b>11.9. Export Controls:</b>
                        The PEBUBU Services may be subject to export control regulations under applicable law. By using the PEBUBU Services you represent that you are not an individual or Entity that is, or an Entity owned or controlled by persons or entities that are, (i) the subject of any sanctions administered or enforced by the U.S. Department of the Treasury′s Office of Foreign Assets Control, the U.S. Department of State, the United Nations Security Council, or any other governmental authority with jurisdiction over PEBUBU or the PEBUBU Services; (ii) identified on the Denied Persons, Entity, or Unverified Lists of the U.S. Department of Commerce′s Bureau of Industry and Security; or (iii) located, organized or resident in a country or territory that is, or whose government is, the subject of U.S. economic sanctions, including, without limitation, Cuba, Iran, North Korea, Sudan, or Syria. You further represent that you will not use the PEBUBU Services to conduct any transaction with or on behalf of any person or Entity listed in clauses (i) through (iii) above or otherwise in violation of law. PEBUBU may cease to provide the PEBUBU Services to you for any reason, and with no notice, if it determines that you have violated any of the above representations. You understand and consent that PEBUBU may be legally required to detain, to deny your access to, and to report to one or more governmental authorities, such of your property or property interests as are in PEBUBU′s possession or control in the event of certain sanctions imposing these obligations. These representations, covenants, and obligations are continuing, and you agree to notify PEBUBU immediately in writing if your status under any of the above covenants changes.
                    </p>
                    </div>
                </section>
                <section  >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">12. Intellectual Property</h2>
                    <div  className="flex flex-col gap-8" >
                    <p>
                        <b>12.1. Ownership of Intellectual Property Rights:</b>
                        We and our licensors retain all right, title, and interest (including all copyright, trademark, patent, trade secrets, and all other intellectual property rights) in our Services and all content on our Services, including our trademarks, service marks, designs, logos, URLs, and trade names that are displayed on our Service, which we refer to in these Terms, collectively, as the “PEBUBU Materials”. We hereby grant you a limited, nonexclusive, and non-sublicensable license to access and use the PEBUBU Materials for your personal or internal business use. Such license is subject to these Terms and does not permit any resale of the PEBUBU Materials; the distribution, public performance or public display of any PEBUBU Materials; modifying or otherwise making any derivative uses of the PEBUBU Materials, or any portion thereof; or any use of the PEBUBU Materials other than for their intended purposes. The license granted under this Section 12 will automatically terminate if we suspend or terminate your access to the Services. We will own exclusive rights, including all intellectual property rights, to any feedback, suggestions, ideas or other information or materials regarding PEBUBU or our Services that you provide, whether by email, posting through our Services or otherwise, which we refer to in these Terms as Feedback. Any Feedback you submit is non-confidential and will become the sole property of PEBUBU. We will be entitled to the unrestricted use and dissemination of such Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you. You may not use, copy or retransmit anything on our website without our permission. We reserve all rights not expressly granted herein.</p>
                    <p>
                        <b>12.2. Trademarks:</b>
                        PEBUBU and the PEBUBU logo are PEBUBU′s or our licensor′s trademarks, registered trademarks or service marks. Any other trademarks mentioned in our website or apps are the property of their respective owners.
                    </p>
                    <p><b>12.3. Feedback:</b>
                        You may voluntarily post, submit or otherwise communicate to us any questions, comments, suggestions, ideas, original or creative materials or other information about PEBUBU or our Services (collectively, “Feedback”). You understand that we may use such Feedback for any purpose, commercial or otherwise, without acknowledgment or compensation to you, including, without limitation, to develop, copy, publish, or improve the Feedback in PEBUBU′s sole discretion. You understand that PEBUBU may treat Feedback as nonconfidential.
                    </p>
                    </div>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">13. Third-Party Content</h2>
                    <p>We may provide information about third-party products, services, activities or events, or we may allow third parties to make their content and information available on or through the Services (collectively, “Third-Party Content”). We provide Third-Party Content as a service to those interested in such content. Your dealings or correspondence with third parties and your use of or interaction with any Third-Party Content are solely between you and the third party. PEBUBU does not control or endorse, and makes no representations or warranties regarding, any Third-Party Content, and your access to and use of such Third-Party Content is at your own risk.</p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">14. Disclaimer of Warranties</h2>
                    <p>OUR SERVICES ARE PROVIDED “AS IS” WITH NO WARRANTY OF ANY KIND. Your use of our Services is at your sole risk. We and our licensors, service providers or subcontractors (if any) make no representations or warranties about the suitability of the information, software, products and services contained in our Services for any purpose or their compliance with any accounting rules, principles or laws, and expressly disclaim any representation or warranty that the Services will be free from errors, viruses or other harmful components, that communications to or from the Services will be secure and not intercepted, that the Services and other capabilities offered from the Services will be uninterrupted, or that their content will be accurate, complete or timely. EXCEPT AS EXPRESSLY STATED IN THESE TERMS, WE DISCLAIM ALL WARRANTIES AND CONDITIONS, EXPRESS, IMPLIED, OR STATUTORY, INCLUDING WITHOUT LIMITATION THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE. YOU ACKNOWLEDGE THAT YOU HAVE NOT ENTERED INTO THIS AGREEMENT IN RELIANCE UPON ANY WARRANTY OR REPRESENTATION EXCEPT THOSE SPECIFICALLY SET FORTH IN THESE TERMS. Some jurisdictions do not allow the disclaimer of implied terms in contracts with consumers, so some or all of the disclaimers in this Section 14 may not apply to you.</p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">15. No Advice</h2>
                    <p>PEBUBU is not acting and cannot act as an advisor, including as to any financial, legal, investment, insurance and/or tax matters. Any information provided by PEBUBU is for general information only. You are solely responsible for determining whether any contemplated transaction is appropriate for you.</p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">16. Compliance with Law; Taxes</h2>
                    <p>You are responsible for complying with all applicable laws related to your activities and other use of the Services, including without limitation any reporting obligations and payment of all applicable taxes.</p>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">17. Indemnification</h2>
                    <p>You agree to indemnify, defend and hold us, our employees, agents, consultants, subsidiaries, partners, affiliates, and licensors, harmless against any and all claims, costs, losses, damages, liabilities, judgments and expenses (including reasonable fees of attorneys and other professionals) arising from or in any way related to your use of our Services, your violation of these Terms, or your violation of any rights of any other person or Entity.</p>
                </section>
                <section  >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">18. Limitation of Liability</h2>
                    <div className="flex flex-col gap-8" >
                    <p>IN NO EVENT WILL WE, OUR LICENSORS, SERVICE PROVIDERS OR SUBCONTRACTORS (IF ANY) BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE OR CONSEQUENTIAL DAMAGES (INCLUDING, WITHOUT LIMITATION, LOST PROFITS, LOSS OF USE, LOSS OF DATA OR LOSS OF GOODWILL), ARISING OUT OF OR IN CONNECTION WITH THESE TERMS OF USE, OR THE PERFORMANCE OR OPERATION OF OUR SERVICES, YOUR ACCESS TO, DISPLAY OF, USE OF THE SERVICES, OR WITH DELAY OR INABILITY TO ACCESS, DISPLAY OR USE THE SERVICES, ANY COMPUTER VIRUSES, INFORMATION, SOFTWARE, LINKED SITES, PRODUCTS OR SERVICES OBTAINED THROUGH THE SERVICES, OR THE ACT OR OMISSION OF ANY BUSINESS USING OUR SERVICES OR OTHER THIRD PARTY, WHETHER SUCH LIABILITY ARISES FROM ANY CLAIM BASED UPON BREACH OF CONTRACT, BREACH OF WARRANTY, TORT (INCLUDING NEGLIGENCE), PRODUCT LIABILITY OR OTHERWISE, AND WHETHER OR NOT WE, OUR LICENSORS, SERVICE PROVIDERS OR SUBCONTRACTORS HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>
                    <p>In no event will the aggregate liability of PEBUBU, our licensors, service providers, or subcontractors for any loss or damage that arises out of, or is connected with, any of the occurrences described above exceed the greater of $100 or the service fees that you paid to us for the service we provide through the Services during the month during which the incident occurred. The limitation of liability reflects the allocation of risk between the parties. The limitations specified in this Section 18 will survive and apply even if any limited remedy specified in these Terms is found to have failed of its essential purpose. The limitations of liability provided in these Terms inure to the benefit of us, our licensors, service providers and subcontractors.</p>
                    <p>SOME JURISDICTIONS DO NOT ALLOW CERTAIN WARRANTY DISCLAIMERS OR LIMITATIONS ON LIABILITY. ONLY DISCLAIMERS OR LIMITATIONS THAT ARE LAWFUL IN THE APPLICABLE JURISDICTION WILL APPLY TO YOU AND OUR LIABILITY WILL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED BY LAW.</p>
                    </div>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">19. Release</h2><p>To the fullest extent permitted by applicable law, you release PEBUBU from responsibility, liability, claims, demands and/or damages (actual and consequential) of every kind and nature, known and unknown (including, but not limited to, claims of negligence), arising out of or related to disputes between users and the acts or omissions of third parties.</p>
                </section>
                <section className="py-2"><h2 className="text-[18px] leading-[24px] font-bold py-[12px]">20. Transfer and Processing Data</h2><p>In order for us to provide our Services, you agree that we may process, transfer and store information about you in the United States and other countries, where you may not have the same rights and protections as you do under local law.</p></section>
                <section className="py-2"><h2 className="text-[18px] leading-[24px] font-bold py-[12px]">21. Severability</h2><p>If, for any reason, a court of competent jurisdiction finds any provision of these Terms invalid or unenforceable, that provision will be enforced to the maximum extent permissible and the other provisions of these Terms will remain in full force and effect.</p></section>
                <section >
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">22. Arbitration of Disputes and Governing Law</h2>
                    <div  className="flex flex-col gap-8" >
                    <p>PLEASE READ THE FOLLOWING PARAGRAPH CAREFULLY BECAUSE IT REQUIRES YOU TO ARBITRATE DISPUTES WITH US AND IT LIMITS THE MANNER IN WHICH YOU CAN SEEK RELIEF.</p><p>You and PEBUBU agree to arbitrate any dispute arising from these Terms or your use of our Services, except for disputes in which either party seeks equitable and other relief for the alleged unlawful use of copyrights, trademarks, trade names, logos, trade secrets, or patents. ARBITRATION PREVENTS YOU FROM SUING IN COURT OR FROM HAVING A JURY TRIAL. You and PEBUBU agree to notify each other in writing of any dispute within thirty (30) days of when it arises. Notice to PEBUBU shall be sent to <a href="mailto:support@verasity.io">support@verasity.io</a>. You and PEBUBU further agree: (a) to attempt informal resolution prior to any demand for arbitration; (b) that any arbitration will occur in Costa Rica; (c) that arbitration will be conducted confidentially by a single arbitrator in accordance with the rules of the Arbitration Law, 2012 of Costa Rica; and (d) that the courts in Costa Rica have exclusive jurisdiction over any appeals of an arbitration award and over any suit between the parties not subject to arbitration. Other than class procedures and remedies discussed below, the arbitrator has the authority to grant any remedy that would otherwise be available in court. Any dispute between the parties will be governed by these Terms and the laws of Costa Rica, without giving effect to any conflict of laws principles that may provide for the application of the law of another jurisdiction.</p><p>WHETHER THE DISPUTE IS HEARD IN ARBITRATION OR IN COURT, YOU AND VERASITY WILL NOT COMMENCE AGAINST THE OTHER A CLASS ACTION, CLASS ARBITRATION OR REPRESENTATIVE ACTION OR PROCEEDING.</p><p>The arbitrator, PEBUBU, and you will maintain the confidentiality of any arbitration proceedings, judgments and awards, including, but not limited to, all information gathered, prepared and presented for purposes of the arbitration or related to the dispute(s) therein. The arbitrator will have the authority to make appropriate rulings to safeguard confidentiality, unless the law provides to the contrary. The duty of confidentiality does not apply to the extent that disclosure is necessary to prepare for or conduct the arbitration hearing on the merits, in connection with a court application for a preliminary remedy or in connection with a judicial challenge to an arbitration award or its enforcement, or to the extent that disclosure is otherwise required by law or judicial decision.</p><p>Any claim arising out of or related to these Terms or our Services must be filed within one (1) year after such claim arose; otherwise, the claim is permanently barred, which means that you and PEBUBU will not have the right to assert the claim.</p><p>If any portion of this Section 22 is found to be unenforceable or unlawful for any reason, (a) the unenforceable or unlawful provision shall be severed from these Terms; (b) severance of the unenforceable or unlawful provision shall have no impact whatsoever on the remainder of this Section 22 or the parties′ ability to compel arbitration of any remaining claims on an individual basis pursuant to this Section 22; and (c) to the extent that any claims must therefore proceed on a class, collective, consolidated, or representative basis, such claims must be litigated in a civil court of competent jurisdiction and not in arbitration, and the parties agree that litigation of those claims shall be stayed pending the outcome of any individual claims in arbitration. Further, if any part of this Section 22 is found to prohibit an individual claim seeking public injunctive relief, that provision will have no effect to the extent such relief is allowed to be sought out of arbitration, and the remainder of this Section 22 will be enforceable.</p>
                    </div>
                </section>
                <section className="py-2">
                    <h2 className="text-[18px] leading-[24px] font-bold py-[12px]">23. Unclaimed Property</h2><p>Under applicable law, after a specified period of inactivity by you with respect to your PEBUBU Wallet Account, PEBUBU may be required to report and/or remit any PEBUBUs it is holding in custody for you in accordance with applicable laws.</p></section>
                <section className="py-2"><h2 className="text-[18px] leading-[24px] font-bold py-[12px]">24. No Waiver</h2><p>Our failure to exercise or enforce any right or provision of these Terms will not constitute a waiver of that right or provision.</p></section>
                <section className="py-2"><h2 className="text-[18px] leading-[24px] font-bold py-[12px]">25. Assignment; Entire Agreement</h2><p>PEBUBU may assign these Terms to its parent company, affiliate or subsidiary, or in connection with a merger, consolidation, or sale or other disposition of all or substantially all of its assets. These Terms, together with any other agreements that apply to you, constitute the entire and exclusive agreement between us and you regarding its subject matter, and supersede and replace any previous or contemporaneous written or oral contract, warranty, representation or understanding regarding its subject matter.</p><p></p></section>

            </div>
        </div>
        </div>
        <Footer />
    </div>)
}