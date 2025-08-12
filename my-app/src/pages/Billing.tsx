import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

import { useLocation } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";

import { CreditCard, Lock, ArrowLeft, CircleX , BadgeCheck} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";




const Billing = () => {
  useEffect(() => {
  window.scrollTo(0, 0);
}, []);
   const location = useLocation();
    const planName = location.state?.plan ?? 'Basic';

  const navigate = useNavigate();
  const [isWrong, setShowPopUp] = useState(false);
  const[successful, setSucess] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(planName);
  const [formData, setFormData] = useState({
    email: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: "",
    city: "",
    zipCode: "",
    companyName: "",
    state: "",
    username: "",
    password: ""
  });

  const [isOn, setIsOn] = useState(false);
  const plans = {
    Basic: {
      name: "Basic",
      price: isOn ? "$300" : '$29',
      features: [
        "Up to 500 transactions per month",
        "Up to 5 users",
        "Core features",
      ],
      off: '$48'
    },
    Pro: {
      name: "Pro",
      price: isOn ? '$850' : "$79",
      features: [
        "Up to 1,000 transactions per month",
        "Up to 15 users",
        "CSV Download",
      ],
off: '$98'
    },
    Unlimited: {
      name: "Unlimited",
      price: isOn ? "$1500" : "$149",
      features: [
        "Unlimited transactions per month",
        "Unlimited users",
        "CSV Download",
      ],
      off: '$288'
    },
  };

  
 

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


const stripe = useStripe();
const elements = useElements();
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!stripe || !elements) {
    alert("Stripe has not loaded yet.");
    return;
  }

  const cardElement = elements.getElement(CardElement);
  if (!cardElement) return;

  const { paymentMethod, error } = await stripe.createPaymentMethod({
    type: "card",
    card: cardElement,
    billing_details: {
      name: formData.cardholderName,
      email: formData.email,
      address: {
        line1: formData.billingAddress,
        city: formData.city,
        postal_code: formData.zipCode,
        state: formData.state,
      },
    },
  });

  if (error) {
    console.error(error.message);
    alert(error.message);
    return;
  }


  // Now send paymentMethod.id to your Edge Function
  const res = await fetch("https://rmotaezqlbiiiwwiaomh.supabase.co/functions/v1/update-or-start-subscription", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      paymentMethodId: paymentMethod.id,
      plan: selectedPlan,
      yearly: isOn,
      email: formData.email,
      password: formData.password,
      username: formData.username,
      company: formData.companyName,
      zip: formData.zipCode,
      city: formData.city,
      state: formData.state,
      billing: formData.billingAddress
    }),
  });

  const data = await res.json();
  if (data.error) {
    setShowPopUp(true);
  } else {
    setSucess(true);
    // Optionally redirect or update UI
  }
};
useEffect(() => {
  if (isWrong) {
   
    toast(
      
      <div className="flex flex-row space-x-3">
        <CircleX className="h-6 w-6 text-red-400 ml-2"></CircleX>
        <p className="text-red-500 text-[16px]">
          Payment failed.
        </p>
      </div>,
      
         { position: "bottom-center"  }
    );
  }
}, [isWrong]);

useEffect(() => {
  if (successful) {
   
    toast(
      
      <div className="flex flex-row space-x-3">
        <BadgeCheck className="h-6 w-6 text-green-400 ml-2"></BadgeCheck>
        <p className="text-green-500 text-[16px]">
          Payment successful.
        </p>
      </div>,
      
         { position: "bottom-center"  }
    );
  }
}, [successful]);

