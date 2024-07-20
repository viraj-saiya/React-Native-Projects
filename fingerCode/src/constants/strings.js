export const STRINGS = {
  start: {
    logo: 'Suvi',
    tag: 'Focused on Your Priorities',
    passcodeTagFirst: 'Create your mobile',
    passcodeTagSecond: 'unlock passcode',
    login: 'Login'
    // signUp: 'Sign Up',
  },
  onboarding: {
    skip: 'SKIP',
    login: 'Login'
    // signUp: 'Sign Up',
  },
  // deniedAccountMessage: {
  //   title: '',
  //   message:
  //     'Based on the review of your application, we are unable to open a Suvi Spending account.\n\nWe sometimes have to take this unfortunate step if we are unable to verify your identity.',
  //   contactMessage: 'Please contact Suvi Customer Service at (866) 788-4277 or banking@suvicash.com to obtain more information on your application.',
  //   spendingTitle: 'Thank you for submitting your application',
  //   spendingMsg:
  //     'Based on the review of your application, we are unable to open a Suvi Spending account.\n\nWe sometimes have to take this unfortunate step if we are unable to verify your identity.'
  // },
  closeClientMessage: {
    title: '',
    message: 'On your request we have closed your Suvi Spending account.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com if you did not request closure of your account.'
  },
  bankReviewMessage: {
    title: '',
    message: 'For the safety of your account, your account is currently on hold while we perform our security review.\n\n We apologize for any inconvenience.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com to obtain more information on your account.'
  },
  closedBankMessage: {
    title: '',
    message: 'Based on our security review, at this time, it is not possible for us to continue to provide you with a Suvi Spending Account.\n\n We apologize for any inconvenience.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com to obtain more information on your account.'
  },
  pendingAccountMessage: {
    title: 'Thank you for submitting your application.',
    message:
      'We strive to open Suvi Deposit Account on a real time basis.\n\n We are missing some information to complete the application processing.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com so that we can complete processing your application'
  },
  declinedAccountMessage: {
    title: '',
    message:
      'Based on the review of your application, we are unable to open a Suvi Spending account.\n\nWe sometimes have to take this unfortunate step if we are unable to verify your identity.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com to obtain more information on your application.'
  },
  rejectedAccountMessage: {
    title: 'Thank you for submitting your application.',
    message:
      'We strive to open Suvi Spending Account on a real time basis.\n\nFor a few submissions, our team has to manually verify the information submitted.',
    jointAccountTitle: 'Your joint account holder has confirmed you',
    jointAccountMsg:
      'We strive to open Suvi Spending Account on a real time basis.\n\nFor few submissions, our team has to manually verify the information submitted.',
    contactMessage:
      'Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com so that we can complete processing your application.'
  },
  // rejectedAccountMessage: {
  //   title: 'Your joint account holder has confirmed you',
  //   message:
  //     'We strive to open Suvi Spending Accounts on a real time basis.\n\nFor a few submissions, our team has to manually verify the information submitted.',
  //   spendingTitle: 'Thank you for submitting your application',
  //   spendingMsg:
  //     'We strive to open Suvi Spending Account on a real time basis.\n\nFor a few submissions, our team has to manually verify the information submitted.'
  // },
  setup: {
    teenSetupInfo: {
      title: 'Congratulations!',
      description1: 'You must be 18+ years to open a Suvi spending account',
      description: 'Your Parent has invited you to setup a bank account.',
      desText: 'Setting one up will take less than a minute.',
      button: 'Next'
    },
    enterDetails: {
      phone: {
        titlePhone: 'Enter your phone number',
        buttonPhone: 'Use Email',
        nextButton: 'Next',
        placeholder: 'Mobile Number',
        skip: 'Skip',
        info: 'By entering and tapping Next, you agree to\nthe',
        terms: 'Terms',
        policy: 'Privacy Policy',
        titlePhoneOptional: 'Enter your phone number (optional)'
      },
      email: {
        titleEmail: 'Enter your email',
        buttonEmail: 'Use Phone',
        placeholder: 'Login or signup with email address',
        nextButton: 'Next',
        skip: 'Skip',
        info: 'By entering and tapping Next, you agree to\nthe',
        terms: 'Terms',
        policy: 'Privacy Policy',

        titlePhoneOptional: 'Enter your phone number (optional)',
        passwordTitle: 'Log into Suvi',
        needHelp: 'Need help?',
        enterPassword: 'Enter your password',
        loginPhoneError: 'Incorrect mobile phone number or password, please try again',
        loginEmailError: 'Incorrect email or password, please try again'
      },
      verifyCode: {
        title: 'Please enter the code sent',
        placeholder: '0',
        errorMessage: '*Incorrect verification code. Please try again!',
        nextButton: 'Next',
        successTitleUpdateEmail: 'Your email was updated!',
        successTitleUpdatePhone: 'Your phone number \nwas updated!',
        failedTitleUpdateEmail: 'An account already exists with this email. Please try another email.',
        failedTitleUpdatePhone:
          'An account already exists with this phone number. Please try with another phone number.',
        descriptionUpdateEmail: 'All new communications will be sent to your new email address.',
        descriptionUpdatePhone: 'In addition to your email, you can now use your phone number to login.'
      },
      enterName: {
        title: 'Please enter your name',
        nextButton: 'Next',
        firstName: 'First Name',
        firstNamePlaceholder: 'Enter your first name',
        lastName: 'Last Name',
        lastNamePlaceholder: 'Enter your last name',
        nameErrorMsg: '*Minimum 3 letters. No number or special char.'
      },
      newPassword: {
        title: 'Enter your new password',
        nextButton: 'Next',
        newPassword: 'New Password',
        newPasswordPlaceholder: 'Enter your password',
        confirmPasswordTitle: 'Confirm your new password',
        confirmPassword: 'Confirm Password'
      }
    },
    verifyDetails: {
      title: 'Please enter the code sent',
      button: 'Next'
    },
    enterNameDetails: {
      title: 'Please enter your name',
      button: 'Next'
    },
    fundingAmount: {
      title: 'Account Funding Amount',
      button: 'Fund Account',
      placeHolder: '0.00'
    }
  },
  glideCash: {
    description: 'Cash Balance',
    button1: 'Add Cash',
    button2: 'Transfer Out',
    accountNumber: 'Routing',
    cardNumber: 'Suvi Account'
  },
  linkDebitCard: {
    link: {
      title: 'Link External Account',
      debitCard: 'Debit Card',
      bankAccount: 'Bank Account',
      proceedButton: 'Proceed without Linking'
    },
    linkCurrent: {
      title: 'Link to Current',
      button1: 'Debit Card',
      button2: 'Bank Account'
    },
    enterDebitCardNumber: {
      title: 'Enter debit card number',
      buttonNext: 'Next',
      placeholder: 'Debit Card Number'
    },
    enterDebitCardDetails: {
      title: 'Enter debit card details',
      buttonNext: 'Next',
      placeholder: 'Debit Card Number',
      placeHolderMMYY: 'MM/YY',
      placeHolderCVV: 'CVV',
      placeHolderZIP: 'ZIP',
      errorExpirtyDate: 'Expiry date is not valid.'
    },
    waitlist: {
      title: 'You’re on the waitlist!',
      titleSorry: 'We’re Sorry!',
      successMessage:
        'We’re working hard on a new banking experience. You will get notified to be one of the first users.',
      failureMessage:
        'Unfortunately, based on the information provided, we were unable to open a Suvi Deposit Account for you at this time. Due to security reasons, our Member Services team is unable to offer you with any further statistics.',
      button: 'Got it'
    }
  },
  auth: {
    signUp: {
      name: {
        title: 'Thank for Trusting ',
        description: 'To get started, tell us your name and email',
        firstname: 'First name',
        lastName: 'Last name',
        email: 'Email',
        button: 'Next',
        error: {
          firstName: '*Your first name must be at least 2 characters long',
          lastName: '*Your last name must be at least 2 characters long',
          email: '*Please correct your email address',
          emailEmpty: '*Please enter your email'
        }
      },
      createLogin: {
        title: 'Create login',
        description: 'Please enter your password',
        email: 'Email',
        password: 'Password',
        confirm: 'Confirm your password',
        button: 'Next',
        placeholder: 'Password (min. 8 characters)',
        placeholderConfirm: 'Enter your password',
        onBackTitle: 'Glide',
        onBackMessage: 'Are you sure you want to exit from app?',
        error: {
          emptyEmail: '*Please enter your email',
          incorrectEmail: '*Please correct your email address',
          password: '*Password must be of minimum 8 characters',
          incorrectPassword: '*Password does not match',
          confirm: '*Passwords do not match'
        }
      },
      feeSchedule: {
        title: 'Fee Schedule',
        button: 'Next'
      },
      home: {
        title: 'Home Address',
        description: 'Your Suvi card will be mailed\nto this address',
        street: 'Street Address (No PO Box)',
        suit: 'Apt/Suite Number',
        zip: 'Zip Code',
        city: 'City',
        stateCode: 'State',
        phone: 'Phone Number',
        button: 'Next',
        error: {
          zip: ' The address you provided is not recognized by the US Postal Service as a valid address. Please use a different address as mail sent to this location may be returned.',
          phone: 'Your Phone Number is not valid or is already associated with another Suvi account. '
        }
        //new Text
      },
      dateOfBirth: {
        title: 'Date of Birth',
        description1: 'You must be 18+ years to open a Suvi spending account',
        description: 'Please enter your date of birth',
        placeholder: 'Select date',
        button: 'Next',
        error: '*You must be 18+ years',
        selectDOB: 'Select your date of birth'
      },
      socialSecurity: {
        title: 'Identity Verification',
        description: 'To verify identity, federal regulation requires us to ask for your social security.',
        aditional: 'We do not run a credit check and your credit score will not be impacted.',
        button: 'Next',
        error: 'Your Social Security Number is not valid or is associated with another Suvi account.',
        cardInfo: 'Your Social Security Number will be encrypted with 256-bit encryption and stored securely'
      },
      socialSecurityNumber: {
        title: 'Let’s make sure it’s you',
        label: 'Your Social Security Number',
        description: 'Why we verify your identity',
        placeHolder: 'XXX-XX-XXXX',
        button: 'Next',
        invalidSSN: 'Security Number entered is not valid',
        error: 'Your Social Security Number is not valid or is already associated with another Suvi account.',
        cardInfo: 'Your Social Security Number will be encrypted with 256-bit encryption and stored securely'
      },
      activity: {
        title: 'Activity',
        description:
          'So that we can identity you and prevent fraud, please provide us with the following information. This will not affect your credit score or application',
        ocupation: 'What in your occupation?',
        income: 'What is your source of income?',
        incomeAnnual: 'Select your approximate annual income?',
        period: 'Select how often you get paid?',
        source: 'How do you get paid?',
        hear: 'How did you hear about Suvi?',
        button: 'Next',
        aditional: 'If source of income is Employment, should request approx, annual income and how often you get paid'
      },
      review: {
        title: 'Please Verify',
        firstname: 'First Name',
        secondName: 'Last Name',
        email: 'Email Address',
        phone: 'Phone Number',
        street: 'Street Address (No PO Box)',
        suit: 'Apt/Suite Number',
        city: 'City',
        stateCode: 'State',
        zip: 'Zip Code',
        date: 'Date of Birth',
        socialSecurity: 'Social Security Number',
        agreement: 'I have read and agree to the Suvi ',
        agreementHighlight: 'Electronic Communication Agreement',
        privasyPolisy: 'I have read and agree to the Suvi’s',
        privasyPolisyHighlight: 'Deposit Account',
        privacyPolisy1: ' and to the',
        privasyPolisyHighlight1: 'Privacy Policy',
        button: 'Proceed',
        firstNameInfoMsg: "*Can't change First Name",
        lastNameInfoMsg: "*Can't change Last Name",
        emailNameInfoMsg: "*Can't change Email",
        phoneNameInfoMsg: "*Can't change Phone"
      },
      tag: {
        title: 'Choose a @Suvi Tag (optional)',
        description: 'Your unique name at Suvi to transact with anyone',
        lable: 'Unique name',
        placeHolder: '@Suvi Tag',
        skip: 'Skip',
        button: 'Next'
      }
    },
    forgotEmail: {
      title: 'Forgot Email Address',
      help: 'Need help remembering which email you used to sign up for Suvi?',
      tell: 'Tell us the phone number you used to sign up.',
      phone: 'Phone number',
      button: 'Confirm'
    },
    jointSuccess: {
      title: ' has invited you to add a joint account',
      description: 'You can either open a joint account or an individual account.',
      individual: 'Individual',
      button: 'Joint',
      info: 'Type of Account you wish to open'
    },

    jointVerification: {
      title: 'Requested ',
      title2: ' to confirm',
      description: 'Thank you for accepting Sujan’s invitation to be a joint account holder.',
      descriptionLeft: 'Thank you for accepting ',
      descriptionRight: '’s invitation to be a joint account holder.',
      description2: 'As a final step, we have requested Sujan to confirm your addition as a joint account holder',
      descriptionLeft2: 'As a final step, we have requested ',
      descriptionRight2: ' to confirm your addition as a joint account holder',
      description3:
        'We will notify you once Sujan has approved and along with Sujan you will have full access to your joint account',
      descriptionLeft3: 'We will notify you once ',
      descriptionRight3: ' has approved and along with ',
      descriptionRightLast3: ' you will have full access to your joint account',
      button: 'Got It'
    }
  },
  home: {
    welcome: {
      title: (name) => `Dear ${name}, Suvi welcomes you!`,
      description1: `your digital card `,
      description2: ` is instantly available for use. Please be on look out for your physical card!`
    },
    paycheck: {
      title: 'Get Your Paycheck Early',
      description: 'Set up direct deposit and get paid up to two days early!*',
      href: 'Learn More'
    },
    fundAnotherBank: {
      title: 'Add Funds from Another Bank',
      description: 'Transfer funds in and out of Suvi by linking and external account. Link once and transfer anytime',
      href: 'Add Funds'
    },
    invite: {
      title: 'Invite Friends',
      description:
        'You and your friend will each receive $50 when they join Suvi and receive a payroll direct deposit of $200 or more!',
      button: 'Get $50',
      button1: 'Invite',
      inviteAccess: {
        description1: 'Grant Suvi access to your contacts to invite your friends',
        button1: 'Grant Access',
        button2: 'Enter contact details manually'
      },
      inviteContect: {
        contact: 'Contacts:',
        placeHolder1: '$Suvi Tag, phone or email',
        placeHolder2: 'Search people or enter a number'
      },
      inviteSuccess: {
        title: '1 Invite Sent!',
        description: 'Let your friend know to enroll in direct deposit so you both get paid.',
        button: 'Got it'
      }
    },

    spendingAC: 'Spending Account Transactions',
    spending: {
      title: 'Spending Account',
      href: 'View Transactions',
      pendingTransaction: 'Pending Transactions'
    },
    saving: {
      title: 'Saving Account',
      href: 'Open a saving account'
    },
    cardSt: {
      Processed: 'We’ve printed your debit card.',
      Shipped: 'Your card should arrive soon.',
      Activated: 'Activate your card here.'
    },
    status: {
      title: 'Card Status',
      processed: 'Processed',
      printed: 'We’ve printed your debit card.',
      shipped: 'Shipped',
      arrive: 'Your card should arrive soon.',
      activate: 'Activated',
      activated: 'Activate your card here.',
      button: 'Activated'
    },
    infoDetails: {
      'Available to Spend': ['SpendingAccount', 'availableToSpend', '', '', '', ''],
      'Total at Suvi': ['TotalAccount', 'totalRelationshipBalance', '', '', '', '']
    },
    accountInfo: {
      'Spending Account': ['PotProgress', 'accountBalance.', 'spending', 'POTS-SPENDING', 'SpendingPotList'],
      'Savings Account': ['SavingPotList', 'accountBalance.', 'savings', 'pots-savings', 'SavingPotList']
    },
    overdraw: {
      title: 'Overdraw without Incurring Fees!',
      descp: (val) => `No fee Overdraw lets you overdraw up to $${val} on debit card purchase with no fees.`,
      btn: 'Unlock No Fee Overdraw'
    },
    viewTrans: 'View Transactions',
    manage: 'Manage',
    pots: 'Pot',
    routing: 'Routing',
    suviAccount: 'Suvi Account',
    transferFund: 'Transfer Funds',
    payFriends: {
      title: 'Pay Friends Instantly',
      invite: '+Invite'
    }
  },
  profile: {
    personal: {
      title: 'Personal Information',
      name: 'Name',
      email: 'Email Address',
      phone: 'Mobile Number',
      address: 'Address',
      profile: 'Profile',
      faceId: 'Face ID',
      touchId: 'Touch ID',
      password: 'Password',
      languages: 'Language'
    },
    suvTag: {
      title: 'Enter your preferred \nSuvi Tag',
      name: 'Suvi Tag',
      email: 'Email Address',
      placeHolder: 'Suvi Tag',
      tagNotAvailableTitle: 'Your preferred Suvi Tag is not available',
      tryDiffButton: 'Try a Different Suvi Tag',
      tagOptions: 'Here are few options',
      updateTagTitle: 'Your Suvi Tag was updated!',
      updateTagDescription:
        'Your friends can pay or request funds using your Suvi Tag in addition to your email or phone number'
    },
    account: {
      title: 'Account Information',
      routing: 'Routing Number',
      account: 'Account Number',
      setUp: 'Set Up Direct Deposit'
    },
    openCreditBuilder: {
      title: 'Open Suvi Credit Builder',
      text: 'Build credit with no fee or interest (0% APR) credit card'
    },
    FundMe: {
      title: 'FundMe',
      spot: 'FundMe',
      owerdraw: (amount) => `Overdraw up to $${amount} with no fees`,
      noFee: 'No Fee Overdraw',
      overdrawLimit: 'Overdraw Limit',
      modal: {
        title: 'FundMe Turned Off',
        // description: 'Are you sure you want to turn this off? You will have to re-enroll to turn it back on.',
        description: 'You can re-enroll in FundMe when you are ready.',
        turnOff: 'Got it',
        // button: 'Got it'
      }
    },
    addFundsCreditBuilder: {
      title: 'Add Funds to Suvi Credit Builder'
    },
    debit: {
      title: 'Debit Card',
      allow: 'Allow Transactions',
      international: 'International Transactions',
      view: 'View My Card',
      replace: 'Replace My Card',
      changePin: 'Set Card PIN'
    },
    replaceCardStatus: {
      title: 'How to Request Replacement Card Online?',
      contactMessage: 'If your card has been compromised, please immediately mark the card as inactive in the settings screen. \n\n To request a replacement card, please call Suvi support at (866) 788-4277.',
      message: 'This online feature is only available to members who spend $500+ in monthly purchase transactions or have set up direct deposit.',
      description: '',
      button: 'Got it'
    },

    notification: {
      title: 'Notifications',
      balance: 'Purchase made by card',
      balanceNotified: 'Be notified every morning',
      transaction: 'Balance alert every morning',
      transactionNotified: 'Be notified every time you spend',
      requestApproved: 'Request approved by parents',
      requestDenied: 'Request denied by parents',
      purchase: 'Purchase made by card',
      purchaseDecline: 'Purchase declined at merchant',
      cardTurnOff: 'Card turned off by parent',
      allowanceAvailable: 'Allowance available',
      allowanceChore: 'Allowance/chore deposited',
      fundParent: 'Funds from parent',
      payGreaterErrorMsg: 'Received request is more than your available balance in spending account.'
    },
    savingsAccountAutoSave: {
      title: 'Savings Account - Auto Save Rules',
      periodically: 'Periodically',
      whenDeposit: 'When I get a deposit',
      roundUp: 'Round Up'
    },
    saving: {
      title: 'Automatic Saving',
      save: 'Save when I Get Paid \nSave 10% of each direct deposit',
      round: 'Round Ups \nRound up your purchases'
    },
    linked: {
      title: 'Linked Accounts',
      link: 'Link external bank account'
    },
    documents: {
      title: 'Documents',
      statement: 'View Statements',
      account: 'View account statements',
      policies: 'Account Policies & Terms',
      stuff: 'All the legal stuff'
    },
    bonus: {
      title: 'Bonus',
      invite: 'Invite friends, get paid!'
    },
    signOut: 'Sign Out',
    version1: 'Suvi Version 1.0.1.0',
    version2: 'Made with love in California'
  },
  transferFromExistingBank: {
    from: 'From',
    to: 'To',
    button: 'Next',
    modalTitle: 'Let’s review!',
    amount: 'Amount',
    available: 'Available',
    transfer: 'Transfer',
    cancel: 'Cancel'
  },
  support: {
    message:
      'Hello, Starbuks\nWelcome to SuviBot support!\nI can give you immediate answers to your questions about Suvi.',
    invite: 'How do I invite friends?',
    balance: 'What is my balance?',
    placeholder: 'Type to reply..',
    end: 'End chat?',
    more: 'Ask more questions?',
    sesssionEnd: 'This chat session has ended',
    chatEndDescription: 'Thank you for chatting with us, if you can take a minute and rate this chat:',
    response: 'Hello, \nThanks for your support Suvi satisfied from your solution to my problem.'
  },
  moveMoney: {
    add: 'Add Money to Suvi',
    transfers: 'Transfer Money and Pay Bills',
    linkStatusTitle: 'How to Unlock Link Account Manually Feature?',
    linkStatusDescription: `This feature is only available to members who have set up payroll direct deposit.`,
    button: 'Got it',
    limitExceedTitle: 'How to Add or Remove External Bank Accounts Online?',
    limitExceedDescription: `There is no restriction to add or remove external bank accounts online for members who spend $500+ in monthly purchase transactions or have set up direct deposit.
    
    \n\nTo add or remove external bank accounts, please call Suvi support at (866) 788-4277.`
  },
  login: {
    title: ['Log into ', 'Suvi'],
    instruction: 'Enter your password',
    errorMessages: {
      userNotFound: 'Incorrect password or email, please try again.',
      wrongPassword: 'Incorrect password, please try again.',
      invalidEmailOrPass: 'Incorrect email or password, please try again',
      default: 'Something went wrong.'
    },
    modal: {
      title: 'Trouble logging in?',
      password: 'I forgot my password',
      email: 'I forgot my email address',
      cancel: 'Cancel'
    }
  },
  inviteFriends: {
    description:
      'You and Your friend will each get $50 when they join Suvi and receive a payroll direct deposit of $100 or more!',
    placeholder: 'Search people or enter a number',
    amount: '$50',
    button: 'Invite'
  },
  fundsFromAnotherBank: {
    title: 'Add Funds from Another Bank!',
    description: 'Transfer money in and out of Suvi by linking external account. Link once and transfer anytime.',
    button: 'Connect your Bank'
  },
  creditBuilderCard: {
    title: 'Credit Builder Card',
    status: 'Available to Spend',
    button: 'Add money',
    buttonTitle: 'Build credit with no fee or interest (0% APR) credit card.'
  },
  spendingAccount: {
    title: 'Spending Account',
    placeholderTitle: 'No Transactions yet!',
    placeholderDescription:
      'This is where you’ll be able to see all your debit card transactions and Spending Account transfers',
    balance: 'Balance',
    expiration: 'expiration',
    transactions: 'Last transactions',
    button: 'MORE TRANSACTIONS'
  },
  savingAccount: {
    title: 'Saving Account',
    placeholderTitle: 'No Transfers yet!',
    placeholderDescription: 'This is where you’ll be able to see all the transfers to and from your Savings Account.',
    balance: 'Balance:',
    text: 'Auto save with Savings Account and Goals / Pots.'
  },
  directDeposit: {
    title: 'Direct Deposit',
    paycheck: 'Get your paycheck early!',
    into: 'When you get your paycheck deposited into Suvi,\nyou will have access to funds up to 2 days earlier than most banks.',
    button: 'Get Direct Deposit Form',
    form: 'Give your employer the pre-filled form or your account numbers below - it’s that easy.',
    routing: 'Routing Number',
    accountTxt: 'Account Number'
  },
  getDirectDepositForm: {
    title: 'Please provide us your email address where we can email you a pre-filled form',
    successTitle: 'Your Direct Deposit Form will be emailed to the email address provided',
    button: 'Confirm Email Address',
    emailPlaceHolder: 'Please enter your email address'
  },
  decisionPending: {
    title: 'Are you getting paid\nby your employer',
    firstHeading: 'Suvi makes it convinent for you to receive your paycheck directly in your account.',
    secondHeading:
      'We provide you with your own unique accunt number that can be used to receive direct deposit from your employer.',
    thirdHeading:
      'Please Note that the account number can only be used to receive direct deposit from your employer. Suvi reserves the right to return all other funds.',
    goBackButton: 'Go Back',
    gettingPaid: 'I am Getting Paid by Employer'
  },
  linkedBankAccounts: {
    title: 'Linked Accounts',
    titleBankAccount: 'From Linked Bank Accounts',
    titleDebitCard: 'From Linked Debit Card Accounts',
    buttonLinkBankAccount: 'Linked Debit Bank Account',
    buttonLinkAnotherAccount: 'Linked Another Debit Card',
    glideAccounts: 'Suvi Accounts',
    txtTransferAmount: 'Transfer money in and out of Suvi by linking external account. Link once and transfer anytime.',
    openSavings: 'Open Savings Account',
    buttonDebit: 'Debit Card',
    buttonBank: 'Bank Account',
    buttonLink: 'Link External Account'
  },
  sendMoney: {
    title: 'Send Money',
    business: 'Business',
    individual: 'Individual'
  },
  sendMoneyBusiness: {
    name: 'Name',
    account: 'Account Number',
    button: 'Add Recipient',
    placeholderName: 'Enter business name',
    placeholderAccountNumber: 'Enter account number'
  },
  sendMoneyIndividual: {
    name: 'Name',
    account: 'Account Number',
    button: 'Add Recipient',
    placeholderName: 'Enter first and last name'
  },
  mailCheck: {
    title: 'Mail a check from Suvi',
    description:
      'We encourage you to use pay friends to instantly send funds.  If you need to send a check to either business or individual, please provide us the recipient details and we’ll take care of the rest.',
    button: 'Send A Check'
  },
  payFriends: {
    title: 'Pay Friends',
    to: 'Pay To:',
    pay: 'Pay',
    For: 'For:',
    placeholder: 'Suvi tag, phone or email',
    description: 'Grant Suvi access to your\ncontacts to pay your friends',
    contacts: 'Contacts:',
    button: 'Grant Access',
    buttonEnter: 'Enter contact details manually',
    modal: {
      title: 'Let’s confirm!',
      send: 'Send',
      ForTxt: 'for',
      confirm: 'Confirm',
      cancel: 'Cancel',
      request: 'Request'
    },
    request: 'Request',
    addSpendingAccount: 'Add to Spending Account',
    forPlaceholder: 'Drinks, dinner, cinema, etc.',
    suviCash: 'Suvi Cash',
    addNote: 'Add a Note',
    requestFrom: 'Request From:',
    next: 'Next'
  },
  payFriendsSuccess: {
    title: 'Transfer sent!',
    titleRequest: 'Transfer requested!',
    button: 'Got it',
    sendTo: 'has been sent to',
    refund: 'We notified your friend about the transfer and will refund your money if it’s not claimed within 14 days.',
    requestedTo: 'has been requested'
  },
  statement: {
    title: 'Statements',
    spending: 'Spending',
    saving: 'Savings',
    teen:'Teen'
  },
  spending: {
    empty: {
      title: 'No Transactions Yet!',
      description:
        'This is where you’ll be able to see all your debit card transactions and spending account transfers',
      pendingTransaction: 'Pending Transactions'
    }
  },
  saving: {
    empty: {
      title: 'No Statement Yet',
      description: 'This is where you’ll be able to see all your statements for savings account'
    }
  },
  replaceMyCard: {
    title: 'Replace my Card',
    coming: 'New card, coming right up.',
    happened: 'What happened to your card?',
    lost: 'My card is lost',
    damaged: 'My card is damaged',
    stolen: 'My card was stolen'
  },
  replaceMyCardAddress: {
    title: 'Replace my Card',
    confirm: 'Confirm your address',
    label: 'Home address',
    edit: 'Edit',
    button: 'Confirm'
  },
  replaceMyCardChangeAddress: {
    title: 'What’s your new home address?',
    street: 'Street Address (No PO Box)',
    suit: 'Apt/Suite Number',
    zip: 'Zip Code',
    city: 'City',
    state: 'State',
    button: 'Next'
  },
  replaceMyCardOnWay: {
    button: 'Got it',
    title: 'Your replacement card is on the way',
    envelop: 'Look out for a Suvi envelope in your mail.',
    digital: 'Your digital card is active and can be used for puchases.',
    digital1: 'Your new digital card is active and can be used for puchases.',
    access: 'You can access your digital card from dashboard and settings page.'
  },
  editProfile: {
    title: 'Edit Profile',
    password: 'Update Password',
    modal: {
      title: 'You can’t change your name.',
      description: 'If you need to change your name, please contact Member Services.',
      button: 'Got it'
    }
  },
  profileSettings: {
    title: 'Profile Settings'
  },
  currentPassword: {
    title: 'Enter your current password',
    label: 'Current Password',
    button: 'Next'
  },
  newPassword: {
    title: 'Enter your new password',
    label: 'New Password',
    button: 'Next',
    password: 'password'
  },
  confirmNewPassword: {
    title: 'Confirm your new password',
    label: 'Confirm Password',
    button: 'Next'
  },
  passwordConfirmed: {
    title: 'Your password was updated!',
    description: 'You can now use your new password to log in.',
    button: 'Got it'
  },
  newEmail: {
    titleOptional: 'Enter your email (optional)',
    title: 'Enter your new email address',
    label: 'Email Address',
    skip: 'Skip',
    button: 'Next',
    error: '*Please correct your email address',
    modal: {
      title: 'Whoops',
      description: 'Something went wrong. Please try again',
      button: 'Got it'
    },
    email: 'email'
  },
  jointAccount: {
    title: 'Joint Account',
    inviteJointAccount: 'Invite Joint Account Holder',
    manageJointAccount: 'Manage Joint Account Holder',
    jointAccountWith: 'Joint Account with',
    confirmJointAccount: 'Confirm Joint Account Holder'
  },
  emailConfirmed: {
    title: 'Your email was updated!',
    description: '',
    // description: 'All new communications will be sent to your new email address.',
    button: 'Got it'
  },
  newPhone: {
    title: 'Enter your new phone number',
    label: 'Mobile Number',
    button: 'Next',
    updated: 'Your Phone Number was updated!'
  },
  newAddress: {
    title: 'Enter your new home address',
    street: 'Street Address (No PO Box)',
    suit: 'Apt/Suite Number',
    zip: 'Zip Code',
    city: 'City',
    stateCode: 'State',
    phone: 'Phone number',
    button: 'Next'
  },
  openPolicies: {
    title: 'Open Savings',
    description: "By tapping 'Open account', I acknowledge and certify, under penalty of perjury, that:",
    rule1: 'The number l entered is my correct taxpayer identification number; and',
    rule2:
      'I am not subject to backup withholding because (a) I am exempt from backup withholding, or (b) I have not been notified by the Internal Revenue Service (IRS) that I am subject to backup withholding as a result of a failure to report all interest or dividends, or (c) the IRS has notified me that I am no longer subject to backup withholding; and',
    rule3: 'I am a U.S. citizen or permanent resident; and',
    rule4: 'I am exempt from',
    ruleBlue: ' FATCA reporting.',
    rule5: 'If I am subject to backup withholding I will not be able to open an account. ',
    able: 'If I am subject to backup withholding I will not be able to open an account. ',
    electronicAgree: 'I have read and agree to the',
    electronicAgreeBlue: ' Electronic Communication Agreement.',
    savingAgree: 'I have read and agree to the',
    savingAgreeBlue: ' Savings Account Agreement',
    button: 'Open Account',
    depositAgreement: ' Deposit Account Agreement.'
  },
  accountOpened: {
    title: 'You’re all set!',
    description: 'Use your Suvi card and watch your\nsavings grow, automatically.',
    button: 'Done'
  },
  automaticSavingAccount: {
    title: 'Turn on Auto Savings!',
    description:
      'Transfer money to your Savings Account from your Spending Account every time you get a direct deposit or on a regular interval or when you make a purchase with your Suvi Debit card.',
    descriptionBlue: 'Auto Savings Account Agreement.',
    buttonTurnOn: 'Turn On',
    buttonNotNow: 'Not Now'
  },
  setAutoSave: {
    title: 'Set an Autosave Rule',
    description: 'How often do you want to transfer \nmoney to your savings?',
    button: 'Done',
    roundUp: {
      title: 'Round Up Purchase',
      editTitle: 'Edit Round Up Purchase',
      description: 'Round Up purchases up to nearest $5 and save in Savings Account',
      button: 'Save',
      buttonDelete: 'Delete',
      buttonUpdate: 'Update'
    },
    saveWhenDeposit: {
      title: 'Save from Direct Deposit',
      editTitle: 'Edit Save from Direct Deposit',
      description: 'Please select a portion of Direct Deposit that you want to Auto Save to your Savings Account.',
      button: 'Save',
      buttonDelete: 'Delete',
      buttonUpdate: 'Update'
    },
    savePeriodically: {
      title: 'Save Periodically',
      editTitle: 'Edit Periodic Schedule',
      description: 'Amount per transfer from Spending Account',
      howOften: 'How often',
      button: 'Confirm Schedule',
      lblSource: 'Source of Income',
      errorAmount: 'Invalid amount',
      errorPicker: 'Select valid period',
      buttonDelete: 'Delete',
      buttonUpdate: 'Update'
    }
  },
  setGoal: {
    title: 'Set Goal',
    goal: 'Goal',
    goalPlaceholder: 'Write something...',
    amount: 'Amount',
    amountPlaceholder: 'Write something...',
    date: 'Goal target date',
    datePlaceholder: 'DD-MM-YYYY',
    statement: 'Goal statement',
    statementPlaceholder: 'Write something...',
    button: 'Create Goal'
  },
  goalProgress: {
    title: 'Goal Status',
    button: 'Add More'
  },
  plaidLinkBank: {
    title: 'Suvi uses Plaid to link your bank',
    secure: 'Secure',
    transfer: 'Transfer of your information is encrypted end-to-end.',
    Private: 'Private',
    credentials: 'Your credentials will never be made accessible to Suvi.',
    button: 'Continue',
    agree: 'By selecting "Continue" you agree to the',
    policy: 'Plaid End User Privacy Police'
  },
  listOfBanksPlaid: {
    placeholder: 'Search',
    search: 'Don’t see your bank? Search instead'
  },
  linkedAccounts: {
    title: 'Linked Accounts',
    link: 'Link Another Account'
  },
  payBills: {
    title: 'Pay Bills',
    online: 'Pay with Suvi Debit Card (online)',
    description:
      'Almost all billers accept debit cards. Enter your card number on the biller’s website and you’re good to go!',
    numbers: 'Pay with your Account Numbers'
  },
  depositCash: {
    title: 'Deposit Cash',
    locations:
      'You can deposit cash into your account at over 90,000 retail locations (including Walgreens and CVS) using Green Dot.',
    limit:
      'Just give the cashier your Suvi card and the cash you want to deposit. You can add up to $1,500 every day and $5,000 per month.',
    service:
      'Retailers may charge their own fees for this service. Green Dot services are limited to only cash deposits into your Suvi Spending Account and not purchases of MoneyPak. ',
    see: 'It may take up to a few hours to see the cash deposit reflected in your account.',
    button: 'See locations near me'
  },
  mobileCheckDepositUnlock: {
    title: 'How to unlock Mobile \nCheck Deposit',
    description:
      'This feature is only available to members who have set up payroll direct deposit. Once you receive your paychecks electronically through Suvi, you’ll be able to access this feature.',
    link: 'Enroll in Direct Deposit',
    button: 'Turn On'
  },
  mobileDepositEnterAmount: {
    title: 'Deposit Amount',
    enter: 'Enter the amount to be deposited.',
    minimum: '$0.01 Minimum',
    button: 'Next'
  },
 
 
  mobileDepositSuccess: {
    title: 'Mobile check deposit',
    submitted: 'Your check has been submitted and is\nbeing reviewed.',
    amount: 'Check amount',
    available: 'Available',
    transaction: 'Transaction ID',
    hold: 'Please hold onto your check until we let you know funds are available.',
    button: 'Got it'
  },
  mobileDepositError: {
    title: 'It looks like we’re having\nsome difficulty with your\nmobile check deposit.',
    oops: 'Oops! The check image(s) were\nunreadable. Please retake the\nphoto(s) making sure the check is flat,\non a dark surface and in a well lit area.',
    buttonGot: 'Got it',
    buttonCancel: 'Cancel'
  },
  internalTransfer: {
    title: 'Transfers',
    from: 'From:',
    to: 'To:',
    button: 'Next',
    modal: {
      title: 'Let’s review!',
      amount: 'Amount:',
      from: 'From:',
      to: 'To:',
      available: 'Available:',
      instantly: 'Instantly',
      transfer: 'Transfer',
      cancel: 'Cancel',
      available2: 'In 1-3 business days',
      available3: 'Hold for 5 business days'
    }
  },
  transferComplete: {
    title: 'Transfer complete',
    description: 'to',
    button: 'Got it',
    descriptionTransferred: 'has been transferred from'
  },
  transferFrom: {
    title: 'Transfer From',
    glideAccounts: 'Suvi Accounts',
    linkedAccountsTxt: 'Linked Bank Accounts'
  },
  transferTo: {
    title: 'Transfer To',
    glideAccounts: 'Suvi Accounts',
    linkedAccountsTxt: 'Linked Bank Accounts'
  },
  fundMe: {
    title: 'One more step to unlock\nFundME',
    receive:
      'Setup $500 or more per month in total direct deposits to get access to FundMe and overdraw on debit card purchases with no fees.',
    limit: 'Your limit starts at $20 and can increase to up to $200 based on your account activity and history.',
    button: 'SET UP DIRECT DEPOSIT '
  },
  transferConfirmed: {
    title: 'Transfer requested',
    transferred: 'will be transferred to your',
    description: ' We’ll send you a notification then!',
    button: 'Got it'
  },
  disabledCardNotification: {
    title: 'Warning: Your lost card will be immediately deactivated.',
    security:
      " For your security, your card will no longer work. Once you get your replacement card, you'll need to update all services that use your card numbers.",
    misplaced:
      ' Think you misplaced it? Instead of requesting a new card, block transactions in settings until you find it.',
    gotIt: 'Got it',
    cancel: 'Cancel'
  },
  policiesAndTerms: {
    title: 'Account Policies & Terms'
  },
  setLowBalanceAlert: {
    title: 'Set Low Balance Alert',
    description: 'If you balance falls below this amount, we’ll alert you to prevent a negative or low balance. ',
    button: 'Alert me if below ',
    modal: {
      title: 'Alert Settings',
      choose: 'Choose your notifications',
      text: 'Text or Push Notifications',
      notify: 'We will notify you when your balance to go below $',
      sms: 'Text (SMS)',
      notifications: 'Push Notifications'
    }
  },
  mailCheckReview: {
    title: 'Let’s Review',
    to: 'To:',
    estimated: 'Estimated arrival:',
    amount: 'Amount:',
    description: 'Funds will be immediately withdrawn from your\nSpending Account when you tap “Send Check”.',
    button: 'Send check'
  },
  checkOnWay: {
    title: 'Your check is on the way!',
    message: ' The funds have been withdrawn from your account. You can view the check in mailed check history.',
    button: 'Got it'
  },
  mailedCheckHistory: {
    title: 'Mailed Check History'
  },
  checkRecipientList: {
    to: 'To:',
    add: '+ Add New Recipient',
    view: 'View Mailed Check History',
    historytitle1: 'Clarie Cooper',
    historytitle2: 'Peter Carpenter'
  },
  checkAmount: {
    title: 'How much do you want to send to',
    button: 'Next',
    note: 'You have a $5,000 limit.'
  },
  predictingTheFuture: {
    predicting: 'Predicting the Future',
    titleBoxOne: 'Stay on top of Spending',
    subtitleBoxOne: 'Budget income & expenses',
    titleBoxTwo: 'Lowest balance until Payday',
    subtitleBoxTwo: 'Predict your lowest balance until Payday \n- get notification',
    analyzing: 'Analyzing the past',
    titleBoxThree: 'Spend by Categories',
    subtitleBoxThree: 'Monitor Spend by Categories',
    titleBoxFour: 'Cash Flow',
    subtitleBoxFour: 'Income, spend and savings'
  },
  addressComponent: {
    street: 'Street Address (No PO Box)',
    suit: 'Apt/Suite Number',
    zip: 'Zip Code',
    city: 'City',
    stateCode: 'State',
    phone: 'Phone number',
    address: 'Address 2 (Optional)',
    placeHolderStreet: 'Enter street number and name',
    placeHolderSuit: ' Enter apt/suite number',
    placeHolderZip: 'Enter zip code',
    placeHolderCity: 'Enter city',
    zipCodeError: '*5 digits. No letter or special char.',
    cityError: '*No number or special char.',
    stateError: '*Please select state.'
  },
  teenSpending: {
    balance: 'Balance',
    amount: '$113.12',
    addSpend: 'ADD SPENDING',
    addCategory: 'Add a specific store or category',
    moveCash: 'Move Cash',
    addCash: 'Add Cash',
    showTransaction: 'Show Transactions',
    tab1: 'Spending',
    tab2: 'Savings',
    tab3: 'Earn',
    allowanceSchedule: 'Allowance Schedule',
    categories: 'Categories',
    noSpendingTitle: 'No Transactions yet!',
    noSpendingDescription:
      'This is where you’ll be able to see all your debit card transactions and Spending Account transfers',
    showSavingRule: 'Show Saving Rules',
    noSavingDescription: 'This is where you’ll be able to see all the transfers to and from your Savings Account.',
    allowanceMessage: 'Help teach teens about earning money',
    allowanaces: 'Allowances',
    allowancesDescription: 'Choose the frequency, the day, and how much goes to spending and saving',
    setAllowances: 'Set an Allowance',
    chores: 'Chores',
    choresDescription: 'Create weekly chores (that can be paid with allowance) or one-time chores.',
    addChores: 'Add Chores',
    addAllowances: 'Add Allowance',
    done: 'Done',
    showSchedule: 'Show Schedule',
    description: 'Description',
    spedingAccount: 'Spending Account',
    savingAccount: 'Savings Account',
    approveChore: 'Approve Chores',
    chore: 'Chore',
    allowance: 'Allowance'
  },
  teenSchedule: {
    tabAllowance1: 'One Time Allowances',
    tabAllowance2: 'Recurring Allowances',
    tabChores1: 'One Time Chores',
    tabChores2: 'Recurring Chores',
    allowanaces: 'Allowances',
    chores: 'Chores',
    cancel: 'Cancel',
    complete: 'Complete',
    choresComplete: 'Chores Completed',
    choresApproved: 'Chores Approved',
    allowancesComplete: 'Allowances Completed',
    completed: 'Completed',
    toCompleted: 'To Complete',
    approve: 'Approve',
    toApprove: 'To Approve'
  },
  addCash: {
    balance: 'Available Balance',
    button: 'Add Cash',
    label: 'Add Cash',
    specific: 'Specific Stores',
    requestApproval: 'Request Approval',
    lblMessage: 'Message:',
    placeHolder: 'Add a message',
    availableSpendingBalance: 'Your Spending Balance:',
    addCashAmountCategoriesGreater: 'Entered amount in categories is more than add cash amount.',
    requestAmountCategoriesGreater: 'Entered amount in categories is more than request cash amount. ',
    teenAddReqTitle: 'Request Add Cash'
  },
  moveCash: {
    button: 'Move Cash',
    label: 'Move Cash',
    from: 'From',
    to: 'To',
    fromPlaceHolder: 'Select From',
    toPlaceHolder: 'Select To',
    lblMessage: 'Message:',
    placeHolder: 'Add a message',
    requestApproval: 'Request Move Approval',
    decline: 'Decline',
    approve: 'Approve',
    teenMoveReqTitle: 'Requested Move Cash'
  },
  teenCategorie: {
    tab1: 'Spending',
    tab2: 'Savings',
    tab3: 'Earn',
    balanceLabel: 'Spending Balance:',
    spedingCat: 'Spending categories',
    savingCat: 'Saving categories',
    earnCat: 'Earn categories',
    specific: 'Specific Stores',
    specificMessage: "You don't have any specific stores.",
    buttonAddSpecific: 'Add a Specific Store',
    addCash: 'Add Cash',
    transaction: 'Transactions',
    moveCash: 'Move Cash',
    categories: 'Categories',
    reqAdd: 'Request Add',
    reqMove: 'Request Move'
  },
  teenAddCategorie: {
    description: 'Add Specific Store or Website',
    label: 'Find a store',
    placeHolder: 'Enter a store or website',
    button: 'Add'
  },
  notifications: {
    header: 'Requests',
    title: 'Available to Spend:',
    suviCash: 'Approve Cash you Received',
    suviCashTeen: `Cash Received - Parent to Approve`,
    teenSuviCash: 'Cash Received - Parent to Approve',
    received: 'Received Requests for Funds',
    requests: 'Requests made to Friends',
    paid: 'Paid Funds Pending Acceptance',
    buttonDecline: 'Decline',
    buttonAccept: 'Accept',
    buttonPay: 'Pay',
    teenList: 'Approve Cash your Teen Received',
    payGreaterErrorMsg: 'Received request is more than your available balance in spending account.',
    noPendingRequests: 'Your currently do not have any request',
    pendingReqForParent: 'Payment pending for approval'
  },
  teenList: {
    title: 'Teen Account',
    lastUpdated: 'Last updated',
    spedingAcc: 'Spending Account',
    savingAcc: 'Saving Account',
    pendingAcceptance: 'Pending Acceptance',
    btnDelete: 'Delete',
    btnResend: 'Resend',
    btnCreate: 'Create Teen Account',
    cancelTitle: 'Cancel Invite',
    cancelMessage: 'Are you sure you want to cancel the teen account invite?',
    deleteTxt: 'Delete',
    cancel: 'Cancel',
    invited: 'Invited on'
  },
  teenAccount: {
    empower: 'Empower your teen to manage their money in a secure place.',
    createTeenBtn: 'Create & Manage Teen Accounts',
    createTeenAccount: {
      title: 'Create Teen Account',
      slctImage: 'Choose Image',
      firstName: 'First Name',
      lastName: 'Last Name',
      firstNameMsg: "Enter your child's first name",
      lastNameMsg: "Enter your child's last name",
      phoneNumber: "Enter your child's mobile number",
      emailAddress: 'Email Address',
      emailAddressMsg: "Enter your child's email address",
      button: 'Create Account'
    }
  },
  teenLimitStatus: {
    title: 'How to Invite Additional Teens Online?',
    message: 'There is no restriction to invite additional teens online for members who spend $500+ in monthly purchase transactions or have set up direct deposit.',
    contactMessage: 'To invite additional teens, please call Suvi support at (866) 788-4277.',
    button: 'Got it',

  },
  createAllowances: {
    createTitle: 'Create Allowances',
    editTitle: 'Edit Allowances',
    createChoresTitle: 'Create Chores',
    editChoresTitle: 'Edit Chores',
    name: 'Allowance Name',
    namePlaceHolder: 'Enter Allowance name',
    nameChore: 'Chore Name',
    namePlaceHolderChore: 'Enter Chore name',
    description: 'Allowance Description',
    descriptionChore: 'Chore Description',
    descPlaceHolder: 'Describe the allowance...',
    descPlaceHolderChore: 'Describe the chore...',
    amount: 'Allowance Amount',
    amountChore: 'Chore Amount',
    amountPlaceholder: 'Enter allowance amount',
    amountPlaceholderChore: 'Enter chore amount',
    fundingFrequency: 'Funding Frequency',
    oneTime: 'One Time Contribution',
    recurring: 'Recurring Contribution',
    howOften: 'How often?',
    whereTo: 'Where to?',
    button: 'Save Allowance',
    buttonChore: 'Save Chore',
    deleteTxt: 'Delete',
    save: 'Save',
    percentage: 'Percentage Allowance in:',
    percentageChore: 'Percentage Chore in:',
    spend: 'Spend Anywhere',
    savings: 'Savings Account',
    updateTxt: 'Update'
  },
  creatSpendingPot: {
    title: 'Create Spending Pot',
    title1: 'Spending Pots',
    description: 'Plan for near term goals'
  },
  creatSavingsPot: {
    title: 'Create Savings Pot',
    savingPot: 'Savings Pots',
    description: 'Save for your future'
  },
  lockUnlock: {
    title: 'Lock / Unlock Pot',
    radioDes1: 'Would you like to unlock your Pot',
    radioTitle1: 'Unlock this Pot',
    radioDes2: 'How long would you like to lock your Pot for?',
    radioTitle2: 'Lock this Pot',
    Locked: 'Locked',
    Unlocked: 'Unlocked'
  },
  setupDerictDepodit: {
    title: 'One more step to unlock\nFundME',
    description1:
      'Setup $200 or more per month in total direct deposits to get access to FundMe and overdraw on debit card purchases with no fees.',
    description2: 'Your limit starts at $20 and can increase to up to $200 based on your account activity and history.',
    button: 'SET UP DIRECT DEPOSIT '
  },
  fundMeOver: {
    title: (amount) => `Overdraw up to $${amount} on debit card purchases with no fees!`,
    description:
      "Suvi's got your back. Your FundMe limit is based on a variety of factors, such as account activity and history.\n\n FundMe doesn't work for Pay Friends, ATM withdrawals, ACH transfers, or Checks.",
    button: 'Next'
  },
  fundMeTermsConditions: {
    title: 'FundMe\nTerms & Conditions',
    description: 'When you use FundMe, your next deposit will apply towards any amounts overdrawn.',
    checkBoxTitle: 'Check the box below to\nenroll in FundMe',
    terms: 'I have read and agreed to the FundMe Terms & Conditions and consent to being enrolled in FundMe.',
    button: 'Enroll Now'
  },
  fundAllSet: {
    title: "You're all Set!",
    description: (amount) =>
      `You're enrolled in FundMe and can now overdraw up to $${amount} on debit card purchases. If you ever want to un-enroll from FundMe, you can turn it off in Settings.`,
    button: 'Got it'
  },
  setYourLimit: {
    title: 'Set Your Limit',
    description: (amount) =>
      `Suvi's got your back! You can overdraw up to $${amount} on debit card purchases.\n\nYour max limit is based on a variety of factors, such as account activity and history.`,
    button: 'Save',
    modalTitle: 'Turn Off FundMe?',
    modalMessage: 'Are you sure you want to turn this off? You will have to re-enroll to turn it back on.',
    turnOff: 'Turn Off',
    cancel: 'Cancel'
  },
  viewMyCard: {
    title: 'My Card'
  },
  setPin: {
    title: 'Set Your Debit/ATM PIN',
    buttonTitle: 'Set PIN'
  },
  replaceNotification: {
    title: 'Warning: Your card will be immediately deactivated.',
    des1: 'For your security, your card will no longer work.',
    des2: 'We have activated a digital card for you with different 16 digit numbers.  Please update all services that use the deactivated card number with your new number'
  },
  paySchedule: {
    title: 'Confirm Main Income & \n Pay Schedule',
    titleDes: 'Select your main paycheck. Feel free to \n change or add manually',
    addManually: 'Add Manually',
    item1: 'Lorem imsum turing dwer',
    item1Des: 'On the 3rd & 27th of every month',
    item2: 'Based on your last Payday, we predict that your next Payday will be Jan 8',
    buttonTitle: 'Confirm Pay Schedule'
  },
  lookPastTransactions: {
    title: 'We look at your past transactions \n to predict your future spending',
    description:
      'You will have the opportunity to either remove past transactions that you will not incur in the future and add any expense that you plan to incur in the future'
  },
  budgetExpenses: {
    title: 'Budget Expenses',
    description:
      'Here is what we found. Add new expenses or edit / remove past expenses that you will not incur in the future',
    addExpense: 'Add Expense',
    statementTitle1: 'Netflix Subscription',
    period1: 'every month on 26th',
    statementTitle2: 'Transfer to Savings',
    period2: 'every week on Monday',
    buttonTitle: 'Budget Expenses'
  },
  lowestBalance: {
    title: 'Lowest balance until Payday',
    availableBalance: 'Available balance:',
    payCheck: 'Pay Check on',
    expenseUntill: 'Expense until payday:',
    lowestBalance: 'Goal Amount:',
    editExpese: 'Edit expenses ',
    netflixSubscription: 'Netflix Subscription',
    des1: 'every month on 26th',
    transferSavings: 'Transfer to Savings',
    des2: 'every week on Monday',
    buttonTitle: 'Set Lowest Balance Notification'
  },
  alertSuccess: {
    title: 'Great - We’ll notify you!',
    buttonTitle: 'Done'
  },
  editIncome: {
    title: 'Income Details',
    inputLabale1: 'Source',
    placeHolder: 'Type here',
    inputLabale2: 'Amount',
    radioButton1: 'One Time Income',
    radioButton2: 'Recurring Income / Pay',
    optionTitle1: 'How often?',
    optionTitle2: 'When',
    selectPlace: 'Select',
    buttonTitle: 'Confirm Pay Schedule',
    done: 'Done'
  },
  requestSuccessJointAccount: {
    title: 'An invite has been sent',
    message1: 'You have invited',
    message2: ' at',
    message3: 'to be a joint holder.',
    message4: 'Invitation is valid till',
    reSend: 'Resend Invitation',
    button: 'Done',
    cancel: 'Cancel Invite',
    alertTitle: 'Joint Account',
    alertSuccessMessage: 'Reminder sent',
    alertFaildMessage: 'Invite cancelled',
    alertCancelTitle: 'Cancel Invite',
    alertMessage: 'Are you sure you want to cancel the joint account invite?'
  },
  requestJointAccount: {
    title: 'Add a joint account holder',
    description: 'A Joint account holder will have complete control on the account similar to you.',
    lable1: 'First Name',
    placeholder1: 'Enter your invitees first name',
    lable2: 'Last Name',
    placeholder2: 'Enter your invitees last name',
    lable3: 'Mobile Number',
    placeholder3: 'Enter your invitees mobile number',
    lable4: 'Email Address',
    placeholder4: 'Enter your invitees email address',
    sendInvite: 'Send Invite'
  },
  createPot: {
    title: 'Create a Pot',
    lable: 'Name your Pot',
    placeHolder: 'Write something...',
    button: 'Create Pot'
  },
  potFrom: {
    lblFundlingTitle: 'Funding Frequency',
    lblOneTime: 'One Time Contribution',
    lblRecurring: 'Recurring Contribution',
    lblHowOften: 'How often?',
    label: 'Goal target date',
    inputlable1: 'Contribution Amount',
    errorMessage1: 'Invalid contribution amount',
    placeHolder1: 'Enter Contribution Amount',
    errorMessage2: 'Invalid amount',
    inputlable2: 'Expected Amount by Target Date',
    placeHolder2: 'Enter expected amount by target date',
    errorMessage3: 'Invalid contribution',
    inputlable3: 'Amount per Contribution',
    placeHolder3: 'Calculated',
    inputlable4: 'Goal statement',
    placeHolder4: 'Write a goal statement for your pot...',
    enterExceptedAndContrAmt: '*Please enter Expected Amount or Amount per Contribution',
    expectedAmtGreaterThanFundedAmt: '*Expected amount should be greater than funded amount'
  },
  requestJointAccountStatus: {
    title: 'accepted your joint account holder invite',
    mainLable1: 'Please confirm',
    mainLable2: 'details:',
    label1: 'Joint Account Holder Invitees Name',
    label2: 'Invitees Email Address / Phone Number',
    description: 'If you confirm',
    description2: 'as joint account holder, ',
    description3: 'will immediately have full access to your joint account along with you',
    button1: 'Confirm Joint Accountholder',
    button2: 'Cancel Joint Accountholder Invite',
    rejectedMsg:
      'We strive to add joint account holder on a real time basis after they are approved by you. \n\nFor few submissions, our team has to manually verify the information submitted.\n\n Please contact Suvi Customer Service at (866) 788-4277 or\n banking@suvicash.com so that we can complete the processing of your joint account holder application.',
    createdMsg:
      ' is now a joint account holder and will immediately have full access to your joint account along with you',
    pageTitle: 'Thank you for confirming the joint account holder'
  },
  invitePot: {
    title: 'Pot Name has been cashed out',
    description: ' has been deposited in your savings account',
    button: 'Got it'
  },
  activateCard: {
    buttonNext: 'Next',
    placeHolderMMYY: 'MM/YY',
    placeHolderCVV: 'CVV',
    placeHolderZIP: 'Last 4 digits'
  },
  genralMessages: {
    createTeenWarning:
      'Invitation can only be sent either to a phone number or email address.  Please remove one of the fields.'
  },
  accountCreation: {
    errorMessage: 'Please try after sometime or call Suvi support at (866) 788-4277.'
  }
};
export const DEFAULT_URL = 'https://reactnative.dev/img/tiny_logo.png';
