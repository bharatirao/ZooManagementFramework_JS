
class AddnormalTicketPage
{
    
// 
  get dashboard()
    {
        return $("//span[.='Dashboard'][1]")
    }
    
   
get NormalTicket()
{
  return $("//div[@class='sidebar-menu']//ul[@id='menu']//a//span[text()='Normal Ticket']")
}

get AddTicket()
{
  return $("//div[@class='sidebar-menu']//ul[@class='metismenu']//ul[@class='collapse in']//a[text()='Add Ticket']")
}

// get AddTicketPageValidation()
// {
//   //await expect(browser).toHaveTitleContaining("Zoo Management System || Dashboard") 
// }
get visitorname()
{
  return $("//input[@id='visitorname']")
}
get adult()
{
  return $("//input[@id='noadult']")
}
get child()
{
  return $("//input[@name='nochildren']")
}
get submit1()
{
  return $("//button[@type='submit']")
}

get admin()
{
    return $("//i[@class='fa fa-angle-down']")
}

get logout()
{
    return $("//a[text()='Log Out']")
}

}

module.exports=new AddnormalTicketPage();