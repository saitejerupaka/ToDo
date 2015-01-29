using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDoTasks.Models;

namespace ToDoTasks.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public JsonResult Tasks()
        {
            var taskList = new[]{ 
                new Tasks{isDone = true,title = "Task1"},
                new Tasks{isDone = false,title ="Task21"},
                new Tasks{isDone = true,title ="Task12"},
                new Tasks{isDone = false,title ="Task121"},
                new Tasks{isDone = true,title ="Task13"},
                new Tasks{isDone = true,title ="Task112"},

            };
            return this.Json(taskList, JsonRequestBehavior.AllowGet);
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}