useEffect(() => {
  if (isWrong || successful) {
    const timer = setTimeout(() => {
      setShowPopUp(false);
      setSucess(false);
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [isWrong, successful]);


  return (
          <>
    {/* {isWrong == false && (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
           zIndex: 9999, 
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="bg-white w-96 h-60 rounded-sm">
          <Lock className="items-center justify-center"></Lock>
          
        </div>
      </div>
    )} */}


    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--background))] to-[hsl(var(--muted)/0.2)] py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-4 text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors cursor-pointer"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          <h1 className="text-4xl font-bold text-[hsl(var(--foreground))] mb-2">
            Complete Your Purchase
          </h1>
          <p className="text-xl text-[hsl(var(--muted-foreground))]">
  Secure billing for your
  <span className="text-blue-500 ml-2 font-bold">FlowLeanSolutions</span> subscription
</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                <CreditCard className="h-5 w-5" />
                Select Your Plan
              </CardTitle>
              <CardDescription className="text-[hsl(var(--muted-foreground))]">
                Choose the plan that best fits your needs
              </CardDescription>
             <div className="flex items-center space-x-3 mt-2">
              <label className="relative inline-block w-12 h-6 cursor-pointer select-none">
      <input
        type="checkbox"
        checked={isOn}
        onChange={() => setIsOn(!isOn)}
        className="peer sr-only"
      />
      <div
        className="
          w-full h-full
          bg-gray-300 rounded-full
          peer-checked:bg-blue-500
          transition-colors duration-300
        "
      ></div>
      <div
        className="
          absolute top-0.5 left-0.5
          w-5 h-5 bg-white rounded-full
          shadow
          transition-transform duration-300
          peer-checked:translate-x-6
        "
      ></div>

     
    </label>
     <span className="ml-0.5 align-middle select-none text-gray-700 font-medium">
        Yearly
      </span>
    </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {Object.entries(plans).map(([key, plan]) => (
                  <div
                    key={key}
                 className={`p-4 border rounded-lg cursor-pointer transition-all ${
  selectedPlan === key
    ? "border-[hsl(var(--primary))] bg-[hsl(var(--primary)/0.05)]"
    : "border-[hsl(var(--border))] hover:border-[hsl(var(--primary)/0.5)]"
}`}
                    onClick={() => setSelectedPlan(key)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-[hsl(var(--foreground))]">
                          {plan.name}
                        </h3>
                   <div className="flex items-center gap-x-4">
  <span className="text-2xl font-bold text-[hsl(var(--primary))]">
    {plan.price}
    <span className="text-sm font-normal text-[hsl(var(--muted-foreground))]">
      {isOn ? "/year" : "/month"}
    </span>
  </span>
 { isOn && <div className="bg-green-200 w-16 h-6 rounded-sm text-center text-green-800 font-medium" >
  <p> -{plan.off}</p>
  </div>
}
</div>
                      </div>
                      <input
                        type="radio"
                        checked={selectedPlan === key}
                        onChange={() => setSelectedPlan(key)}
                        className="mt-1"
                      />
                    </div>
                    <ul className="mt-2 space-y-1">
                      {plan.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-sm text-[hsl(var(--muted-foreground))]"
                        >
                          • {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-[hsl(var(--foreground))]">
                <Lock className="h-5 w-5" />
                Payment Information
              </CardTitle>
             
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="email" className="text-[hsl(var(--foreground))]">
                    Account Information
                  </Label>
                  <p className="text-xs mt-1">If the company exists, your payment will be linked to the existing account. If not, a new account will be created upon successful payment.</p>
                  <div className="h-1.5"> </div>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>
 <Input
                    id="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={(e) => handleInputChange("username", e.target.value)}
                    required
                  />
                   <Input
                    id="password"
                    type="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    required
                  />
                <div className="space-y-1">
                  {/* <Label
                    htmlFor="cardholderName"
                    className="text-[hsl(var(--foreground))]"
                  >
                    Company
                  </Label> */}
                  <Input
                    id="companyName"
                    placeholder="Company"
                    value={formData.companyName}
                   
                    onChange={(e) =>
                    
                      handleInputChange("companyName", e.target.value)
                    }
                    required
                  />
                </div>
{/* <div className="space-y-3">
  <button 
  type="button"
  className="bg-blue-500 rounded-md p-2 w-full hover:bg-blue-400 text-white cursor-pointer"
  onClick={checkCompany}
  >
    
    Save
  </button>
</div> */}
                <div className="space-y-2">
                  <Label htmlFor="cardNumber" className="text-[hsl(var(--foreground))]">
                    Card Information
                  </Label>
<div className="space-y-2">
 
  <div className="border border-gray-300 rounded-md px-3 py-2 bg-white">
   <CardElement
  options={{
    style: {
      base: {
        
        '::placeholder': {
        color: '#B0B0B0', 
        fontFamily: 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
             fontWeight: '350',
        },
      },
      invalid: {
        
        color: '#ef4444',
      },
    },
  }}
/>
  </div>
</div>
                </div>

                             <div className="space-y-1">
                  <Label htmlFor="email" className="text-[hsl(var(--foreground))]">
Cardholder Name                  </Label>
          
                  <Input
                    id="cardholderName"
                    
                    placeholder="John Doe"
                    value={formData.cardholderName}
                    onChange={(e) => handleInputChange("cardholderName", e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="billingAddress"
                    className="text-[hsl(var(--foreground))]"
                  >
                    Billing Address
                  </Label>
                  <Input
                    id="billingAddress"
                    placeholder="123 Main Street"
                    value={formData.billingAddress}
                    onChange={(e) => handleInputChange("billingAddress", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-[hsl(var(--foreground))]">
                      City
                    </Label>
                    <Input
                      id="city"
                      placeholder="San Fransisco"
                      value={formData.city}
                      onChange={(e) => handleInputChange("city", e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="zipCode" className="text-[hsl(var(--foreground))]">
                      ZIP Code
                    </Label>
                    <Input
                      id="zipCode"
                      placeholder="94102"
                      value={formData.zipCode}
                      onChange={(e) => handleInputChange("zipCode", e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="state" className="text-[hsl(var(--foreground))]">
                    State/Providence
                  </Label>
                  <Input
                  placeholder="California"
                  id="state"
                   value={formData.state}
                      onChange={(e) => handleInputChange("state", e.target.value)}
                      required
                  >
                   
                  </Input>
                </div>

                <div className="pt-2 border-t border-[hsl(var(--border))]">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-lg font-semibold text-[hsl(var(--foreground))]">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-[hsl(var(--primary))] mb-1">
                      {plans[selectedPlan as keyof typeof plans].price}{isOn ? '/year' : '/month'}
                    </span>
                    
                  </div>
                  
                  <Button type="submit" className="w-full bg-blue-400 hover:bg-blue-500 cursor-pointer text-white" size="lg" >
                    <Lock className="mr-2 h-4 w-4" />
                    Complete Purchase
                  </Button>
                 
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
    </>
  );
};

export default Billing;