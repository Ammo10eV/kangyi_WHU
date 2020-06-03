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
def calc(T, b):
    result1 = 0
    result2 = 0
    result3 = 0
    result4 = 0
    for i in range(0, len(T) - 1):
        if (i <= stage1):
            r = r11
            r2 = r12
        elif (i <= stage2):
            r = r21
            r2 = r22
        elif (i <= stage3):
            r = r31
            r2 = r32
        else:
            r = r41
            r2 = r42

        S.append(S[i] - r * b * S[i] * I[i] / N - r2 * b2 * S[i] * E[i] / N)
        E.append(E[i] + r * b * S[i] * I[i] / N - a * E[i] + r2 * b2 * S[i] * E[i] / N)
        I.append(I[i] + a * E[i] - y * I[i])
        R.append(R[i] + y * I[i])
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
            # print(i-1)
            # print(i-1)
            # print(I[i-1])
            # print(I[i-1])

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
    ss = "graph" + s + ".png"
    print(ss)


if __name__ == '__main__':
    N = 14000000  # 人口总数---预测武汉疫情---传染到外省的人数有限，所以使用武汉的人

    N = int(sys.argv[1])
    stage1 = int(sys.argv[2])
    stage2 = int(sys.argv[3])
    stage3 = int(sys.argv[4])
    r11 = float(sys.argv[5])
    r12 = float(sys.argv[6])
    r21 = float(sys.argv[7])
    r22 = float(sys.argv[8])
    r31 = float(sys.argv[9])
    r32 = float(sys.argv[10])
    r41 = float(sys.argv[11])
    r42 = float(sys.argv[12])

    s = (str(N) + str(r11) + str(r12) + str(r21) + str(r22) + str(r31) + str(r32) + str(stage1) + str(stage2) + str(
        stage3)).replace('.', '')

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
    calc(T, b)

    plot(T, S, E, I, R, s)
