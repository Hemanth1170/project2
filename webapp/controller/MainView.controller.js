sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("com.hemanth.apps.project2.controller.MainView", {
            onInit: function () {
                var oData = {'Details':[{Name : "Hemanth", Id : "23", Age : "234", Height : "5.4", Salary : "123"},
                {Name : "Hemanth", Id : "23", Age : "234", Height : "5.4", Salary : "123"},
                {Name : "Hemanth", Id : "23", Age : "234", Height : "5.4", Salary : "123"},
                {Name : "Hemanth", Id : "23", Age : "234", Height : "5.4", Salary : "123"}]}
                var oModel = new JSONModel(oData);
                this.getView().setModel(oModel);
            }
        });
    });
