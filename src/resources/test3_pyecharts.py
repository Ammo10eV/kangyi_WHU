import pyecharts.options as opts
from pyecharts.charts import Line

import re
import gc
import pymysql


gc.disable()
input="italy"

print("python程序")
connect = pymysql.connect(host='127.0.0.1', user='root', password="", db='covid_19', charset='utf8')  # 连接数据库
cursor = connect.cursor();  # 获取游标

sql = "select date from"+" "+input  # 查询account=13545684578这一行数据
cursor.execute(sql)
x_data = []
for row in cursor.fetchall():
    x_data.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" spain"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data1 = []
for row in cursor.fetchall():
    y_data1.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" uk"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data2 = []
for row in cursor.fetchall():
    y_data2.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" china"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data3 = []
for row in cursor.fetchall():
    y_data3.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" korean"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data4 = []
for row in cursor.fetchall():
    y_data4.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" us"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data5 = []
for row in cursor.fetchall():
    y_data5.append(str(row[0]))

sql = "select Cumulative_diagnosis from"+" italy"  # 查询account=13545684578这一行数据
cursor.execute(sql)
y_data6 = []
for row in cursor.fetchall():
    y_data6.append(str(row[0]))

(
    Line()
    .add_xaxis(xaxis_data=x_data)
    .add_yaxis(
        series_name="Spain",
        stack="总量",
        y_axis=y_data1,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=False),
    )
    .add_yaxis(
        series_name="UK",
        stack="总量",
        y_axis=y_data2,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=False),
    )
    .add_yaxis(
        series_name="China",
        stack="总量",
        y_axis=y_data3,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=False),
    )
    .add_yaxis(
        series_name="Korean",
        stack="总量",
        y_axis=y_data4,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=False),
    )
    .add_yaxis(
        series_name="US",
        stack="总量",
        y_axis=y_data5,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=False),
    )

    .add_yaxis(
        series_name="Italy",
        stack="总量",
        y_axis=y_data6,
        areastyle_opts=opts.AreaStyleOpts(opacity=0.5),
        label_opts=opts.LabelOpts(is_show=True, position="top"),
    )
    .set_global_opts(
        title_opts=opts.TitleOpts(title="堆叠区域图"),
        tooltip_opts=opts.TooltipOpts(trigger="axis", axis_pointer_type="cross"),
        yaxis_opts=opts.AxisOpts(
            type_="value",
            axistick_opts=opts.AxisTickOpts(is_show=True),
            splitline_opts=opts.SplitLineOpts(is_show=True),
        ),
        xaxis_opts=opts.AxisOpts(type_="category", boundary_gap=False),
    )
    .render("stacked_area_chart4.html")
)
print("create stack graph successfully")
