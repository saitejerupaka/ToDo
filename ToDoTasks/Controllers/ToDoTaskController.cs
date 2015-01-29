using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using ToDoTasks.Models;

namespace ToDoTasks.Controllers
{
    public class ToDoTaskController : Controller
    {
        //
        // GET: /ToDoTask/
        public JsonResult Index()
        {
            var taskList = new[]{ 
                new Tasks{isDone = true,title = "Task1"},
                new Tasks{isDone = false,title ="Task21"},
                new Tasks{isDone = true,title ="Task12"},
                new Tasks{isDone = false,title ="Task121"},
                new Tasks{isDone = true,title ="Task13"},
                new Tasks{isDone = true,title ="Task112"},

            };
            return this.Json(taskList);
        }
	}
}