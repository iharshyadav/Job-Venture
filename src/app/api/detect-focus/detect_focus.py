import sys
import cv2
import mediapipe as mp
import numpy as np

def distance(point1, point2):
    return np.linalg.norm(np.array(point1) - np.array(point2))

def is_focused(landmarks):
    left_iris_center = landmarks[468]  # Left iris center
    right_iris_center = landmarks[473]  # Right iris center

    iris_center_avg = [(left_iris_center.x + right_iris_center.x) / 2, 
                       (left_iris_center.y + right_iris_center.y) / 2]
    
    nose_tip = landmarks[1]  # Nose tip position
    nose_to_left_iris = distance((nose_tip.x, nose_tip.y), (left_iris_center.x, left_iris_center.y))
    nose_to_right_iris = distance((nose_tip.x, nose_tip.y), (right_iris_center.x, right_iris_center.y))

    # If the difference between left and right iris distances to the nose is significant, the user is unfocused
    if abs(nose_to_left_iris - nose_to_right_iris) > 0.02:
        return False  # Unfocused
    return True  # Focused

def main(image_path):
    mp_face_mesh = mp.solutions.face_mesh
    face_mesh = mp_face_mesh.FaceMesh(max_num_faces=1, refine_landmarks=True)

    # Load image
    frame = cv2.imread(image_path)
    rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

    result = face_mesh.process(rgb_frame)

    if result.multi_face_landmarks:
        for face_landmarks in result.multi_face_landmarks:
            landmarks = face_landmarks.landmark

            if is_focused(landmarks):
                print("focused")
                return
            else:
                print("unfocused")
                return

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python3 detect_focus.py <image_path>")
        sys.exit(1)

    image_path = sys.argv[1]
    main(image_path)
