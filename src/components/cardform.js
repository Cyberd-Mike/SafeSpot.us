import React from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {Button} from '@material-ui/core';
import { useSnackbar } from 'notistack';

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
          color: "#32325d",
          fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
          fontSmoothing: "antialiased",
          fontSize: "16px",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#fa755a",
          iconColor: "#fa755a",
        },
      },
}

export const CardForm = (props) => {
  const stripe = useStripe();
  const elements = useElements();
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = async (event) => {

    if(!stripe || !elements){
      return;
    }

    const cardElement = elements.getElement(CardElement);
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    if (error) {
      console.log('Error', error)
      enqueueSnackbar('Error adding card', { 
        variant: 'error',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        } 
      });
      return error;
    }else{
      console.log('Payment Method', paymentMethod)
      enqueueSnackbar('Payment Method Added!', {
        variant: 'success',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        }
      });
      props.onChange(paymentMethod);
    }    
  }
  
    return(
      <form>
        <CardElement />
        <Button onClick={() => handleSubmit()} disabled={!stripe}>
          Add Card
        </Button>
      </form>
    )
}

export default CardForm;