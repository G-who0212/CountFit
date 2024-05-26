import cv2
import sys
import numpy

from get_count import predict_image

def main():
    image = cv2.imread('C:/Users/ehsso/OneDrive/Pictures/Gerrard.jpg')
    chk = 1 # count를 셀만한 정도로 움직였는지  check / 0: 준비X, 1: 운동 준비O, 2: count를 셀만큼의 가동범위 동작
    count = 0
    count_chk, chk = predict_image(image, chk)
    print(chk)
    if count_chk is True:
        count += 1

if __name__ == '__main__':
    main()