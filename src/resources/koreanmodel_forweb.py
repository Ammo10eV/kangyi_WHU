import math
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import datetime

# 程序有误
# 用python实现南京大学李江教授的改进后SEIR模型
# 韩国预测
# 用python实现南京大学李江教授的改进后SEIR模型
# T=0 是2020.1.22日--0天
# 3月15日---7577	第53天 峰值

# 韩国的死亡率为0.021577 世界卫生组织给的值是3.4% 中国约为0.01 在中间，比较可信
# 大邱人口 2490000 庆尚北道2700000  京畿道12,976,734 首尔10040000
# 经验---分段是确定峰值的最好办法

plt.rcParams['font.sans-serif'] = ['KaiTi']
plt.rcParams['axes.unicode_minus'] = False


# f=open("C:\\Users\\Thinkpad\\Desktop\\test.txt",'a')

def calc(T, b1, b2, b3, b4):
    j = 9
    k = 6
    m = 0
    js = j
    ks = k
    ms = m

    for i in range(0, len(T) - 1):
        if (i >= date1):
            if (date1 <= 34):
                if (strategy1 == 1):
                    j = js - 4
                    k = ks - 4  # 注意不要让值减少到负数！！！
                    # 如果m大于4，要写 m=m-4
                elif (strategy1 == 2):
                    j = js - 1
                    k = ks - 1
                elif (strategy1 == 3):
                    j = js - 3
                    k = ks - 3
                elif (strategy1 == 4):
                    j = 5
                    k = 5
            elif (date1 <= 47):
                if (strategy1 == 1):
                    k = ks - 4
                elif (strategy1 == 2):
                    k = ks - 1
                elif (strategy1 == 3):
                    k = ks - 3
                elif (strategy1 == 4):
                    k = 5
            elif (date1 <= 54):
                # 因为m=0，所以不能再减少了，只有第4条有作用
                # if (strategy1 == 1):
                #     m = m - 4
                # elif (strategy1 == 2):
                #     m = m - 1
                # elif (strategy1 == 3):
                #     m = m - 3
                if (strategy1 == 4):
                    m = 5

        if (i >= date2):
            if (date2 <= 34):
                if (strategy2 == 1):
                    j = js - 4
                    k = ks - 4  # 注意不要让值减少到负数！！！
                    # 如果m大于4，要写 m=m-4
                elif (strategy2 == 2):
                    j = js - 1
                    k = ks - 1
                elif (strategy2 == 3):
                    j = js - 3
                    k = ks - 3
                elif (strategy2 == 4):
                    j = 5
                    k = 5
            elif (date2 <= 47):
                if (strategy2 == 1):
                    k = ks - 4
                elif (strategy2 == 2):
                    k = ks - 1
                elif (strategy2 == 3):
                    k = ks - 3
                elif (strategy2 == 4):
                    k = 5
            elif (date2 <= 54):
                # 因为m=0，所以不能再减少了，只有第4条有作用
                # if (strategy1 == 1):
                #     m = m - 4
                # elif (strategy1 == 2):
                #     m = m - 1
                # elif (strategy1 == 3):
                #     m = m - 3
                if (strategy2 == 4):
                    m = 5
        if (i >= date3):
            if (date3 <= 34):
                if (strategy3 == 1):
                    j = js - 4
                    k = ks - 4  # 注意不要让值减少到负数！！！
                    # 如果m大于4，要写 m=m-4
                elif (strategy3 == 2):
                    j = js - 1
                    k = ks - 1
                elif (strategy3 == 3):
                    j = js - 3
                    k = ks - 3
                elif (strategy3 == 4):
                    j = 5
                    k = 5
            elif (date3 <= 47):
                if (strategy3 == 1):
                    k = ks - 4
                elif (strategy3 == 2):
                    k = ks - 1
                elif (strategy3 == 3):
                    k = ks - 3
                elif (strategy3 == 4):
                    k = 5
            elif (date3 <= 54):
                # 因为m=0，所以不能再减少了，只有第4条有作用
                # if (strategy1 == 1):
                #     m = m - 4
                # elif (strategy1 == 2):
                #     m = m - 1
                # elif (strategy1 == 3):
                #     m = m - 3
                if (strategy3 == 4):
                    m = 5

        if (i <= 34):  # 改为 旧r1=新(r1+r3) 旧r2=新(r2+r4)=20.23 这里要保证r1>r3 r2>r4
            r1 = 15 * j * 0.1
            r2 = 15 * j * 0.1
            r3 = 15 - r1
            r4 = 15 - r2
            r11 = r1
            r12 = r2
            r13 = r3
            r14 = r4




        elif (i <= 47):  # 旧r1=新(r1+r3) 旧r2=新(r2+r4)=20.23  r1=50 r2=4
            r1 = 30 * k * 0.1
            r2 = 4 * k * 0.1
            r3 = 30 - r1  # --调试中
            r4 = 4 - r2  # --调试中
            r21 = r1
            r22 = r2
            r23 = r3
            r24 = r4




        elif (i <= 54):
            r1 = (30 - (i - 47) * 4.285714) * m * 0.1
            r2 = 4 * m * 0.1
            r3 = (30 - (i - 47) * 4.285714) - r1  # --调试中
            r4 = 4 - r2  # --调试中
            r31 = r1
            r32 = r2
            r33 = r3
            r34 = r4


        else:
            r1 = 0
            r2 = 0
            r3 = 4  # --调试中---估计就是这个
            r4 = 4  # --调试中-估计就是这个

        S.append(
            S[i] - r1 * b1 * S[i] * I[i] / N - r2 * b2 * S[i] * E[i] / N - r3 * b3 * S[i] * I[i] / N - r4 * b4 * S[i] *
            E[i] / N)
        E.append(E[i] + r1 * b1 * S[i] * I[i] / N - a * E[i] + r2 * b2 * S[i] * E[i] / N + r3 * b3 * S[i] * I[
            i] / N + r4 * b4 * S[i] * E[i] / N)
        I.append(I[i] + a * E[i] - y * I[i])
        R.append(R[i] + y * I[i])

        # 新加的
        if (I[i] - I[i - 1] < 0 and I[i - 1] - I[i - 2] > 0 and not (i == 1)):
            # print()
            result1 = i - 1
            result2 = math.floor(I[i - 1])
            # print((i-1))
            # print(math.floor(I[i-1]))
        if (E[i] - E[i - 1] < 0 and E[i - 1] - E[i - 2] > 0 and not (i == 1)):
            # print()
            result3 = i - 1
            result4 = math.floor(E[i - 1])

    # 新加的
    result5 = int(I[int(nowdate)])  # 本日预测

    if (int(I[int(nowdate)] - I[int(nowdate) - 1]) >= 0):
        result6 = "+" + str(int(I[int(nowdate)] - I[int(nowdate) - 1]))  # 较昨日
    else:
        result6 = "-" + str(int(I[int(nowdate)] - I[int(nowdate) - 1]))
    # result5= int(I[int(nowdate)] )#本日预测
    # result6 = int(I[int(nowdate)] -I[int(nowdate)-1]) # 较昨日
    result7 = int(I[int(nowdate) + 1])  # 明日预测
    if (int(I[int(nowdate) + 1] - I[int(nowdate)]) >= 0):
        result8 = "+" + str(int(I[int(nowdate) + 1] - I[int(nowdate)]))  # #较今日
    else:
        result8 = "-" + str(int(I[int(nowdate) + 1] - I[int(nowdate)]))
    # result8 = int(I[int(nowdate)+1] - I[int(nowdate) ])  # 较今日

    print(result1)
    print(result2)
    print(result3)
    print(result4)
    print(result5)
    print(result6)
    print(result7)
    print(result8)


