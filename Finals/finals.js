function getTime(credits, time, day)
	{
		var examTime = "not available";

		if (time.length < 7)
			{
				time = '0' + time;
			}

		if (credits != 5 && time == "08:00am" && (day == "TR" || day ==""))
			{
				examTime = "7:30-9:30am on Wednesday, April 30";
			}
		else if (credits == 5 && time == "08:00am")
			{
				examTime = "7:30-9:30am on Thursday, May ";
			}
		else if (time == "08:00am" && (day == "MWF" || day == "MW" || day == "WF"))
			{
				examTime = "7:30-9:30am on Thursday, May 1";
			}
		else if (time == "09:00am")
			{
				examTime = "7:30-9:30am on Friday, May 2";
			}
		else if (credits != 5 && time == "11:00am" && (day == "TR" || day == ""))
			{
				examTime = "9:45-11:45am on Tuesday, April 29";
			}
		else if (time == "11:00am" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "9:45-11:45am on Thursday, May 1";
			}
		else if (time == "10:00am")
			{
				examTime = "9:45-11:45am on Wednesday, April 30";
			}
		else if (time == "09:30am")
			{
				examTime = "9:45-11:45am on Friday, May 2";
			}
		else if (time == "12:30pm")
			{
				examTime = "12:00-2:00pm on Tuesday, April 29";
			}
		else if (time == "12:00pm")
			{
				examTime = "12:00-2:00pm on Wednesday, April 29"; 
			}
		else if (credits != 5 && time == "02:00pm" && (day == "TR" || day == ""))
			{
				examTime = "12:00-2:00pm on Thursday, May 1st"; 
			}
		else if (time == "02:00pm" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "2:15-4:15pm on Thursday, May 1";
			}
		else if (time == "01:00pm" && day != "TR")
			{
				examTime = "12:00-2:00pm on Friday, May 2";
			}
		else if (time == "01:00pm")
			{
				examTime = "12:00-2:00pm on Tuesday, April 29";
			}
		else if (time == "03:30pm")
			{
				examTime = "2:15-4:15pm on Tuesday, April 29";
			}
		else if (time == "03:00pm")
			{
				examTime = "2:15-4:15pm on Wednesday, April 30";
			}
		else if (time == "04:00pm")
			{
				examTime = "2:15-4:15pm on Friday, May 2";
			}
		else if (credits != 5 && time == "05:00pm" && (day == "TR" || day == ""))
			{
				examTime = "4:30-6:30pm on Tuesday, April 29";
			}
		else if (time == "05:00pm" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "4:30-6:30pm on Wednesday, April 30";
			}
		else if (time == "06:30pm" && (day == "T" || day == "TR"))
			{
				examTime = "7:00-9:00pm on Tuesday, April 29";
			}
		else if (time == "06:30pm" && day == "W")
			{
				examTime = "7:00-9:00pm on Wednesday, April 30";
			}
		else if (time == "06:30pm" && day == "R")
			{
				examTime = "7:00-9:00pm on Thursday, May 1";
			}
		else if (time == "08:00pm" && day == "TR")
			{
				examTime = "7:00-9:00pm on Tuesday, April 29";
			}
		else if (time == "08:00pm" && day == "MW")
			{
				examTime = "7:00-9:00pm on Wednesday, April 30";
			}

	document.getElementById('output').innerHTML = "The exam is " + examTime + "."
	}
