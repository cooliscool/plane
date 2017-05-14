
// We_by_Wo obtained as a funtion of W_o
// according to the straight line relation We_by_Wo = -.00261(W_o) + 0.41106
// obtained by fitting the historical data of variation of
// We/Wo with Wo. The variables 'm' and 'c' denotes corresponding constants
// of the straight line.

function We_by_Wo (W_o) {
  m 	= -.00261;
	c	= 0.41106;
	return m * W_o + c;
}

// Initial values assumed for two consecutive iterations of weight
W_o 			= 0.5;
W_o1 			= 7;


// Weights of payload , power system, solar weight and Static weight. in Kilograms
// This time, Solar panel weight goes into the static part.

W_payload 		= 0.364;
W_powersystem	= 0.471;
W_solar			= 0.400;


function firstWeight(W_payload, W_powersystem, W_solar){

  // from weightEstimate1v2.py here https://github.com/vmanoj1996/solarPlaneAeroDesign2017/blob/master/reports/report1/code/weightEstimate1v2.py

  // We start with given values of Payload, Powerplant and Battery weights
  // decided based on many calculations done until now . Using this data and
  // the historical data of Structural Weight variation with Net weight,
  // we have to get a new Weight estimate.

  W_static		= W_powersystem + W_payload + W_solar;

  // 'tolerance' : Value ( in kilograms ) of allowed difference between
  // consecutive weight estimates.
  tolerance 		= 0.0001;
  // 'itr' : Variable to count the number of iterations done to converge
  // weight estimate under margin of the required tolerance
  itr 			= 0;
  // variable for storing residuals in each iteration
  //res 			= {};


  // The loop is run until a better estimate (which is when consecutive weight estimates
  // have a difference less than tolerance) of static weight is obtained.

  while ( Math.abs(W_o1/W_o - 1) > tolerance ){
    //res[itr]	= (W_o1/W_o - 1);
  	itr 		+= 1;
  	W_o 		= W_o1;
  	W_o1 		= W_static / (1 - We_by_Wo(W_o) );
  }

  return "Weight Estimates (in kg ) <br> Net A/C  : " + W_o +"<br> Solar panel : " + W_solar + " <br> Structural : "+   We_by_Wo(W_o)*W_o ;

  //print res

}