def plot(T, S, E, I, R):
    # plt.figure()
    # plt.title("SEIR-病毒传播时间曲线")
    # plt.plot(T, S, color='r', label='易感者')
    # plt.plot(T, E, color='k', label='潜伏者')
    # plt.plot(T, I, color='b', label='传染者')
    # plt.plot(T, R, color='g', label='康复者')
    # plt.grid(False)
    # plt.legend()
    # plt.xlabel("时间(天)")
    # plt.ylabel("人数")
    # plt.show()
    # (plt.figure()).savefig("graph4-13.png")
    fig = plt.figure()
    plt.title("SEIR-病毒传播时间曲线")
    plt.plot(T, S, color='r', label='易感者')
    plt.plot(T, E, color='k', label='潜伏者')
    plt.plot(T, I, color='b', label='传染者')
    plt.plot(T, R, color='g', label='康复者')
    plt.grid(False)
    plt.legend()
    plt.xlabel("时间(天)")
    plt.ylabel("人数")
    plt.show()

    # 新加的
    fig.savefig("C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\WebContent\\images\\graph" + s + ".png")
    ss = "graph" + s + ".png"
    print(ss)


##if __name__ == '__main__':

# 首先还是设置一下参数,之后方便修改
if __name__ == '__main__':
    print("进入python")
    input1 = sys.argv[1]
    input2 = sys.argv[2]
    input3 = sys.argv[3]
    input4 = sys.argv[4]
    input5 =sys.argv[5]
    input6 = sys.argv[6]
   

    # strategy1 = int(sys.argv[1])
    # date1 = datetime.datetime.strptime(str((sys.argv[2])), '%Y-%m-%d')

    # 新加的
    date1 = (datetime.datetime.strptime(input1, '%Y-%m-%d') - datetime.datetime.strptime('2020-01-22', '%Y-%m-%d')).days
    strategy1 = int(input2)
    date2 = (datetime.datetime.strptime(input3, '%Y-%m-%d') - datetime.datetime.strptime('2020-01-22', '%Y-%m-%d')).days
    strategy2 = int(input4)
    date3 = (datetime.datetime.strptime(input5, '%Y-%m-%d') - datetime.datetime.strptime('2020-01-22', '%Y-%m-%d')).days
    strategy3 = int(input6)

    # 新加的
    nowdate = (datetime.datetime.now() - datetime.datetime.strptime('2020-01-22', '%Y-%m-%d')).days
    s = (str(strategy1) + str(date1) + str(strategy2) + str(date2) + str(strategy3) + str(date3)).replace('.', '')

    N = 28206734  #

    a = 0.17  # 潜伏者患病概率
    y = 0.289  # 康复概率

    b1 = 0.025
    b2 = 0.025
    b3 = 0.009
    b4 = 0.009
    T = [i for i in range(0, 140)]  # 时间
    E = []  # 潜伏携带者

    E.append(0)

    I = []  # 患病的人

    I.append(1)

    S = []  # 易感者

    S.append(N - I[0])

    R = []  # 康复者

    R.append(0)
    calc(T, b1, b2, b3, b4)

    plot(T, S, E, I, R)