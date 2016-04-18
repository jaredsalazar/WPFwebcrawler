//Created by Jared Joel Salazar
// Email: jared@techaguru.com
// Date: March 17, 2016

var date_time, temp, humid, wind_speed, wind_direct, gust, rainfall;
var current_range, rowData;

var ss = SpreadsheetApp.getActiveSpreadsheet();
var datasheet = ss.getSheetByName('Current Data');
var readingsheet = ss.getSheetByName('Readings');

function getData() {
current_range = datasheet.getRange(2, 1);
var weblink = current_range.getValue();
current_range.clear();
Utilities.sleep(200);
current_range.setValue("");
Utilities.sleep(200);
current_range.setValue(weblink);
  current_range = datasheet.getRange(2, 2);
  date_time = current_range.getValue();
  var date_time_array = [{}];
  date_time_array = date_time.split(",");
  date_time = date_time_array[2] + "," + date_time_array[3] + " " + date_time_array[0];

  current_range = datasheet.getRange(2, 3);
  temp = current_range.getValue();
  temp = parseFloat(temp);

  current_range = datasheet.getRange(2, 4);
  var wind_speed_direct = current_range.getValue();
  var wind_speed_direct_array = [{}];
  wind_speed_direct_array = wind_speed_direct.split(",");
  wind_speed = wind_speed_direct_array[0];
  wind_direct = wind_speed_direct_array[1];

  current_range = datasheet.getRange(2, 5);
  gust = current_range.getValue();

  current_range = datasheet.getRange(2, 6);
  rainfall = current_range.getValue();
  rainfall = parseFloat(rainfall);

  current_range = datasheet.getRange(2, 7);
  humid = current_range.getValue();


  rowData = [date_time, temp, humid, wind_speed, wind_direct, gust, rainfall];

  readingsheet.insertRowBefore(2);
  for(var i = 0; i < 7; i++){
    current_range = readingsheet.getRange(2, i+1);
    current_range.setValue(rowData[i]);
  }

  current_range = datasheet.getRange(2, 1);
  current_range.clear();
  current_range.setValue(weblink);
}
