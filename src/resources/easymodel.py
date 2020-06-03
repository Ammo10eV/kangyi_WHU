import math
import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import sys

# 程序有误
# 用python实现南京大学李江教授的改进后SEIR模型
# T=0 是2019.12.8日
plt.rcParams['font.sans-serif'] = ['KaiTi']
plt.rcParams['axes.unicode_minus'] = False


# f=open("C:\\Users\\Thinkpad\\Desktop\\test.txt",'a')
# T=0----12.8日
def calc(T, b, r):
    result1 = 0
    result2 = 0
    result3 = 0
    result4 = 0

    for i in range(0, len(T) - 1):

        S.append(S[i] - r * b * S[i] * I[i] / N - r2 * b2 * S[i] * E[i] / N)
        E.append(E[i] + r * b * S[i] * I[i] / N - a * E[i] + r2 * b2 * S[i] * E[i] / N)
        I.append(I[i] + a * E[i] - y * I[i])
        R.append(R[i] + y * I[i])
        if (I[i] - I[i - 1] < 0 and I[i - 1] - I[i - 2] > 0 and not (i == 1)):
            # print()
            result1 = i - 1
            result2 = math.floor(I[i - 1])

        if (E[i] - E[i - 1] < 0 and E[i - 1] - E[i - 2] > 0 and not (i == 1)):
            # print()
            result3 = i - 1
            result4 = math.floor(E[i - 1])


    print(result1)
    print(result2)
    print(result3)
    print(result4)


def plot(T, S, E, I, R, s):
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
    # plt.show()
    fig.savefig("C:\\Users\\Thinkpad\\eclipse-workspace\\kangyi\\WebContent\\images\\graph" + s + ".png")
    ss="graph"+s+".png"
    print(ss)


if __name__ == '__main__':
    N = 14000000  # 人口总数---预测武汉疫情---传染到外省的人数有限，所以使用武汉的人

    N1 = sys.argv[1]
    r1 = sys.argv[2]


    s = (N1 + r1).replace('.', '')
    N=int(N1)
    r=float(r1)
    r2 = r

    a = 0.17  # 潜伏者患病概率
    y = 0.289  # 康复概率

    b = 0.017
    b2 = b
    T = [i for i in range(0, 140)]  # 时间
    E = []  # 潜伏携带者

    E.append(0)

    I = []  # 患病的人

    I.append(1)

    S = []  # 易感者

    S.append(N - I[0])

    R = []  # 康复者

    R.append(0)
    calc(T, b, r)

    plot(T, S, E, I, R, s)
